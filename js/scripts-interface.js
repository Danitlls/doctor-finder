var Doctor = require('./../js/scripts.js').doctorList;
var Api = require('./../js/scripts.js').apiInfo;


$(document).ready(function() {
  // var uid = "cold";

   $('#search').click(function(){
    var uid = $("#userUid").val();
    var ndoc= new Api;
    console.log(ndoc.getDoctors());
    console.log(uid);
  });

    // var nearbyDoctors = new Doctor(nearbyDoctorsUid);


    // console.log(nearbyDoctors);
    // console.log(nearbyDoctorsUid);

});
