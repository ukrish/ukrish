
const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = 3000;

app.get('/', function (req, res) {
  res.send("")
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})