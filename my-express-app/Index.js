const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

const imageRoutes = require('./routes/imageRoutes');

app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api', imageRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the backend of your web app!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
