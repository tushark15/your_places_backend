const axios = require("axios");
const HttpError = require("../models/http-error");
async function getCoordFromAddress(address) {
//   const options = {
//     method: "GET",
//     url: "https://google-maps-geocoding.p.rapidapi.com/geocode/json",
//     params: {
//       address: address,
//       language: "en",
//     },
//     headers: {
//       "X-RapidAPI-Key": "8bfe4443dfmsh0d658949ad89529p17e7fcjsn41b04a092792",
//       "X-RapidAPI-Host": "google-maps-geocoding.p.rapidapi.com",
//     },
//   };

//   axios.request(options).then(function (response) {
//     const data = response.data;
//   });
//   if (!data || data.status === "ZERO_RESULTS") {
//     const error = new HttpError(
//       "Could not find location for the given address",
//       422
//     );
//     throw error;
//   }

//   const coordinates = data.results[0].geometry.location;
//   return coordinates;

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

return {
    lat: 3781231,
    lng: 3138318
}
}

module.exports = getCoordFromAddress;
