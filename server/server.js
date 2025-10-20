const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, '../dist/mp-hangman/browser')));

app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/mp-hangman/browser/index.html'));
});