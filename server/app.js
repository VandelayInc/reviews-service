const express = require('express');
const path = require('path');
const app = express();
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client'));

app.get('/rooms/:roomid/ratings', (req, res) => {
  let returnRatings = (err, ratings) => {
    if (err) {
      console.log('Error retrieving ratings from db: ', err);
      throw err;
    }

    console.log('Ratings from db: ', ratings);
    res.status(200).send(ratings);
  };

  db.findRatings(req.params.roomid, returnRatings);
});

module.exports = app;