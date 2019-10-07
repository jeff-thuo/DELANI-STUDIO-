
//user logics
$(document).ready(function(){ // start of document get_ready function
    $("#design,#p1").click(function(){
    $("#design").toggle();
    $("#p1").toggle();
  });

  $("#development,#p2").click(function(){
    $("#development").toggle();
    $("#p2").toggle();
  });

  $("#product,#p3").click(function(){
    $("#product").toggle();
    $("#p3").toggle();
  });

$("#submit").click(function () {
  //event.preventDefault();
  var name = $("#contact-name").val();
  var email = $("#contact-email").val();
  if ($("#contact-name").val() == "") {
          alert("Please input name")
  }
  else if ($("#contact-email").val() == "") {
          alert("Please input email")
  }
  else if ($("#contact-message").val() == "") {
          alert("Please input your message")
  }
  else {
          alert("Thank you " + name + "," + " for reaching out. Your messege has been received and is being acted on. .Always keep it Delani Studios.");
  }
});

$('#work1').mouseenter(function () {
  $('.work-heading').filter('#work1-title').show("slow");
}).mouseleave(function () {
  $('#work1-title').hide("fast");
});
$('#work2').mouseenter(function () {
  $('.work-heading').filter('#work2-title').show("slow");
}).mouseleave(function () {
  $('#work2-title').hide("fast");
});
$('#work3').mouseenter(function () {
  $('.work-heading').filter('#work3-title').show("slow");
}).mouseleave(function () {
  $('#work3-title').hide("fast");
});
$('#work4').mouseenter(function () {
  $('.work-heading').filter('#work4-title').show("slow");
}).mouseleave(function () {
  $('#work4-title').hide("fast");
});
$('#work5').mouseenter(function () {
  $('.work-heading').filter('#work5-title').show("slow");
}).mouseleave(function () {
  $('#work5-title').hide("fast");
});
$('#work6').mouseenter(function () {
  $('.work-heading').filter('#work6-title').show("slow");
}).mouseleave(function () {
  $('#work6-title').hide("fast");
});
$('#work7').mouseenter(function () {
  $('.work-heading').filter('#work7-title').show("slow");
}).mouseleave(function () {
  $('#work7-title').hide("fast");
});
$('#work8').mouseenter(function(){
$('.work-heading').filter('#work8-title').show("slow");
}).mouseleave(function(){
$('#work8-title').hide("fast");
});



});//end of document_get_ready functions

