const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hacknb');

let db = mongoose.connection;

let ratingSchema = mongoose.Schema({
  listing_id: Number,
  star_rating: Number,
  review_rating_accuracy: Number,
  review_rating_checkin: Number,
  review_rating_cleanliness: Number,
  review_rating_communication: Number,
  review_rating_location: Number,
  review_rating_value: Number
});

let Ratings = mongoose.model('Ratings', ratingSchema);

let findRatings = (id, callback) => {
  Ratings.findOne().
  where('listing_id').equals(id).
  exec(callback);
};

exports.findRatings = findRatings;
