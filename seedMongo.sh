#!/bin/bash

# for file in 'firstMilRate' 'secondMilRate' 'thirdMilRate' 'fourthMilRate' 'fifthMilRate' 'sixthMilRate' 'seventhMilRate' 'eighthMilRate' 'ninthMilRate' 'tenthMilRate'
# do
#   mongoimport --db hackbnbtest --collection reviews --type json --file ./tenMil/$file.json --jsonArray
# done

mongoimport --db hackbnbtest2 --collection reviews2 --type json --file ./tenMil/bigFour.json --jsonArray
