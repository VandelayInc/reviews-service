const app = require('./app.js');

let port = process.env.PORT || 3013;
app.listen(port, () => {
  console.log('listening on port: ' + port);
});
