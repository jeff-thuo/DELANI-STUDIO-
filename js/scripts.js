
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

$(".submit").click(function (event) {
  event.preventDefault();
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



$("#photo1").hover(function () {
  $("#photo1").stop().animate({ opacity: "0.3" }, "0.5");
  $("#para1").toogle()

}, function () {
  $("#photo1").stop().animate({ opacity: "1" }, "1");
});
$("#photo2").hover(function () {
  $("#photo2").stop().animate({ opacity: "0.3" }, "0.5");
}, function () {
  $("#photo2").stop().animate({ opacity: "1" }, "1");
});
$("#photo3").hover(function () {
  $("#photo3").stop().animate({ opacity: "0.3" }, "0.5");
}, function () {
  $("#photo3").stop().animate({ opacity: "1" }, "1");
});
$("#photo4").hover(function () {
  $("#photo4").stop().animate({ opacity: "0.3" }, "0.5");
}, function () {
  $("#photo4").stop().animate({ opacity: "1" }, "1");
});
$("#photo5").hover(function () {
  $("#photo5").stop().animate({ opacity: "0.3" }, "0.5");
}, function () {
  $("#photo5").stop().animate({ opacity: "1" }, "1");
});
$("#photo6").hover(function () {
  $("#photo6").stop().animate({ opacity: "0.3" }, "0.5");
}, function () {
  $("#photo6").stop().animate({ opacity: "1" }, "1");
});
$("#photo7").hover(function () {
  $("#photo7").stop().animate({ opacity: "0.3" }, "0.5");
}, function () {
  $("#photo7").stop().animate({ opacity: "1" }, "1");
});
$("#photo8").hover(function () {
  $("#photo8").stop().animate({ opacity: "0.3" }, "0.5");
}, function () {
  $("#photo8").stop().animate({ opacity: "1" }, "1");
});


});//end of document_get_ready functions

