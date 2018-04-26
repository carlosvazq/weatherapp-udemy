const request = require('request');

var apiKey = '47dfa3c6376ad5bd9fcb5bf40323cffc';

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;
