#!/bin/bash

# for file in 'firstMilRate' 'secondMilRate' 'thirdMilRate' 'fourthMilRate' 'fifthMilRate' 'sixthMilRate' 'seventhMilRate' 'eighthMilRate' 'ninthMilRate' 'tenthMilRate'
# do
#   mongoimport --db hackbnbtest --collection reviews --type json --file ./tenMil/$file.json --jsonArray
# done

# mongoimport --db hackbnbtest2 --collection reviews2 --type json --file ./tenMil/bigFour.json


# mongoimport --db hackbnbtest --collection ratings --type csv --file ./tenMilCSV/ratingsAll.csv --headerline
# mongoimport --db hackbnbtest --collection reviews --type csv --file ./tenMilCSV/reviewsAll.csv --headerline


# FOR DEPLOYED DB:
# mongoimport --db hackbnbtest --collection ratings --type csv --headerline --file ./ratingsAll.csv
mongoimport --db hackbnbtest --collection reviews --type csv --headerline --file ./reviewsAll.csv

# mongoimport --db hackbnbtest --collection ratings --type csv --headerline --file ./ratingsTrunc.csv
# mongoimport --db hackbnbtest --collection reviews --type csv --headerline --file ./reviewsTrunc.csv