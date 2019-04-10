$(document).ready (function () {
      page ('home');
      $(".main-side").load ("pages/search.html");
      $(".drop-content").hide ();

      $(document).on ("click", ".click",function () { //use .on bc DOM elements created after start
            removePurchase ($(this).parents('tr').index () - 1);
            displayPurchases ();
      });

      $(".drop").hover (function () {
            $(this).find (".drop-content").fadeIn (100);
      }, function () {
            $(this).find (".drop-content").fadeOut (100);
      });

      $("#popup").click (function () {
            page ("purchase");
            $(this).fadeOut (500);
      });
});


function page (p) {
      $(".content").load ("pages/" + p + ".html");

      $(".username").not ("#nova").each (function (i) {
            console.log (i);
            $(this).text (getRandomName ());
      });
}

function lookup () {
      var input = $("#search-bar").val ();
      var list = document.getElementsByClassName ("result");

      for (var i = 0; i < list.length; i ++) {
            var a = list[i].innerHTML;
            if (a.toUpperCase ().indexOf (input.toUpperCase ()) > -1) {
                  list[i].style.display = "flex";
            } else {
                  list[i].style.display = "none";
            }
      }
}

function popup (message) {
      $("#popup").html (message).fadeIn (100);
      setTimeout (function () {$("#popup").fadeOut (500);}, 5000); //stay on screen for 5 sec
}
