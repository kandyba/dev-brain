import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import authRouter from './src/routes/auth.routes.js';
import fileRouter from './src/routes/file.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json())
app.use('/api/auth', authRouter);
app.use('/api/file', fileRouter);

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API working' });
});

// Connect to DB
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
