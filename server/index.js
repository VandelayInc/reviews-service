require('newrelic');
const app = require('./app.js');

const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log('listening on port: ' + port);
});
