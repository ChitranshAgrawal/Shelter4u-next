// server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from "path";
import { fileURLToPath } from "url";

// Enable __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load .env from the project root
dotenv.config({ path: path.resolve(__dirname, "../../../../.env") });

// Your imports after dotenv is configured
import models, { connectDB } from './db/connections.js';
import HomeSecondSectionRouter from './Routes/HomeSecondSectionRoute.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/home-second-section', HomeSecondSectionRouter);

app.get('/', (req, res) => {
  res.send('connected');
});

// Debug check (optional)
console.log("✅ MONGO_CONN:", process.env.MONGO_CONN);
console.log("✅ MONGO_CONN_ADMIN:", process.env.MONGO_CONN_ADMIN);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ DB connection error:', err);
    process.exit(1);
  });
