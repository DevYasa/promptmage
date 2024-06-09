const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Welcome to the backend of your web app!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
