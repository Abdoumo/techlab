import { RequestHandler } from "express";
import { z } from "zod";
import {
  sendServiceInquiryEmail,
  sendCustomerConfirmationEmail,
} from "../services/email";
import pool from "../db/pool";

// Validation schema for inquiry data
const inquirySchema = z.object({
  serviceName: z.string().min(1, "Service name is required"),
  email: z.string().email("Valid email is required"),
  data: z.record(z.any()).optional().default({}),
});

type InquiryRequest = z.infer<typeof inquirySchema>;

export const handleSendInquiry: RequestHandler = async (req, res) => {
  try {
    // Validate request body
    const validatedData = inquirySchema.parse(req.body);

    const { serviceName, email, data } = validatedData;

    // Combine all inquiry data
    const inquiryData = {
      email,
      ...data,
    };

    // Extract commonly used fields
    const phone = data?.phone || null;
    const businessName = data?.businessName || null;

    let inquiryId = null;

    // Try to save inquiry to database (non-critical)
    try {
      const dbResult = await pool.query(
        `INSERT INTO inquiries (service_name, email, phone, business_name, data)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, created_at`,
        [serviceName, email, phone, businessName, JSON.stringify(inquiryData)]
      );
      inquiryId = dbResult.rows[0]?.id;
    } catch (dbError) {
      console.error("Database error (non-critical):", dbError);
      // Continue with email sending even if database fails
    }

    // Send email to admin
    const adminEmailResult = await sendServiceInquiryEmail(serviceName, inquiryData);

    // Send confirmation email to customer
    const customerEmailResult = await sendCustomerConfirmationEmail(email, serviceName);

    res.json({
      success: true,
      message: "Inquiry submitted successfully",
      inquiryId,
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

    res.status(500).json({
      success: false,
      message: "An error occurred while processing your inquiry",
    });
  }
};
