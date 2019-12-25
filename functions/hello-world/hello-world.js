const axios = require("axios");

async function getRandomQuote(cb) {
  const response = await axios.get("https://api.tronalddump.io/random/quote");
  cb(response.data);
}

exports.handler = function(event, context, callback) {
  getRandomQuote(data => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data)
    });
  });
};