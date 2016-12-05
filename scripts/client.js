
console.log("javascript is here!!!");
$(document).ready(function(){
console.log("jquery is here!!!");

//begin click function
$("#clickMe").on("click", function(){
//begin ajax
$.ajax({
  dataType: "JSON",
  url: "http://devjana.net/support/tau_students.json",
  success: function(info){
  console.log("ajax success:", info);
  displayOnDOM(info.tau);
} //end info
}); //end ajax
});// end click function

//begin display
var displayOnDOM = function(tauStudents){
  $("#showMe").empty();
  for( var i = 0 ; i < tauStudents.length; i++ ){
    $( "#showMe").append( "<p> Student Name: <br>" + tauStudents[ i ].first_name + " " + tauStudents[ i ].last_name);
    $( "#showMe").append( "<p> Information: <br>" + tauStudents[i].info + "</p>");
    $( "#showMe").append( "Picture: <img src= " + tauStudents[ i ].picUrl +  ">");
}
};//end display
});//end document ready
