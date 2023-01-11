
require("dotenv").config();
const express = require("express");
const expbs = require('express-handlebars');
const sequelize = require("./config/connection");
const PORT = process.env.PORT || 3001;
const app = express();


app.engine('handlebars', expbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home');
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
  });