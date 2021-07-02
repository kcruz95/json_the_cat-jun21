const request = require('request');

const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const fetchBreedDescription = (breedName, callback) => {
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    console.log('breed', breed);
    // console.log(body);
    // console.log('typeof', typeof body);
    console.log(data);
    // console.log(response);

    if (error) {
      return callback(error);
    }
  });
};



module.exports = fetchBreedDescription;