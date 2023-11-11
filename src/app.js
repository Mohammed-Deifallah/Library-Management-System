const express = require('express');
const routes = require('./routes/controller');
var bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.use('/', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.raw())

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})