import pool from "./pool";

export const initializeDatabase = async () => {
  try {
    // Create inquiries table if it doesn't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        service_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        business_name VARCHAR(255),
        data JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Warning: Failed to initialize database:", error);
    // Don't throw - allow the server to continue running even if database is unavailable
    // Email sending will still work
    console.log("Server will continue running with email functionality only");
  }
};
