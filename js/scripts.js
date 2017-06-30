//business logic
var apiKey = require('./../.env').apiKey;

// API constructor:
exports.api = "https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=" + apiKey + "&query=";


//Doctor constructor:
var Doctor = function(name, location, specialities) {
  this.name = name;
  this.location = location;
  this.specialities = specialities;
}

// Api.prototype.getDoctors = function(){
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + apiKey).then(function(response) {
//     console.log(response);

//
//
// Api.prototype.getDoctors = function(){
//   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
//     console.log(response);
//     // var doctor;
//     // // console.log(response);
//     // // if (response.data[i].specialties["0"].actor = $("#userUid"))
//     // for (i = 0 ; i <= 9 ; i++){
//     //   var doctorName =  response.data[i].profile.first_name + " " +      response.data[i].profile.last_name;
//     //   var doctorLocation = response.data[i].practices["0"].location_slug;
//     //   var doctorSpecialities = response.data[i].specialties["0"].actor;
//     //
//     //
//     //   // var doctor[i] = new Doctor(response.data[i].profile.first_name , response.data[i].practices["0"].location_slug , response.data[i].specialties["0"].actor );
//     //   //
//     //
//     //   // console.log(doctorName, doctorLocation, doctorSpecialities  );
//     //   doctor = new Doctor(doctorName, doctorLocation, doctorSpecialities);
//     //   return doctor;
//     //   console.log(doctor);
//     // };
//   });
// }


exports.doctorDetails =  Doctor ;
