const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const Contact = require('./models/Contact');
const { generateImageFromText } = require('./services/huggingfaceService');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  const newContact = new Contact({ name, email, phone, message });
  try {
    const savedContact = await newContact.save();
    console.log('Saved contact:', savedContact);
    res.status(200).send({ success: true, message: 'Contact saved successfully.' });
  } catch (error) {
    console.error('Error saving to MongoDB:', error);
    res.status(500).send({ success: false, message: 'An error occurred while saving the contact.' });
  }
});

app.post('/api/generate-image', async (req, res) => {
  const { prompt } = req.body;
  console.log('Received request to generate image with prompt:', prompt);
  try {
    const imageUrl = await generateImageFromText(prompt);
    console.log('Generated image URL:', imageUrl);
    res.status(200).send(imageUrl);
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).send({ success: false, message: 'An error occurred while generating the image.' });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the backend of your web app!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
