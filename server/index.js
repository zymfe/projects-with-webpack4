const express = require('express');
const app = express();

app.get('/api/user', (req, res) => {
  res.json({
    name: 'zymfe',
    age: 20
  });
});

app.get('/project', (req, res) => {
  res.json({
    name: 'test-webpack4'
  });
});

console.log('app listen 8091');
app.listen(8091);