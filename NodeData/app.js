var express = require('express');
var path = require('path');
var app = express();
const PORT = 3030;

app.set('view engine', 'ejs')
app.use(express.static('views'))
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render(`./start/game.ejs`);
});
app.listen(process.env.port || PORT, () =>
    console.log("Server started work on port " + PORT))

module.exports = app;

