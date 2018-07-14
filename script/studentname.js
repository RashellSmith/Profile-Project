$(document).ready(function(){
    $("button").click(function() {
      var h = $(".studentname").replaceWith( $('#txt_name').val());
      var x = document.getElementById("page");
      var p = document.getElementById("rocketBody");
      var f = document.getElementById("rocket");
      var timer = null;
      var countdownNumber = 10;

      $(x).addClass("hidepage") ;
      $(p).show();

      clearInterval(timer);
	    countdownNumber = 10;
	    document.getElementById('countdown').innerHTML = countdownNumber;

      timer = setInterval(function () {
      countdownNumber = countdownNumber-1;
      document.getElementById('countdown').innerHTML = countdownNumber;
        if (countdownNumber <=0){

          $(f).addClass("flying");
        }
        };
      // $(f).addClass("flying");


      setTimeout (function () {
      $(x).removeClass("hidepage")
      $(p).hide()


}, 15000)});
       //   x.className === "all-elements")
       //   { x.className += "hidepage";
       // }

});

// function myFunction() {
//     var x = document.getElementById("m");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }
