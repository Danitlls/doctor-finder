var Doctor = require('./../js/scripts.js').doctorList;
var Api = require('./../js/scripts.js').apiInfo;


$(document).ready(function() {
  // var uid = "cold";
   $('#search').click(function(){
    var uid = $("#userUid").val();
    var nearbyDoctors = new Doctor(uid);
    var nearbyDoctorsUid = new Api(uid);
    console.log(uid);
    console.log(nearbyDoctors.doctorFinder());
    console.log(nearbyDoctorsUid.getUid());
  });
});
