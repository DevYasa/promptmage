const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const Contact = require('./models/Contact');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const imageRoutes = require('./routes/imageRoutes');
app.use('/api', imageRoutes);

// Replace with your actual MongoDB URI
const mongoUri = 'mongodb://localhost:27017/PromptMage';

mongoose.connect(mongoUri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Save to MongoDB
  const newContact = new Contact({ name, email, phone, message });
  try {
    await newContact.save();
    res.status(201).send({ success: true, message: 'Contact information saved successfully.' });
  } catch (error) {
    console.error('Error saving to MongoDB:', error);
    res.status(500).send({ success: false, message: 'An error occurred while saving the contact.' });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the backend of your web app!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
