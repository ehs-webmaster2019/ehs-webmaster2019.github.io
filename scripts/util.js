$(document).ready (function () {
      $(window).resize (function () {
            $(".resize").css ("letter-spacing", $(this).width / $(this).html.length);
      });
});

var i = 1;

function grid (element, col, row) {
      $(element).css ("grid-template-columns", "repeat (" + col + ", 1fr);");
      $(element).css ("grid-template-rows"   , "repeat (" + row + ", 1fr);");
}

function constrain (val, min, max) {
      if (val < min) {
            return min;
      }
      if (val > max) {
            return max;
      }
      return val;
}

function getRandomName () {
      var randName = $(".randomname").get ()[Math.round (Math.round (Math.random () * 154))].innerHTML;
      return randName;
}
