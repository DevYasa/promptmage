const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

const imageRoutes = require('./routes/imageRoutes');

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api', imageRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the backend of your web app!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
