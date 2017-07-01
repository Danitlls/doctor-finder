//business logic
var apiKey = require('./../.env').apiKey;

// API constructor:
var api = "https://api.betterdoctor.com/2016-03-01/doctors?location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&&skip=0&limit=15&user_key=" + apiKey + "&query=";

var ApiCall = function(jQuery, query) {
  return new Promise(function(resolve, reject) {
    jQuery.get(api + query).then(function(response) {
      var doctors = [];
      console.log(response);
      for (i = 0 ; i < response.data.length ; i++){
        var doctor = handleResponse(response.data[i])
        doctors.push(doctor);
      }
      resolve(doctors);
    })
  })
}

function handleResponse(data) {
  var doctorName =  data.profile.first_name + " " + data.profile.last_name;
  var doctorLocation = data.practices[0].location_slug;
  var doctorSpecialities = data.specialties[0].actor;
  var image = data.profile.image_url;
  //displays list in console:
  var doctor = new Doctor(doctorName, doctorLocation, doctorSpecialities, image);
  console.log(doctor);
  return doctor
}

//Doctor constructor:
var Doctor = function(name, location, specialities, image) {
  this.name = name;
  this.location = location;
  this.specialities = specialities;
  this.image = image;
}

exports.api = ApiCall;
exports.doctorDetails =  Doctor ;
