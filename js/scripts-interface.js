var Doctor = require('./../js/scripts.js').doctorDetails;
var api = require('./../js/scripts.js').api;

$(document).ready(function() {

   $('#search').click(function(){
    var uid = $("#userUid").val();
    console.log(uid);

    $.get(api + uid).then(function(response) {
      console.log(response);
      for (i = 0 ; i <= 14 ; i++){
        var doctorName =  response.data[i].profile.first_name + " " + response.data[i].profile.last_name;
        var doctorLocation = response.data[i].practices["0"].location_slug;
        var doctorSpecialities = response.data[i].specialties["0"].actor;
        var image = response.data["0"].profile.image_url;
        //displays list in console:
        var doctor = new Doctor(doctorName, doctorLocation, doctorSpecialities, image);
        console.log(doctor);

        //displays list in index.html (could have done it without a constructor)
        $(".output").append("<li><span>" + doctor.name + "</span></br><div>" + doctor.location +"</br>" + doctor.specialities + "<img src='"+ doctor.image +"'></img></div></li>");
      };
    });

  });
});

// headache
