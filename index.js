const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('Test!')
})

app.listen(5000, () => {
  console.log('Example app listening on port 3000!')
})

module.exports = app