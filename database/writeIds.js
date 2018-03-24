const fs = require('fs');

// const stream = fs.createWriteStream('./assets/ids.js');

// var idsArr = [];
//  for (var i = 1; i < 10001; i += 1) {
// }

// === the original purpose of this script, which was to make cloudfront image urls available to my data generator ==//

// const writer = (n) => {
//   let isReady = true;
//   while (isReady && n < 10001) {
//     var url = `"https://d1b58ce4uxxk9l.cloudfront.net/profile_pics/image${n}.png"`;
//     if (n === 1) {
//       isReady = stream.write(`module.exports = [${url},\n`);
//     } else if (n === 10000) {
//       isReady = stream.write(`${url}];`);
//     } else {
//       isReady = stream.write(`${url},\n`);
//     }
//     n += 1;
//   }
//   stream.once('drain', () => {
//     writer(n);
//   });
//   console.log('draining at ', n);
// };

// writer(1);


// // ==== below just randomizes IDs for vegeta_multi.go ===== //
// const stream = fs.createWriteStream('./testNuke.txt');

// const writer = (n = 1) => {
//   let isReady = true;
//   while (isReady && n < 1e6 + 1) {
//     var randNum = Math.floor((Math.random() * 1e6) + 1)
//     var url = `/${randNum}/`;
//     if (n === 1) {
//       isReady = stream.write(`"${url},`);
//     } else if (n === 1e6) {
//       isReady = stream.write(`${url}"`);
//     } else {
//       isReady = stream.write(`${url},`);
//     }
//     n += 1;
//   }
//   stream.once('drain', () => {
//     writer(n);
//   });
//   console.log('draining at ', n);
// };

// writer();


// ==== Mine: writing IDs to hit the API, on both tables /// SHOULD NOT USE ==== //
// const stream = fs.createWriteStream('/Users/madlic/go/src/vegeta_breaker2/testNuke.txt');

// const writer = (n = 1) => {
//   let isReady = true;
//   while (isReady && n < 3e6 + 1) {
//     var randNum = Math.floor((Math.random() * 1e6) + 1)
//     if (n % 2 === 0) {
//       var url = `GET http://localhost:3004/rooms/${randNum}/reviews/`;
//     } else {
//       var url = `GET http://localhost:3004/rooms/${randNum}/ratings/`;
//     }
//     if (n !== 3e6) {
//       isReady = stream.write(`${url}\n`);
//     } else {
//       isReady = stream.write(`${url}`);
//     }
//     n += 1;
//   }
//   stream.once('drain', () => {
//     writer(n);
//   });
//   console.log('draining at ', n);
// };

// writer();

// ==== Mine: writing IDs to hit the API, on the reviews table only ==== //
const stream = fs.createWriteStream('/Users/madlic/go/src/vegeta_breaker2/testNuke.txt'); // absolute path to where you are running the vegeta go script. The txt file with all the ids to hit needs to be in there

const writer = (n = 1) => {
  let isReady = true;
  while (isReady && n < 3e6 + 1) {
    var randNum = Math.floor((Math.random() * 1e6) + 1)
    var url = `GET http://localhost:3004/rooms/${randNum}/reviews/`;
    if (n !== 3e6) {
      isReady = stream.write(`${url}\n`);
    } else {
      isReady = stream.write(`${url}`);
    }
    n += 1;
  }
  stream.once('drain', () => {
    writer(n);
  });
  console.log('draining at ', n);
};

writer();

// ==== Mine: writing IDs to hit the API, on the ratings table only ==== //
// const stream = fs.createWriteStream('/Users/madlic/go/src/vegeta_breaker2/testNuke.txt');

// const writer = (n = 1) => {
//   let isReady = true;
//   while (isReady && n < 3e6 + 1) {
//     var randNum = Math.floor((Math.random() * 1e6) + 1)
//     var url = `GET http://localhost:3004/rooms/${randNum}/ratings/`;
//     if (n !== 3e6) {
//       isReady = stream.write(`${url}\n`);
//     } else {
//       isReady = stream.write(`${url}`);
//     }
//     n += 1;
//   }
//   stream.once('drain', () => {
//     writer(n);
//   });
//   console.log('draining at ', n);
// };

// writer();

// ==== Mine: writing IDs to get static files ==== //
// const stream = fs.createWriteStream('/Users/madlic/go/src/vegeta_breaker2/testNuke.txt');

// const writer = (n = 1) => {
//   let isReady = true;
//   while (isReady && n < 3e6 + 1) {
//     var randNum = Math.floor((Math.random() * 1e6) + 1)
//     if (n % 2 === 0) {
//       var url = `GET http://localhost:3004/rooms/${randNum}/reviews/`;
//     } else {
//       var url = `GET http://localhost:3004/rooms/${randNum}/ratings/`;
//     }
//     if (n !== 3e6) {
//       isReady = stream.write(`${url}\n`);
//     } else {
//       isReady = stream.write(`${url}`);
//     }
//     n += 1;
//   }
//   stream.once('drain', () => {
//     writer(n);
//   });
//   console.log('draining at ', n);
// };

// writer();


// ==== Ilias ==== //

// const stream = fs.createWriteStream('/Users/madlic/go/src/vegeta_breaker2/testNuke2.txt');

// const writer = (n = 1) => {
//   let isReady = true;
//   while (isReady && n < 1e6 + 1) {
//     var randNum = Math.floor((Math.random() * 1e6) + 1)
//     var url = `GET http://54.215.207.40:3002/api/restaurants/${randNum}/overview/`;
//     if (n !== 1e6) {
//       isReady = stream.write(`${url}\n`);
//     } else {
//       isReady = stream.write(`${url}`);
//     }
//     n += 1;
//   }
//   stream.once('drain', () => {
//     writer(n);
//   });
//   console.log('draining at ', n);
// };

// writer();





// ==== STEVE ==== /
// http://54.183.62.122:3006/api/neighborhood/456

// const stream = fs.createWriteStream('/Users/madlic/go/src/vegeta_breaker2/testNuke2.txt');

// const writer = (n = 1) => {
//   let isReady = true;
//   while (isReady && n < 1e6 + 1) {
//     var randNum = Math.floor((Math.random() * 1e6) + 1)
//     var url = `GET http://54.183.62.122:3006/api/neighborhood/${randNum}/`;
//     if (n !== 1e6) {
//       isReady = stream.write(`${url}\n`);
//     } else {
//       isReady = stream.write(`${url}`);
//     }
//     n += 1;
//   }
//   stream.once('drain', () => {
//     writer(n);
//   });
//   console.log('draining at ', n);
// };

// writer();


// ==== Johnny ==== //

// http://loadbalancer-airbnb-descriptions-1059579574.us-west-1.elb.amazonaws.com/api/rooms/id/description/
// http://18.144.22.138:3002/api/rooms/7658/description
// const stream = fs.createWriteStream('/Users/madlic/go/src/vegeta_breaker2/testNuke2.txt');

// const writer = (n = 1) => {
//   let isReady = true;
//   while (isReady && n < 1e6 + 1) {
//     var randNum = Math.floor((Math.random() * 1e6) + 1)
//     var url = `GET http://18.144.22.138:3002/api/rooms/${randNum}/description/`;
//     if (n !== 1e6) {
//       isReady = stream.write(`${url}\n`);
//     } else {
//       isReady = stream.write(`${url}`);
//     }
//     n += 1;
//   }
//   stream.once('drain', () => {
//     writer(n);
//   });
//   console.log('draining at ', n);
// };

// writer();
