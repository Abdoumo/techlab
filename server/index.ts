import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleSendInquiry } from "./routes/sendInquiry";
import { initializeDatabase } from "./db/init";

export async function createServer() {
  // Initialize database only if explicitly enabled
  if (process.env.ENABLE_DB === "true" && process.env.DATABASE_URL) {
    await initializeDatabase();
  }

  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Service inquiry email endpoint
  app.post("/api/send-inquiry", handleSendInquiry);

  return app;
}
