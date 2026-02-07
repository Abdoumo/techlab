import { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import nodemailer from "nodemailer";

// Validation schema for inquiry data
const inquirySchema = z.object({
  serviceName: z.string().min(1, "Service name is required"),
  email: z.string().email("Valid email is required"),
  data: z.record(z.any()).optional().default({}),
});

type InquiryRequest = z.infer<typeof inquirySchema>;

// Create email transporter
const createEmailTransporter = () => {
  const gmailEmail = process.env.GMAIL_EMAIL;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailEmail || !gmailAppPassword) {
    throw new Error(
      "Gmail credentials not configured. Please set GMAIL_EMAIL and GMAIL_APP_PASSWORD environment variables."
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailEmail,
      pass: gmailAppPassword,
    },
  });
};

// Send admin email
const sendServiceInquiryEmail = async (
  serviceName: string,
  inquiryData: Record<string, any>
) => {
  try {
    const transporter = createEmailTransporter();

    const formattedData = Object.entries(inquiryData)
      .filter(([key, value]) => value && !key.startsWith("_"))
      .map(([key, value]) => {
        const displayKey = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());

        const displayValue = Array.isArray(value) ? value.join(", ") : String(value);

        return `<tr>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: 500; color: #374151;">${displayKey}</td>
          <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; color: #1f2937;">${displayValue}</td>
        </tr>`;
      })
      .join("");

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; }
        .header { background-color: #0f172a; color: #fff; padding: 20px; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; font-size: 24px; }
        .header p { margin: 5px 0 0 0; opacity: 0.9; }
        .content { background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; }
        .section-title { font-size: 18px; font-weight: bold; color: #1f2937; margin: 20px 0 10px 0; border-bottom: 2px solid #06b6d4; padding-bottom: 10px; }
        .inquiry-table { width: 100%; border-collapse: collapse; }
        .inquiry-table td { padding: 8px; border-bottom: 1px solid #e5e7eb; }
        .inquiry-table td:first-child { font-weight: 500; color: #374151; width: 30%; }
        .inquiry-table td:last-child { color: #1f2937; }
        .footer { background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; }
        .action-button { display: inline-block; background-color: #06b6d4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 15px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Service Inquiry</h1>
          <p>Service: <strong>${serviceName}</strong></p>
        </div>
        
        <div class="content">
          <div class="section-title">Inquiry Details</div>
          <table class="inquiry-table">
            ${formattedData}
          </table>

          <div class="section-title">Customer Contact Information</div>
          <p><strong>Email:</strong> ${inquiryData.email}</p>
          ${inquiryData.phone ? `<p><strong>Phone:</strong> ${inquiryData.phone}</p>` : ""}
          ${inquiryData.businessName ? `<p><strong>Business Name:</strong> ${inquiryData.businessName}</p>` : ""}

          <div style="background-color: #f0f9ff; border-left: 4px solid #06b6d4; padding: 15px; margin-top: 20px; border-radius: 4px;">
            <p style="margin: 0; color: #0c4a6e;">
              <strong>Note:</strong> This inquiry was submitted through your website's service request form. 
              Please review and respond to the customer within 24-48 hours.
            </p>
          </div>
        </div>

        <div class="footer">
          <p>This is an automated email from your service inquiry system.</p>
          <p>&copy; 2026 cyberlymph. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
    `;

    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      subject: `New Service Inquiry: ${serviceName}`,
      html: htmlContent,
      replyTo: inquiryData.email,
    };

    const result = await transporter.sendMail(mailOptions);

    return {
      success: true,
      messageId: result.messageId,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
};

// Send customer confirmation email
const sendCustomerConfirmationEmail = async (
  email: string,
  serviceName: string
) => {
  try {
    const transporter = createEmailTransporter();

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; }
        .header { background-color: #0f172a; color: #fff; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; }
        .success-icon { font-size: 48px; margin: 20px 0; }
        .footer { background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="success-icon">✓</div>
          <h1>Thank You for Your Inquiry</h1>
        </div>
        
        <div class="content">
          <p>Hello,</p>
          <p>We have received your service inquiry for <strong>${serviceName}</strong>.</p>
          <p>Our team will review your request and get back to you within 24-48 hours with a detailed proposal and timeline.</p>
          
          <div style="background-color: #f0f9ff; border-left: 4px solid #06b6d4; padding: 15px; margin: 20px 0; border-radius: 4px;">
            <p style="margin: 0; color: #0c4a6e;">
              <strong>What happens next:</strong>
              <br>1. We'll review your inquiry
              <br>2. Send you a detailed proposal
              <br>3. Schedule a consultation call
              <br>4. Begin development process
            </p>
          </div>

          <p style="color: #6b7280; font-size: 14px;">
            If you have any urgent questions, feel free to contact us at bedoushop@gmail.com or +213699326406
          </p>
        </div>

        <div class="footer">
          <p>&copy; 2026 cyberlymph. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
    `;

    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: `Inquiry Confirmation: ${serviceName}`,
      html: htmlContent,
    };

    const result = await transporter.sendMail(mailOptions);

    return {
      success: true,
      messageId: result.messageId,
      message: "Confirmation email sent to customer",
    };
  } catch (error) {
    console.error("Customer confirmation email error:", error);
    throw error;
  }
};

// Main handler
export default async (req: VercelRequest, res: VercelResponse) => {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    // Validate request body
    const validatedData = inquirySchema.parse(req.body);

    const { serviceName, email, data } = validatedData;

    // Combine all inquiry data
    const inquiryData = {
      email,
      ...data,
    };

    // Send emails (non-critical - continue even if emails fail)
    let adminEmailResult = null;
    let customerEmailResult = null;

    try {
      adminEmailResult = await sendServiceInquiryEmail(serviceName, inquiryData);
    } catch (emailError) {
      console.error("Admin email error (non-critical):", emailError);
    }

    try {
      customerEmailResult = await sendCustomerConfirmationEmail(email, serviceName);
    } catch (emailError) {
      console.error("Customer email error (non-critical):", emailError);
    }

    // Always return success response
    return res.status(200).json({
      success: true,
      message: "Inquiry submitted successfully",
      adminEmail: adminEmailResult,
      customerEmail: customerEmailResult,
    });
  } catch (error) {
    console.error("Error handling inquiry:", error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors,
      });
    }

    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "An error occurred while processing your inquiry",
    });
  }
};
