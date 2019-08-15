const express = require('express');

const exphbs = require('express-handlebars');

require('dotenv').config();

const app = express();

const { PORT } = process.env;

// middleware used for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine config
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

const lolHandler = require('./routes/lol_handler_route');

app.use('/api', lolHandler);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
