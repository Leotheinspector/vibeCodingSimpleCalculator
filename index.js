// index.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/calc', (req, res) => {
  const { a, b, op } = req.query;
  const x = parseFloat(a);
  const y = parseFloat(b);
  let result;

  if (op === 'sum') {
    result = x + y;
  } else if (op === 'mul') {
    result = x * y;
  } else {
    return res.status(400).json({ error: 'Invalid operation' });
  }

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
});