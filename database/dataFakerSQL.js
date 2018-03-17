const mysql = require('mysql');
const fs = require('fs');
const faker = require('faker');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root'
});

conn.query();


let ratingsFaker = function(ratingId) {
  const fakerRating = {
    _id: ratingId,
    star_rating: Math.floor(Math.random() * 10),
    review_rating_accuracy: Math.floor(Math.random() * 10),
    review_rating_checkin: Math.floor(Math.random() * 10),
    review_rating_cleanliness: Math.floor(Math.random() * 10),
    review_rating_communication: Math.floor(Math.random() * 10),
    review_rating_location: Math.floor(Math.random() * 10),
    review_rating_value: Math.floor(Math.random() * 10)
  };
  return JSON.stringify(fakerRating);
};

let reviewsFaker = function(reviewId) {
  const fakerReview = {
    listing_id: reviewId,
    created_at: faker.date.past(),
    first_name: faker.name.firstName(),
    picture_url: faker.lorem.word(),
    comments: faker.lorem.sentence(),
  };
  return JSON.stringify(fakerReview);
};

conn.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('connected to mysql!');
});
