const express = require('express');

const app = express()

const PORT = 3000;

const lol_handler = require('./routes/lol_handler_route');

app.use('/api', lol_handler);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});