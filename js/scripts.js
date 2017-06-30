//business logic
var apiKey = require('./../.env').apiKey;

//constructor
var Doctor = function(name, location, uid) {
  this.name = name;
  this.location = location;
  this.uid = uid
}

Doctor.prototype.doctorFinder = function(){
  return Doctor.name;
}

var Api = function(x){
  this.userUid = x;
}

Api.prototype.getUid = function(){
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + apiKey).then(function(response) {

    console.log(response);

  });
};

exports.apiInfo =  Api ;
exports.doctorList =  Doctor ;



// var ExampleModule = function(args) {
//   this.args = args; //to be replaced with constructor arguments
// };
//
// ExampleModule.prototype.examplePrototype = function() {
//   return `this is an example prototype method`;
// };
//
// exports.exampleModule = ExampleModule;
