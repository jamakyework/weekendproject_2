
console.log("javascript is here!!!");
$(document).ready(function(){
console.log("jquery is here!!!");

var studentArray = []; //array to store object info.tau into,

// begin click function
$("#clickMe").on("click", function(){
//begin ajax
$.ajax({
    dataType: "JSON",
    url: "http://devjana.net/support/tau_students.json",
    success: function(info){
    console.log("ajax success:", info);
    studentArray = info.tau; //store info.tau in global var
    displayOnDOM(info.tau);
  } //end info
  }); //end ajax
console.log("in student array:", studentArray);//logging what is in student array
//begin display
  var displayOnDOM = function(tauStudents){
    $("#showMe").empty();
    for( var i = 0 ; i < tauStudents.length; i++ ){
      console.log("In tauStudents[i]:",tauStudents[i]);
      $( "#showMe").append( "Picture: <img src= " + tauStudents[ i ].picUrl +  ">");
      $( "#showMe").append( "<p> Student Name: <br>" + tauStudents[ i ].first_name + " " + tauStudents[ i ].last_name);
      $( "#showMe").append( "<p> Information: <br>" + tauStudents[i].info + "</p>");
  }
  };//end display
});// end click function
});//end document ready
