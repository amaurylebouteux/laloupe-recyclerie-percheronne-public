const express = require('express');
const api = require('./routes');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const connection = require("./routes/conf");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use('/api', api);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});