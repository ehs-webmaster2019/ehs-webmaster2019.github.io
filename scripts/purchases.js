var purchases = [];

function addPurchase (item, amt, discount) {
      purchases.push (new purchase (item, amt, discount));
      displayPurchases ();
      popup ("Item successfully added to your cart");
}

function purchase (item, amt, discount) {
      this.item = item;
      this.amt = amt;
      this.discount = discount;

      this.getPurchaseAsString = function () {
            if (this.discount == 0) {
                  return "$" + this.amt + " - " + this.item;
            } else {
                  return "$" + (this.amt * (1 - (this.discount / 100))) + " - " + this.item + " at " + this.discount + "% off";
            }
      }

      this.getDiscountedPrice = function () {
            return this.amt * (1 - (this.discount / 100));
      }

      console.log (this.getPurchaseAsString ());
}

function displayPurchases () {
      var total = 0;
      var textTotal = "";
      $("#purchase-list").empty ();
      $(".removeable").remove ();
      $("#purchase-list").append ("<tr><th>Item</th><th>Price</th><th>Discount</th><th>Total</th></tr>");
      for (var i = 0; i < purchases.length; i ++) {
            total += purchases[i].getDiscountedPrice ();
            total = Math.round (total * 100) / 100;
            textTotal = formatMoney (total);

            $("#purchase-list").append ("<tr><td class='click'>" + purchases[i].item + "</td><td class='click'>$" + purchases[i].amt + "</td><td class='click'>%" + purchases[i].discount + " off</td><td class='click'>$" + textTotal + "</td></tr>");
      }
      $("#purchases").append ("<h3 class='removeable'>Subtotal - $" + textTotal + "</h3><h4 class='removeable'>Tax - $" + formatMoney (moneyRound (total * 0.04)) + "</h4><h2 class='removeable'>Total - $" + formatMoney (moneyRound (total * 1.04)) + "</h2>");
      if (purchases.length >= 1) {
            $(".checkout").fadeIn (200);
      } else {
            $(".checkout").fadeOut (200);
      }
}

function moneyRound (val) {
      return Math.round (val * 100) / 100;
}

function removePurchase (i) {
      purchases.splice (i, 1);
      displayPurchases ();
}

function formatMoney (amt) {
      var format = "";

      if (amt * 10 == Math.round (amt * 10)) { //if total only goes out to the tenths place
            if (amt == Math.round (amt)) { // if the total is whole
                  format = amt + ".00"; //add decimal places
            } else { // if is to the tenths
                  //add a zero
                  format = amt + "0";
            }
      }

      return format;
}
