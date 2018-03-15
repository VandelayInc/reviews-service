const mongoose = require('mongoose');
const jsonfile = require('jsonfile');
const fs = require('fs');
const faker = require('faker');

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

let writeFilesForRatings = (n) => {
  const files = ['firstMilRate', 'secondMilRate', 'thirdMilRate', 'fourthMilRate', 'fifthMilRate', 'sixthMilRate', 'seventhMilRate', 'eighthMilRate', 'ninthMilRate', 'tenthMilRate'];
  console.log('File number: ', n);
  if (n === 11) {
    return;
  }
  let newFile = fs.createWriteStream(`./tenMil/${files[n - 1]}.json`);
  for (var i = (n - 1) * 1e6 + 1; i <= n * 1e6; i += 1) {
    if (i === (n - 1) * 1e6 + 1) {
      newFile.write(`[${ratingsFaker(i)},\n`);
    } else if (i === n * 1e6) {
      newFile.write(`${ratingsFaker(i)}]`, () => {
        setTimeout(() => {
          writeFilesForRatings(n + 1);
        }, 2000);
        console.log(`finished ${n}, waiting 2s`);
        newFile.end();
      });
    } else {
      newFile.write(`${ratingsFaker(i)},\n`);
    }
  }
};

let writeFilesForReviews = (n) => {
  const files = ['firstMilRev', 'secondMilRev', 'thirdMilRev', 'fourthMilRev', 'fifthMilRev', 'sixthMilRev', 'seventhMilRev', 'eighthMilRev', 'ninthMilRev', 'tenthMilRev'];
  console.log('File number: ', n);
  if (n === 11) {
    return;
  }
  let newFile = fs.createWriteStream(`./tenMil/${files[n - 1]}.json`);
  for (var i = (n - 1) * 1e6 + 1; i <= n * 1e6; i += 1) {
    if (i === (n - 1) * 1e6 + 1) {
      newFile.write(`[${reviewsFaker(i)},\n`);
    } else if (i === n * 1e6) {
      newFile.write(`${reviewsFaker(i)}]`, () => {
        setTimeout(() => {
          writeFilesForReviews(n + 1);
        }, 2000);
        console.log(`finished ${n}, waiting 2s`);
        newFile.end();
      });
    } else {
      newFile.write(`${reviewsFaker(i)},\n`);
    }
  }
};

writeFilesForRatings(1);
// writeFilesForReviews(1);

