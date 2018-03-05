const app = require('./app.js');

let port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log('listening on port: ' + port);
});
