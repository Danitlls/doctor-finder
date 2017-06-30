//business logic
var apiKey = require('./../.env').apiKey;

// API constructor:
exports.api = "https://api.betterdoctor.com/2016-03-01/doctors?location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&&skip=0&limit=15&user_key=" + apiKey + "&query=";

//Doctor constructor:
var Doctor = function(name, location, specialities, image) {
  this.name = name;
  this.location = location;
  this.specialities = specialities;
  this.image = image;
}

exports.doctorDetails =  Doctor ;
