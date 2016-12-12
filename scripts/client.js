
console.log("javascript is here!!!");
$(document).ready(function(){
console.log("jquery is here!!!");

var studentArray = []; //array to store object info.tau into,
var studentIndex = 0;  //which student are we at
var studentLength = 0;//what is the length of our array


//begin ajax
$.ajax({
    dataType: "JSON",
    url: "http://devjana.net/support/tau_students.json",
    success: function(studentData){
    console.log("ajax success:", studentData);
    studentArray = studentData.tau;  //store studentData.tau in global var
    studentLength = studentArray.length; //store studentData length in global var
  } //end studentData
}); //end ajax

console.log("in student array:", studentArray);//logging what is in student array

 //nextStudent()
  $("#next").on("click", function(){
  next(studentArray[studentIndex++]);
});

  //prevStudent()
  $("#prev").on("click", function(){
prev(studentArray[studentIndex--]);
});

  //begin next display
  var next = function(tauStudents){
    $(".show-Me").empty();
      console.log("In tauStudents index:",tauStudents);
      $( ".show-Me").append( "Picture: <img src= " + tauStudents.picUrl +  ">");
      $( ".show-Me").append( "<p> Student Name: <br>" + tauStudents.first_name + " " + tauStudents.last_name);
      $( ".show-Me").append( "<p> Information: <br>" + tauStudents.info + "</p>");
  };//end  next display

  //begin prev display
  var prev = function(tauStudents){
    $(".show-Me").empty();
      console.log("In tauStudents index:",tauStudents);
      $( ".show-Me").append( "Picture: <img src= " + tauStudents.picUrl +  ">");
      $( ".show-Me").append( "<p> Student Name: <br>" + tauStudents.first_name + " " + tauStudents.last_name + "<p>");
      $( ".show-Me").append( "<p> Information: <br>" + tauStudents.info + "</p>");
  };//end  prev display

});//end document ready
