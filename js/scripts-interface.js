var Doctor = require('./../js/scripts.js').doctorDetails;
var ApiCall = require('./../js/scripts.js').api;

$(document).ready(function() {
  $('#search').click(function() {
    var uid = $("#userUid").val();
    new ApiCall($, uid)
    .then(function(doctors){
      doctors.forEach(function(doctor){
        addDoctor(doctor)
      })
    })
  });
  $("button").click(function(){
    $("ul").empty();
  });
});

function addDoctor(doctor) {
  $(".output").append("<li><span>" + doctor.name + "</span></br><div>" + doctor.location +"</br>" + doctor.specialities + "<img src='"+ doctor.image +"'></img></div></li>");
}
