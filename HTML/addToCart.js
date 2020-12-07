function addToCart(id) {
  cart["items"].push(id);
  //cart["items"] += id;
  console.log("added item" + id);

  //cart = JSON.stringify(obj);
  console.log(cart["items"]);
}
