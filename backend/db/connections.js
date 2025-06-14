// backend/db/connect.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


// CONNECTION STRINGS
const mongo_url = process.env.MONGO_CONN;
const mongo_url_admin = process.env.MONGO_CONN_ADMIN;

// CONNECTIONS
const conn = mongoose.createConnection(mongo_url, {});
const admin_conn = mongoose.createConnection(mongo_url_admin, {});

const connectDB = async () => {
  try {
    await conn.asPromise();
    console.log("✅ Connected to CRM DB");
    await admin_conn.asPromise();
    console.log("✅ Connected to Admin Panel DB");
  } catch (err) {
    console.error("❌ DB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
