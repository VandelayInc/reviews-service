const fs = require('fs');

const stream = fs.createWriteStream('./assets/ids.js');

// var idsArr = [];
// for (var i = 1; i < 10001; i += 1) {

// }

const writer = (n) => {
  let isReady = true;
  while (isReady && n < 10001) {
    var url = `"https://d1b58ce4uxxk9l.cloudfront.net/profile_pics/image${n}.png"`;
    if (n === 1) {
      isReady = stream.write(`const ids = [${url},\n`);
    } else if (n === 10000) {
      isReady = stream.write(`${url}]`);
    } else {
      isReady = stream.write(`${url},\n`);
    }
    n += 1;
  }
  stream.once('drain', () => {
    writer(n);
  });
  console.log('draining at ', n);
};

writer(1);