const redisUrl = process.env.SDC_REDIS || 6379;
const redis = require('redis');
const redisClient = redis.createClient(redisUrl);

const redisCacheRatings = (req, res, next) => {
  const { roomid } = req.params;
  redisClient.get(roomid + 'rating', (err, data) => {
    if (data !== null) {
      res.send(data);
    } else {
      err ? console.log(err) : null;
      next();
    }
  });
};

const redisCacheReviews = (req, res, next) => {
  const { roomid } = req.params;
  redisClient.get(roomid + 'review', (err, data) => {
    if (data !== null) {
      res.send(data);
    } else {
      err ? console.log(err) : null;
      next();
    }
  });
};

module.exports = { 
  redisClient,
  redisCacheRatings,
  redisCacheReviews
};

