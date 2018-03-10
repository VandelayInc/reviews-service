const html = (reviewService) => `
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" type="text/css" href="http://18.219.35.229:80/assets/styles.css">
    </head>
    <body>
      <div id="reviews-service">${reviewService}</div>
    </body>
  </html>
`;

module.exports.html = html;