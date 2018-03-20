const request = require('request');
const fs = require('fs');
const syncRequest = require('sync-request');

const dl = (i) => {
  if (i === 10001) {
    return;
  }
  let hexNum = Math.floor(Math.random() * 16777216).toString(16); // 16777215 is equal to ffffff, add 1 to it to make sure I can get white as well
  let url = `https://dummyimage.com/48x48/${hexNum}/${hexNum}.png&text=0`;
  let filename = `./profilePics/image${i}.png`;

  request.head(url, function(err, res, body) {
    console.log(i);
    // console.log('content-type:', res.headers['content-type']);
    // console.log('content-length:', res.headers['content-length']);
    request(url).pipe(fs.createWriteStream(filename)).on('close', () => {
      dl(i + 1);
    });
  });
};

dl(1);


// var download = function(url, filename, callback) {
//   request('HEAD', url, function(err, res, body) {
//     // console.log('content-type:', res.headers['content-type']);
//     // console.log('content-length:', res.headers['content-length']);

//     request(url).pipe(fs.createWriteStream(filename)).on('close', callback);
//   });
// };

// for (var i = 1; i <= 1; i += 1) {
//   let hexNum = Math.floor(Math.random() * 16777216).toString(16); // 16777215 is equal to ffffff, add 1 to it to make sure I can get white as well
//   download(`https://dummyimage.com/48x48/${hexNum}/${hexNum}.png&text=0`, `./profilePics/image${i}.png`, function() {
//     console.log('done');
//   });
// }
