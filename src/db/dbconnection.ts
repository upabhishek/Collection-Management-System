import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI as string;

export const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};
