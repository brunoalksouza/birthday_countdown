var countDownDate = new Date("Dec 24, 2023 12:00:00").getTime();

var countdownfunction = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("amx").innerHTML =
    days + "D " + hours + "H " + minutes + "M " + seconds + "S ";

  if (distance <= 0) {
    clearInterval(countdownfunction);
    document.getElementById("box-title").innerHTML = "CHEGOOOOOOOO!!!";
    document.getElementById("box-title").style.fontSize = "50px";
    document.getElementById("box-title").style.fontWeight = "bold";

    document.getElementById("amx").innerHTML =
      "PARABENNSSSSS ISINHA CORREGOS!!! <3";
    document.getElementById("img").style.display = "block";
  }
}, 1000);
