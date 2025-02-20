const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.send('All users');
});

app.post('/users', (req, res) => {
  res.send('User was added');
});

app.delete('/users', (req, res) => {
  res.send('User was deleted');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
