const express = require('express');
const path = require('path');
const app = express();
//const db = require('../database/index.js');
const rp = require('request-promise');
const html = require('./html.js');
import React from 'react';
import { renderToString } from 'react-dom/server';
import ReviewService from '../public/index.jsx';

app.use(express.static(__dirname + '/../client'));
app.use('/rooms/:roomid', express.static(__dirname + '/../client'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.get('/rooms/:roomid/ratings', (req, res) => {
//   let returnRatings = (err, ratings) => {
//     if (err) {
//       console.log('Error retrieving ratings from db: ', err);
//       throw err;
//     }
//     res.status(200).send(ratings);
//   };

//   db.findRatings(req.params.roomid, returnRatings);
// });

// app.get('/rooms/:roomid/reviews', (req, res) => {
//   let returnReviews = (err, reviews) => {
//     if (err) {
//       console.log('Error retrieving reviews from db: ', err);
//       throw err;
//     }
//     res.status(200).send(reviews);
//   };
  
//   db.findReviews(req.params.roomid, returnReviews);
// });

app.get('/rooms/:roomid/review', (req, res) => {
  rp('http://18.219.35.229:80/rooms/' + req.params.roomid + '/ratings').then((ratings) => {
    rp('http://18.219.35.229:80/rooms/' + req.params.roomid + '/reviews').then((reviews) => {
      const reviewService = renderToString(<ReviewService reviews={JSON.parse(reviews)} ratings={JSON.parse(ratings)} />);
      res.status(200).send(html.html(reviewService));
    });
  }).catch((err) => {
    console.log('Error requesting: ', err);
    throw err;
  });
});


module.exports = app;
