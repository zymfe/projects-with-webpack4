const express = require('express');
const app = express();

const mode = process.argv[2];
if (mode) {
  console.log(`${mode}-build`);
}

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