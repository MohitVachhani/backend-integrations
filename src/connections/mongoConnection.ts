import { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongoURI = process.env.MONGODB_URL;

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open');
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

export default async function mongoConnect(app: Application): Promise<void> {
  try {
    if (!mongoURI) {
      throw new Error('Mongo url not set in environment variable');
    }
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    });
    console.log('successfully connected to mongodb');
    app.emit('ready');
  } catch (error) {
    console.error('Error in connecting to mongo', error);
    process.exit(0);
  }
}

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.error('Mongoose default connection disconnected through app termination');
  process.exit(0);
});
