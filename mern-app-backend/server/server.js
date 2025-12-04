import dotenv from 'dotenv';
dotenv.config({path: './config.env'}); // Load environment variables from config.env  

import express from 'express';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.js';

import cors from 'cors';

import { execSync } from 'child_process';

const app = express();

const npmVersion = execSync('npm --version').toString().trim();
console.log(`Current NPM version asdf: ${npmVersion}`);

app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Connect to MongoDB using ATLAS_URI from config.env
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Heartbeat route (for Render or uptime monitoring)
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Use your contact routes
app.use('/', contactRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));