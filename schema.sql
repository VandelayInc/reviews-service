CREATE DATABASE hackbnbtest;

USE hackbnbtest;

CREATE TABLE reviews (
  _id INT PRIMARY KEY, 
  star_rating INT, 
  review_rating_accuracy INT, 
  review_rating_checkin INT, 
  review_rating_cleanliness INT, 
  review_rating_communication INT, 
  review_rating_location INT, 
  review_rating_value INT 
);

-- CREATE TABLE users (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   username VARCHAR(32)
-- );

-- INSERT INTO reviews (star_rating, review_rating_accuracy, review_rating_checkin, review_rating_cleanliness, review_rating_communication, review_rating_location, review_rating_value)
-- VALUES (7, 8, 10, 10, 9, 6, 8);

-- INSERT INTO users (username) VALUES ('Paolo');

-- INSERT INTO rooms (roomname) VALUES ('looby');

-- INSERT INTO messages (user_id, text, room_id) VALUES (1, 'hi i\'m Paolo', 1);


/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < ./schema.sql
 *  to create the database and the tables.*/


LOAD DATA LOCAL INFILE "/Users/madlic/Documents/projects/hackReactor/sdc/reviews-service/tenMil/allrevs.csv"
INTO TABLE reviews
COLUMNS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
ESCAPED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
