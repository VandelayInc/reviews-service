const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'hackbnbtest'
});

conn.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('connected to mysql!');
});

const findSqlReviews = (id, callback) => { 
  conn.query('SELECT * FROM reviews WHERE listing_id=' + id, callback);
};

const findSqlRatings = (id, callback) => { 
  conn.query('SELECT * FROM ratings WHERE listing_id=' + id, callback);
};

exports.findSqlRatings = findSqlRatings;
exports.findSqlReviews = findSqlReviews;