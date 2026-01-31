/**
 * Email Template Generator
 * These templates generate confirmation emails for service inquiries
 * To activate email sending, integrate with a backend email service (SendGrid, Mailgun, etc.)
 */

export interface EmailData {
  serviceName: string;
  clientEmail: string;
  clientName?: string;
  formData: Record<string, any>;
  businessEmail?: string;
}

/**
 * Generate confirmation email for client
 */
export function generateClientConfirmationEmail(data: EmailData): {
  subject: string;
  html: string;
  text: string;
} {
  const { serviceName, clientName = "Valued Client", formData } = data;

  const formDataHtml = Object.entries(formData)
    .map(([key, value]) => {
      if (!value || key.startsWith("_")) return "";
      const displayKey = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
      const displayValue = Array.isArray(value) ? value.join(", ") : String(value);
      return `<tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 12px; text-align: left; color: #9ca3af; font-size: 14px;">${displayKey}</td>
        <td style="padding: 12px; text-align: left; color: #f3f4f6; font-weight: 500;">${displayValue}</td>
      </tr>`;
    })
    .filter(Boolean)
    .join("");

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inquiry Confirmation - cyberlymph</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
      background-color: #0f172a;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #1e293b;
      border: 1px solid #334155;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      padding: 40px 20px;
      text-align: center;
      border-bottom: 1px solid #334155;
    }
    .logo {
      display: inline-block;
      background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
      padding: 8px;
      border-radius: 6px;
      margin-bottom: 16px;
    }
    .logo-text {
      font-size: 24px;
      font-weight: 700;
      color: white;
      display: inline;
      margin-left: 8px;
    }
    h1 {
      color: white;
      font-size: 28px;
      margin: 0;
      margin-top: 16px;
    }
    .content {
      padding: 40px;
    }
    .greeting {
      color: #e2e8f0;
      font-size: 16px;
      margin-bottom: 24px;
      line-height: 1.6;
    }
    .service-highlight {
      background-color: #334155;
      border-left: 4px solid #06b6d4;
      padding: 16px;
      margin: 24px 0;
      border-radius: 4px;
    }
    .service-name {
      color: #06b6d4;
      font-size: 18px;
      font-weight: 600;
    }
    .form-table {
      width: 100%;
      border-collapse: collapse;
      margin: 24px 0;
      background-color: rgba(51, 65, 85, 0.5);
      border-radius: 4px;
      overflow: hidden;
    }
    .form-table td {
      padding: 12px;
      font-size: 14px;
    }
    .next-steps {
      background-color: rgba(6, 182, 212, 0.1);
      border: 1px solid rgba(6, 182, 212, 0.3);
      padding: 20px;
      border-radius: 4px;
      margin: 24px 0;
    }
    .next-steps h3 {
      color: white;
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 16px;
    }
    .next-steps ol {
      color: #cbd5e1;
      font-size: 14px;
      line-height: 1.6;
      margin: 0;
      padding-left: 20px;
    }
    .next-steps li {
      margin-bottom: 12px;
    }
    .contact-info {
      background-color: #334155;
      padding: 20px;
      border-radius: 4px;
      margin: 24px 0;
      text-align: center;
      font-size: 14px;
      color: #cbd5e1;
    }
    .contact-link {
      color: #06b6d4;
      text-decoration: none;
      font-weight: 600;
    }
    .footer {
      background-color: #0f172a;
      padding: 24px;
      text-align: center;
      border-top: 1px solid #334155;
      color: #64748b;
      font-size: 12px;
    }
    .button {
      display: inline-block;
      background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
      color: #0f172a;
      padding: 12px 24px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 16px;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="logo">
        <span style="font-size: 20px; font-weight: 700; color: white;">T</span>
      </div>
      <h1>cyberlymph</h1>
      <p style="color: #cbd5e1; margin: 0; font-size: 14px;">Inquiry Confirmation</p>
    </div>

    <div class="content">
      <div class="greeting">
        <p>Hi ${clientName},</p>
        <p>Thank you for reaching out to cyberlymph! We've received your inquiry for our <strong style="color: #06b6d4;">${serviceName}</strong> service and we're excited to help you!</p>
      </div>

      <div class="service-highlight">
        <div class="service-name">${serviceName}</div>
        <p style="color: #cbd5e1; margin: 8px 0 0 0; font-size: 14px;">Your service inquiry details are secure and will be reviewed by our expert team.</p>
      </div>

      <h2 style="color: white; font-size: 16px; margin-top: 28px; margin-bottom: 12px;">Your Submitted Information</h2>
      <table class="form-table">
        <tbody>
          ${formDataHtml}
        </tbody>
      </table>

      <div class="next-steps">
        <h3>What Happens Next?</h3>
        <ol>
          <li>Our team will review your inquiry within 24-48 hours</li>
          <li>We'll send you a detailed proposal and timeline</li>
          <li>Schedule a consultation call to discuss your project</li>
          <li>Begin development and stay updated on progress</li>
        </ol>
      </div>

      <div class="contact-info">
        Need to reach us sooner? Contact us at <a href="mailto:bedoushop@gmail.com" class="contact-link">bedoushop@gmail.com</a> or <a href="tel:+15551234567" class="contact-link">+213699326406</a>
      </div>

      <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">
        We're looking forward to working with you and bringing your vision to life!<br><br>
        Best regards,<br>
        <strong style="color: #06b6d4;">The cyberlymph Team</strong>
      </p>
    </div>

    <div class="footer">
      <p style="margin: 0;">© 2024 cyberlymph. All rights reserved.</p>
      <p style="margin: 8px 0 0 0;">This is an automated confirmation email. Please do not reply to this message.</p>
    </div>
  </div>
</body>
</html>
  `;

  const text = `
cyberlymph - Inquiry Confirmation

Hi ${clientName},

Thank you for reaching out to cyberlymph! We've received your inquiry for our ${serviceName} service.

SERVICE: ${serviceName}

YOUR SUBMITTED INFORMATION:
${Object.entries(formData)
  .map(([key, value]) => {
    if (!value || key.startsWith("_")) return "";
    const displayKey = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
    const displayValue = Array.isArray(value) ? value.join(", ") : String(value);
    return `${displayKey}: ${displayValue}`;
  })
  .filter(Boolean)
  .join("\n")}

WHAT HAPPENS NEXT?
1. Our team will review your inquiry within 24-48 hours
2. We'll send you a detailed proposal and timeline
3. Schedule a consultation call to discuss your project
4. Begin development and stay updated on progress

CONTACT US:
Email: bedoushop@gmail.com
Phone: +213699326406

Best regards,
The cyberlymph Team

---
© 2024 cyberlymph. All rights reserved.
This is an automated confirmation email. Please do not reply to this message.
  `;

  return {
    subject: `Inquiry Confirmation - ${serviceName} Service | cyberlymph`,
    html,
    text,
  };
}

/**
 * Generate admin notification email (to be sent to business email)
 */
export function generateAdminNotificationEmail(data: EmailData): {
  subject: string;
  html: string;
  text: string;
} {
  const { serviceName, clientEmail, clientName = "Unknown Client", formData } = data;

  const formDataHtml = Object.entries(formData)
    .map(([key, value]) => {
      if (!value || key.startsWith("_")) return "";
      const displayKey = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
      const displayValue = Array.isArray(value) ? value.join(", ") : String(value);
      return `<tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 12px; text-align: left; color: #9ca3af; font-size: 14px; font-weight: 500;">${displayKey}</td>
        <td style="padding: 12px; text-align: left; color: #1f2937;">${displayValue}</td>
      </tr>`;
    })
    .filter(Boolean)
    .join("");

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>New Service Inquiry - ${serviceName}</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f3f4f6; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 20px; color: white;">
      <h1 style="margin: 0; font-size: 24px;">🔔 New Service Inquiry</h1>
      <p style="margin: 8px 0 0 0; color: #cbd5e1;">${serviceName}</p>
    </div>

    <div style="padding: 30px;">
      <h2 style="color: #1f2937; margin-top: 0;">Inquiry Details</h2>
      
      <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; margin-bottom: 20px;">
        <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: 600;">Service</p>
        <p style="margin: 0; color: #1f2937; font-size: 18px; font-weight: 600;">${serviceName}</p>
      </div>

      <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; margin-bottom: 20px;">
        <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: 600;">Client</p>
        <p style="margin: 0; color: #1f2937;">${clientName} (${clientEmail})</p>
      </div>

      <h3 style="color: #1f2937; font-size: 14px; text-transform: uppercase; margin: 20px 0 12px 0; font-weight: 600;">Submitted Information</h3>
      <table style="width: 100%; border-collapse: collapse; background-color: #f9fafb; border-radius: 6px; overflow: hidden;">
        <tbody>
          ${formDataHtml}
        </tbody>
      </table>

      <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 12px; margin: 0;">
          <strong>Action:</strong> Review this inquiry and follow up with the client within 24 hours.
        </p>
      </div>
    </div>

    <div style="background-color: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
      <p style="margin: 0;">cyberlymph Admin Notification System</p>
    </div>
  </div>
</body>
</html>
  `;

  const text = `
NEW SERVICE INQUIRY
==================

Service: ${serviceName}
Client: ${clientName}
Email: ${clientEmail}

SUBMITTED INFORMATION:
${Object.entries(formData)
  .map(([key, value]) => {
    if (!value || key.startsWith("_")) return "";
    const displayKey = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
    const displayValue = Array.isArray(value) ? value.join(", ") : String(value);
    return `${displayKey}: ${displayValue}`;
  })
  .filter(Boolean)
  .join("\n")}

ACTION: Review this inquiry and follow up with the client within 24 hours.

---
cyberlymph Admin Notification System
  `;

  return {
    subject: `[NEW INQUIRY] ${serviceName} - ${clientName}`,
    html,
    text,
  };
}

/**
 * Example usage for sending emails (requires backend integration)
 *
 * Example with SendGrid:
 * =====================
 * import sgMail from '@sendgrid/mail';
 *
 * sgMail.setApiKey(process.env.SENDGRID_API_KEY);
 *
 * async function sendInquiryEmails(data: EmailData) {
 *   const clientEmail = generateClientConfirmationEmail(data);
 *   const adminEmail = generateAdminNotificationEmail(data);
 *
 *   await sgMail.send({
 *     to: data.clientEmail,
 *     from: 'noreply@cyberlymph.io',
 *     subject: clientEmail.subject,
 *     html: clientEmail.html,
 *   });
 *
 *   await sgMail.send({
 *     to: data.businessEmail || 'inquiries@cyberlymph.io',
 *     from: 'system@cyberlymph.io',
 *     subject: adminEmail.subject,
 *     html: adminEmail.html,
 *   });
 * }
 *
 * Example with Nodemailer:
 * ========================
 * import nodemailer from 'nodemailer';
 *
 * const transporter = nodemailer.createTransport({
 *   service: 'gmail',
 *   auth: {
 *     user: process.env.EMAIL_USER,
 *     pass: process.env.EMAIL_PASS,
 *   },
 * });
 *
 * async function sendInquiryEmails(data: EmailData) {
 *   const clientEmail = generateClientConfirmationEmail(data);
 *
 *   await transporter.sendMail({
 *     from: 'noreply@cyberlymph.io',
 *     to: data.clientEmail,
 *     subject: clientEmail.subject,
 *     html: clientEmail.html,
 *     text: clientEmail.text,
 *   });
 * }
 */
