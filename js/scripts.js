//business logic
var apiKey = require('./../.env').apiKey;

//constructor

//
// Doctor.prototype.doctorFinder = function(){
//   return Doctor.name;
// }

var Api = function(x){
  this.apiK = x;
}
var Doctor = function(name, location, uid) {
  this.name = name;
  this.location = location;
  this.uid = uid;
}


Api.prototype.getUid = function(){
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + apiKey).then(function(response) {

    // console.log(response);
    // if (response.data[i].specialties["0"].actor = $("#userUid"))
    for (i = 0 ; i <= 9 ; i++){
      var doctorName =  response.data[i].profile.first_name + " " +      response.data[i].profile.last_name;
      var doctorLocation = response.data[i].practices["0"].location_slug;
      var doctorSpecialities = response.data[i].specialties["0"].actor;


      // var doctor[i] = new Doctor(response.data[i].profile.first_name , response.data[i].practices["0"].location_slug , response.data[i].specialties["0"].actor );
      //

      // console.log(doctorName, doctorLocation, doctorSpecialities  );
      var doctor = new Doctor(doctorName, doctorLocation, doctorSpecialities);
      console.log(doctor);
    };
  });
}
exports.apiInfo =  Api ;
exports.doctorList =  Doctor ;
