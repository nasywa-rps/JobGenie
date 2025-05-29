import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import authRoutes from './routes/authRoutes.js';
import searchRoutes from './routes/searchRoutes.js';
<<<<<<< HEAD
import classifyRoutes from './routes/classifyRoutes.js';
=======
import cloudinary from './cloudinary.js';  
>>>>>>> 1971943609179439c6df62417522c0b1b80701f9

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/classify', classifyRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    // cloudinary config sudah jalan saat import
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();

export default app; 
