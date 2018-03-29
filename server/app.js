const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const { redisClient, redisCacheRatings, redisCacheReviews } = require('./redis.js');
const dbMongo = require('../database/index.js');
// const dbSql = require('../database/dbSql.js');

// app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));
app.use('/rooms/:roomid', express.static(__dirname + '/../client'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ============================================================== //
// ================= Mongo With Redis Connection ================ //
// ============================================================== //
app.get('/rooms/:roomid/ratings', redisCacheRatings, (req, res) => {
  const returnRatings = (err, ratings) => {
    if (err) {
      console.log('Error retrieving ratings from dbMongo: ', err);
      throw err;
    }
    redisClient.set(req.params.roomid + 'rating', JSON.stringify(ratings));
    res.status(200).send(ratings);
  };

  dbMongo.findRatings(req.params.roomid, returnRatings);
});

app.get('/rooms/:roomid/reviews', redisCacheReviews, (req, res) => {
  const returnReviews = (err, reviews) => {
    if (err) {
      console.log('Error retrieving reviews from dbMongo: ', err);
      throw err;
    }
    redisClient.set(req.params.roomid + 'review', JSON.stringify(reviews));
    res.status(200).send(reviews);
  };
  
  dbMongo.findReviews(req.params.roomid, returnReviews);
});


// ======================================================== //
// ================= Mongo Only Connection ================ //
// ======================================================== //
// app.get('/rooms/:roomid/ratings', (req, res) => {
//   const returnRatings = (err, ratings) => {
//     if (err) {
//       console.log('Error retrieving ratings from dbMongo: ', err);
//       throw err;
//     }
//     res.status(200).send(ratings);
//   };

//   dbMongo.findRatings(req.params.roomid, returnRatings);
// });

// app.get('/rooms/:roomid/reviews', (req, res) => {
//   const returnReviews = (err, reviews) => {
//     if (err) {
//       console.log('Error retrieving reviews from dbMongo: ', err);
//       throw err;
//     }
//     res.status(200).send(reviews);
//   };
  
//   dbMongo.findReviews(req.params.roomid, returnReviews);
// });



// =================================================== //
// ================= MySQL Connection ================ //
// =================================================== //
// app.get('/rooms/:roomid/ratings', (req, res) => {
//   let returnRatings = (err, ratings) => {
//     if (err) {
//       console.log('Error retrieving ratings from dbMongo: ', err);
//       throw err;
//     }
//     res.status(200).send(ratings[0]);
//   };

//   dbSql.findSqlRatings(req.params.roomid, returnRatings);
// });

// app.get('/rooms/:roomid/reviews', (req, res) => {
//   let returnReviews = (err, reviews) => {
//     if (err) {
//       console.log('Error retrieving reviews from dbMongo: ', err);
//       throw err;
//     }
//     res.status(200).send(reviews);
//   };
  
//   dbSql.findSqlReviews(req.params.roomid, returnReviews);
// });




// ============== don't accidentally comment the below out ==============/ 

module.exports = app;
