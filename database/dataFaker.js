const mongoose = require('mongoose');
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


var stream = fs.createWriteStream('./tenMil/bigTwo.json');
let writeFilesForRatings = (n = 1e7) => {
  let isReady = true;
  while (n > 0 && isReady) {
    if (n === 1) {
      isReady = stream.write(ratingsFaker(n));
    } else {
      isReady = stream.write(`${ratingsFaker(n)}\n`);
    }
    n -= 1;
  } 
  stream.once('drain', () => {
    writeFilesForRatings(n);
  });
  console.log('draining at n =', n);
};

writeFilesForRatings();





// let reviewsFaker = function(reviewId) {
//   const fakerReview = {
//     listing_id: reviewId,
//     created_at: faker.date.past(),
//     first_name: faker.name.firstName(),
//     picture_url: faker.lorem.word(),
//     comments: faker.lorem.sentence()
//   };
//   return JSON.stringify(fakerReview);
// };

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

