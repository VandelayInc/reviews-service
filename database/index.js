const mongoose = require('mongoose');

const sdcMongo = process.env.SDC_MONGO || 'localhost';
// let mongoUrl = 'mongodb://database:27017/hacknb';
// mongoose.connect(mongoUrl, {reconnectTries: 25});

mongoose.connect(`mongodb://${sdcMongo}/hackbnbtest`);
// mongoose.connect('mongodb://localhost/hackbnbtest');

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

let reviewSchema = mongoose.Schema({
  listing_id: Number,
  created_at: String,
  first_name: String,
  picture_url: String,
  comments: String,
  has_profile_pic: Boolean, // unused
  identity_verified: Boolean // unused
});

let Reviews = mongoose.model('Reviews', reviewSchema);

let findReviews = (id, callback) => {
  Reviews.find().
    where('listing_id').equals(id).
    exec(callback);
};

exports.findRatings = findRatings;
exports.findReviews = findReviews;
