DROP DATABASE hackbnbtest;

CREATE DATABASE hackbnbtest;

USE hackbnbtest;

CREATE TABLE ratings (
  listing_id INT PRIMARY KEY, 
  star_rating INT, 
  review_rating_accuracy INT, 
  review_rating_checkin INT, 
  review_rating_cleanliness INT, 
  review_rating_communication INT, 
  review_rating_location INT, 
  review_rating_value INT 
);

CREATE TABLE reviews (
  listing_id INT,
  created_at CHAR(47),
  first_name CHAR(15),
  picture_url CHAR(70),
  comments CHAR(100),
  review_id INT AUTO_INCREMENT PRIMARY KEY,
  FOREIGN KEY (listing_id) REFERENCES ratings(listing_id)
);

-- ALTER TABLE ratings
--   ADD UNIQUE INDEX (listing_id);

-- ALTER TABLE reviews
--   ADD UNIQUE INDEX (review_id);


-- INSERT INTO reviews (star_rating, review_rating_accuracy, review_rating_checkin, review_rating_cleanliness, review_rating_communication, review_rating_location, review_rating_value)
-- VALUES (7, 8, 10, 10, 9, 6, 8);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < ./schema.sql
 *  to create the database and the tables.*/


LOAD DATA LOCAL INFILE "/Users/madlic/Documents/projects/hackReactor/sdc/reviews-service/load_testing/tenMilCSV/ratingsAll.csv"
INTO TABLE ratings
COLUMNS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
ESCAPED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE "/Users/madlic/Documents/projects/hackReactor/sdc/reviews-service/load_testing/tenMilCSV/reviewsAll.csv"
INTO TABLE reviews
COLUMNS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
ESCAPED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;