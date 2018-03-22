const mongoose = require('mongoose');
const fs = require('fs');
const faker = require('faker');
const ids = require('./../assets/ids.js');

// let ratingsFakerCSV = function(ratingId) { // unused
//   const fakerRating = {
//     _id: ratingId,
//     star_rating: Math.floor(Math.random() * 10),
//     review_rating_accuracy: Math.floor(Math.random() * 10),
//     review_rating_checkin: Math.floor(Math.random() * 10),
//     review_rating_cleanliness: Math.floor(Math.random() * 10),
//     review_rating_communication: Math.floor(Math.random() * 10),
//     review_rating_location: Math.floor(Math.random() * 10),
//     review_rating_value: Math.floor(Math.random() * 10)
//   };
//   return JSON.stringify(fakerRating);
// };

let ratingsFirstLine = 'listing_id,star_rating,review_rating_accuracy,review_rating_checkin,review_rating_cleanliness,review_rating_communication,review_rating_location,review_rating_value';

// var stream = fs.createWriteStream('./tenMilCSV/ratingsAll.csv');
let writeFilesForRatings = (n = 0) => {
  let isReady = true;
  while (n < 1e7 + 1 && isReady) {
    if (n === 0) {
      isReady = stream.write(`${ratingsFirstLine}\n`);
    } else if (n === 1e7) {
      isReady = stream.write(`${n},${Math.floor(Math.random() * (8) + 3)},${Math.floor(Math.random() * (8) + 3)},${Math.floor(Math.random() * (8) + 3)},${Math.floor(Math.random() * (8) + 3)},${Math.floor(Math.random() * (8) + 3)},${Math.floor(Math.random() * (8) + 3)},${Math.floor(Math.random() * (8) + 3)}`);
    } else {
      isReady = stream.write(`${n},${Math.floor(Math.random() * (8) + 3)},${Math.floor(Math.random() * (8) + 3)},${Math.floor(Math.random() * (8) + 3)},${Math.floor(Math.random() * (8) + 3)},${Math.floor(Math.random() * (8) + 3)},${Math.floor(Math.random() * (8) + 3)},${Math.floor(Math.random() * (8) + 3)}\n`);
    }
    n += 1;
  }
  if (n < 1e7 + 1) {
    stream.once('drain', () => {
      writeFilesForRatings(n);
    });
  }
  // console.log('draining at n =', n);
};

// writeFilesForRatings();




// let reviewsFakerCSV = function(reviewId) { // unused
//   const fakerReview = {
//     _id: reviewId,
//     listing_id: AUTO_INCREMENT
//     created_at: faker.date.past(),
//     first_name: faker.name.firstName(),
//     picture_url: ids[reviewId - 1],
//     comments: faker.lorem.sentence()
//   };
//   return JSON.stringify(fakerReview);
// };

let reviewsFirstLine = 'listing_id,created_at,first_name,picture_url,comments';

var stream = fs.createWriteStream('./tenMilCSV/reviewsAll.csv');
let writeFilesForReviews = (n = 0, imageNumber = 0) => {
  // n % 10 has 4 reviews
  // n % 20 has 6 reviews
  // n % 50 has 20 reviews
  // else has 1 review
  let isReady = true;
  while (n < 1e7 + 1 && isReady) {
    if (n === 0) {
      isReady = stream.write(`${reviewsFirstLine}\n`);
    } else if (n % 50 === 0) {
      for (var j = 0; j < 20; j += 1) {
        if (imageNumber === 10000) {
          imageNumber = 0;
        }
        if (n === 1e7 && j === 19) {
          isReady = stream.write(`${n},${faker.date.past()},${faker.name.firstName()},${ids[imageNumber]},${faker.lorem.sentence()}`);
        } else if (n === 1e7) {
          isReady = stream.write(`${n},${faker.date.past()},${faker.name.firstName()},${ids[imageNumber]},${faker.lorem.sentence()}\n`);
        } else {
          isReady = stream.write(`${n},${faker.date.past()},${faker.name.firstName()},${ids[imageNumber]},${faker.lorem.sentence()}\n`);
        }
        imageNumber += 1;
      }
    } else if (n % 20 === 0) {
      for (var j = 0; j < 6; j += 1) {
        if (imageNumber === 10000) {
          imageNumber = 0;
        }
        if (n === 1e7) {
          isReady = stream.write(`${n},${faker.date.past()},${faker.name.firstName()},${ids[imageNumber]},${faker.lorem.sentence()}`);
        } else {
          isReady = stream.write(`${n},${faker.date.past()},${faker.name.firstName()},${ids[imageNumber]},${faker.lorem.sentence()}\n`);
        }
        imageNumber += 1;
      }
    } else if (n % 10 === 0) {
      for (var j = 0; j < 4; j += 1) {
        if (imageNumber === 10000) {
          imageNumber = 0;
        }
        if (n === 1e7) {
          isReady = stream.write(`${n},${faker.date.past()},${faker.name.firstName()},${ids[imageNumber]},${faker.lorem.sentence()}`);
        } else {
          isReady = stream.write(`${n},${faker.date.past()},${faker.name.firstName()},${ids[imageNumber]},${faker.lorem.sentence()}\n`);
        }
        imageNumber += 1;
      }
    } else {
      if (imageNumber === 10000) {
        imageNumber = 0;
      }
      if (n === 1e7) {
        isReady = stream.write(`${n},${faker.date.past()},${faker.name.firstName()},${ids[imageNumber]},${faker.lorem.sentence()}`);
      } else {
        isReady = stream.write(`${n},${faker.date.past()},${faker.name.firstName()},${ids[imageNumber]},${faker.lorem.sentence()}\n`);
      }
      imageNumber += 1;
    }
    n += 1;
  }
  if (n < 1e7 + 1) {
    stream.once('drain', () => {
      writeFilesForReviews(n, imageNumber);
    });
  }
  console.log('draining at n =', n);
};

writeFilesForReviews();













































// =========================================================== //
// ====== JSON MAKER - refactored to CSV maker above ========= //
// =========================================================== //
// let ratingsFaker = function(ratingId) {
//   const fakerRating = {
//     _id: ratingId,
//     star_rating: Math.floor(Math.random() * 10),
//     review_rating_accuracy: Math.floor(Math.random() * 10),
//     review_rating_checkin: Math.floor(Math.random() * 10),
//     review_rating_cleanliness: Math.floor(Math.random() * 10),
//     review_rating_communication: Math.floor(Math.random() * 10),
//     review_rating_location: Math.floor(Math.random() * 10),
//     review_rating_value: Math.floor(Math.random() * 10)
//   };
//   return JSON.stringify(fakerRating);
// };

// var stream = fs.createWriteStream('./tenMil/test.json');
// let writeFilesForRatings = (n = 1) => {
//   let isReady = true;
//   while (n < 1e7 + 2 && isReady) {
//     if (n === 1e7 + 1) {
//       isReady = stream.write(`${ratingsFaker(n)}`);
//     } else {
//       isReady = stream.write(`${ratingsFaker(n)}\n`);
//     }
//     n -= 1;
//   }
//   if (n < 1e7 + 2) {
//     stream.once('drain', () => {
//       writeFilesForRatings(n);
//     });
//   }
//   console.log('draining at n =', n);
// };

// writeFilesForRatings();

// =========================================================== //
// ====== JSON MAKER - the json array version of func above  ========= //
// =========================================================== //
// if (n === 1e6) {
//   isReady = newFile.write(`[${data},\n`);
// } else if (n === 1) {
//   isReady = newFile.write(`${data}]`);
// } else {
//   isReady = newFile.write(`${ratingsFaker(n)},\n`);
// }
// if (n % 1000 === 0) {
//   console.log('this is n: ', n);
// }






// =========================================================== //
// ====== JSON MAKER - the old broken code with multi files  ========= //
// =========================================================== //
// let writeFilesForReviews = (n) => {
//   const files = ['firstMilRev', 'secondMilRev', 'thirdMilRev', 'fourthMilRev', 'fifthMilRev', 'sixthMilRev', 'seventhMilRev', 'eighthMilRev', 'ninthMilRev', 'tenthMilRev'];
//   console.log('File number: ', n);
//   if (n === 11) {
//     return;
//   }
//   let newFile = fs.createWriteStream(`./tenMil/${files[n - 1]}.json`);
//   for (var i = (n - 1) * 1e6 + 1; i <= n * 1e6; i += 1) {
//     if (i === (n - 1) * 1e6 + 1) {
//       newFile.write(`[${reviewsFaker(i)},\n`);
//     } else if (i === n * 1e6) {
//       newFile.write(`${reviewsFaker(i)}]`, () => {
//         setTimeout(() => {
//           writeFilesForReviews(n + 1);
//         }, 2000);
//         console.log(`finished ${n}, waiting 2s`);
//         newFile.end();
//       });
//     } else {
//       newFile.write(`${reviewsFaker(i)},\n`);
//     }
//   }
// };

// writeFilesForReviews(1);




// =========================================================== //
// ====== JSON MAKER - the reviews writer  ========= //
// =========================================================== //
// let reviewsFaker = function(reviewId) {
//   const fakerReview = {
//     listing_id: reviewId,
//     created_at: faker.date.past(),
//     first_name: faker.name.firstName(),
//     picture_url: ids[reviewId - 1],
//     comments: faker.lorem.paragraph()
//   };
//   return JSON.stringify(fakerReview);
// };

// var stream = fs.createWriteStream('./tenMil/reviewsNew1.json');
// let writeFilesForReviews = (n = 1) => {
//   // % 10 has 3 reviews
//   // % 50 has 20 reviews
//   // else has 1 review
//   let isReady = true;
//   while (n < 1e4 + 1 && isReady) {
//     if (n === 1e4) {
//       isReady = stream.write(reviewsFaker(n));
//     } else {
//       isReady = stream.write(`${reviewsFaker(n)}\n`);
//     }
//     n += 1;
//   } 
//   stream.once('drain', () => {
//     writeFilesForReviews(n);
//   });
//   console.log('draining at n =', n);
// };

// // writeFilesForReviews();