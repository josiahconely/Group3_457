$(document).ready(load_store);

var subproducts = {
  product: [],
};

function load_store() {
  var data = products["product"];
  //loads products
  var template1 = $("#product-template").html();
  var html_maker = new htmlMaker(template1);
  //create an html Maker
  var htmlmulti = html_maker.getHTML(data);
  console.log("data: " + data);
  //generate dynamic HTML based on the data
  $("#products_display").html(htmlmulti);
  //loads frist item as a default
  loadDetail(data[0].productId);

  function loadDetail(id) {
    var template2 = $("#focus-product-template").html();
    var html_maker = new htmlMaker(template2);
    //create an html Maker
    var i = 0;
    while (i < data.length) {
      if (data[i].productId === id) {
        var htmlDetail = html_maker.getHTML(data[i]);
        $("#focus-product").html(htmlDetail);
      }
      i++;
    }
    //generate dynamic HTML based on the data
  }

  //changes the catigory that is visable
  function changeCat(cat) {
    //creates copy of all products to shrink without affecting origenal data
    subproducts = JSON.parse(JSON.stringify(products));
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
    var data1 = subproducts["product"];
    var template1 = $("#product-template").html();
    var html_maker = new htmlMaker(template1);
    //create an html Maker
    var htmlmulti = html_maker.getHTML(data1);
    //generate dynamic HTML based on the data
    $("#products_display").html(htmlmulti);
  }

  $(document).on("click", ".photo", {}, function (e) {
    var $this = $(this);
    loadDetail(Number($this.attr("prod_id")));
  });

  $(document).on("click", ".name", {}, function (e) {
    var $this = $(this);
    loadDetail(Number($this.attr("prod_id")));
  });

  $(document).on("click", ".catigoryOption", {}, function (e) {
    var $this = $(this);
    changeCat($this.attr("catigory"));
  });
}
