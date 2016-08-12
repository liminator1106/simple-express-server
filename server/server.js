const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

require('./config/middleware')(app, express);
require('./routes')(app);

app.listen(port, function() {
  console.log('What\'s cooler than being cool?');
});
