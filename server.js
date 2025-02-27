const express = require('express');
const app = express();

const PORT = 8000;

app.use(express.json());

app.get('/users', (req, res) => {
  res.send('All users');
});

app.post('/users', (req, res) => {
  res.send('User was added');
});

app.delete('/users', (req, res) => {
  res.send('User was deleted');
});

app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT);
});
