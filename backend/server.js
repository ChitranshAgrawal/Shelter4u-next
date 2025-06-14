// backend/server.js
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import {connectDB} from './db/connections.js';

//Import Routers
import HomeSecondSectionRouter from './Routes/HomeSecondSectionRoute.js';

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());


//Route for admin
app.use('/home-second-section', HomeSecondSectionRouter);

app.get('/',(req,res)=>{
    res.send("connected");
});

// Connect DB and start server
connectDB()
  .then(() => {
    console.log('✅ Connected to both CRM and Admin Panel databases');
  })
  .catch((err) => {
    console.error('❌ DB connection error:', err);
    process.exit(1);
  });