var subproducts = {
  product: [],
};

function changeCat(cat) {
  var subproducts = JSON.parse(JSON.stringify(products));
  if (cat !== "All") {
    for (var i = 0; i < subproducts["product"].length; ) {
      console.log(i);
      if (subproducts["product"][i].Catigories !== cat) {
        subproducts["product"].splice(i, 1);
      } else {
        i++;
      }
    }
  }

  var template1 = $("#product-template").html();
  var html_maker = new htmlMaker(template1);
  //create an html Maker
  var htmlmulti = html_maker.getHTML(subproducts["product"]);
  //generate dynamic HTML based on the data
  $("#products_display").html(htmlmulti);
}
