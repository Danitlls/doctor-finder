var Doctor = require('./../js/scripts.js').doctorDetails;
var api = require('./../js/scripts.js').api;

$(document).ready(function() {

   $('#search').click(function(){
    var uid = $("#userUid").val();
    console.log(uid);

    $.get(api + uid).then(function(response) {
      console.log(response);
      for (i = 0 ; i <= 19 ; i++){
        var doctorName =  response.data[i].profile.first_name + " " +      response.data[i].profile.last_name;
        var doctorLocation = response.data[i].practices["0"].location_slug;
        var doctorSpecialities = response.data[i].specialties["0"].actor;

        //displays list in console:
        var doctor = new Doctor(doctorName, doctorLocation, doctorSpecialities);
        console.log(doctor);

        //displays list in index.html
        $(".output").append("<li>" + doctor.name + "</br>" + doctor.location +"</br>" + doctor.specialities + "</li>");
      };
    });

  });
});

// headache
