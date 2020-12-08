function addToCart(id) {
  cart["items"].push(id);
  //cart["items"] += id;
  //console.log("added item" + id);

  //cart = JSON.stringify(obj);
  //console.log(cart["items"]);
  upDateCart();
}

function clearCart() {
  cart["items"] = [];
  //console.log(cart["items"]);
  upDateCart();
}

function removeFromCart(id) {
  var flag = true;
  for (var i = 0; i < cart["items"].length; i++) {
    if (flag) {
      console.log("trying to splicing");
      if (cart["items"][i] == id) {
        console.log("splicing");
        cart["items"].splice(i, 1);
        flag = false;
      }
    }
  }
  console.log(cart["items"]);
  upDateCart();
}

function upDateCart() {
  var template1 = $("#cart-product-template").html();

  var dataObj = parseCart();
  var data = dataObj["product"];
  var html_maker = new htmlMaker(template1);
  //create an html Maker
  var htmlmulti = html_maker.getHTML(data);
  //generate dynamic HTML based on the data
  $("#cartList").html(htmlmulti);
}

function parseCart() {
  var cartData = cart["items"];

  var cartList = {
    product: [],
  };
  console.log("Test 1 :" + cartData);
  for (var i = 0; i < cartData.length; i++) {
    cartList["product"].push(filterById(products["product"], cartData[i]));
  }
  //console.log("this is the JSON obj: " + JSON.stringify(cartList));
  return cartList;
}

function filterById(jsonObject, id) {
  return jsonObject.filter(function (jsonObject) {
    return jsonObject["productId"] == id;
  })[0];
}
