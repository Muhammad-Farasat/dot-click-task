import mongoose from 'mongoose';

const connectToDb = async () => {
  const uri = process.env.MONGO_URL;

  if (!uri) {
    console.log('MONGO_URL is undefined');
    return;
  }

  mongoose.connect(uri);

  mongoose.connection.on('error', (err) => {
    console.log('MongoDB connection error:', err);
  });

  mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
  });
};

export default connectToDb;
