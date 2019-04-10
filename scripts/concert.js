var concertDates = [];
var d = new Date ();

function generateDates (numberOfConcerts) {
      for (var i = 0 ; i < numberOfConcerts; i ++) {
            concertDates.push (new concertDate (constrain (d.getMonth () + Math.round (Math.random ()), 0, 12), constrain ((d.getDate() + Math.round(Math.random () * 20)), 0, 28), d.getFullYear (), Math.round (Math.random () * 9 + 1)));
      }

      concertDates.sort (function (a, b) {return a.date - b.date});

      for (var i = 0; i < concertDates.length; i ++) {
            console.log (concertDates[i].getDateAsString ());
      }
}

function setDates () {
      generateDates (10);
      $("#concertDates").empty ();
      $("#concertDates").append ("<h2>Upcomming Concert Dates</h2>");
      for (var i = 0; i < concertDates.length; i ++) {
            console.log (concertDates[i].getDateAsString ());
            var onclickString = "addPurchase (\"Concert Tickets: " + concertDates[i].getDateAsString () + "\", " + Math.round (Math.random () * 80) + ", " + Math.round (Math.random () * 5) + ");"

            $("#concertDates").append ("<a class=button onclick='" + onclickString +"'>" + concertDates[i].getDateAsString () + "</a><br>");
      }
}

function concertDate (m, d, y, time) {
      this.m = m;
      this.d = d;
      this.y = y;
      this.time = time;
      this.date = new Date (this.y, this.m, this.d, this.time);

      this.getDateAsString = function () {
            return m + "/" + d + "/" + y + " at " + time + ":00 PM";
      }

      this.convertToHours = function () {
            return (y * 8760) + (m * 730) + (d * 24) + time;
      }
}
