const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('./pagrindinis');
});

app.get('/anketa', (req, res) => {
  res.render('./anketapagrindinis');
});

app.get('/kontaktai', (req, res) => {
  res.render('./kontaktai');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on Port ' + PORT);
});
