const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log(`todo list server starte on ${port}`);
