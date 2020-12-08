$(document).ready(load_store);
//console.log(news.news[2].id);
//const headlines[];

function load_store() {
  var data = products["product"];
  console.log("all data " + data);
  //loads products
  var template1 = $("#product-template").html();
  var html_maker = new htmlMaker(template1);
  //create an html Maker
  var htmlmulti = html_maker.getHTML(data);
  //generate dynamic HTML based on the data
  $("#products_display").html(htmlmulti);

  console.log("origenal html" + htmlmulti);

  function loadDetail(id) {
    console.log("got to loadDetial");
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

  //loads frist item as a default
  loadDetail(data[0].productId);

  function changeCat(cat) {
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
    console.log("cat data " + data1);
    var template1 = $("#product-template").html();
    var html_maker = new htmlMaker(template1);
    //create an html Maker
    var htmlmulti = html_maker.getHTML(data1);
    //generate dynamic HTML based on the data
    console.log("Got here!");
    $("#products_display").html(htmlmulti);

    console.log("modified html" + htmlmulti);
  }

  $(document).on("click", ".photo", {}, function (e) {
    console.log("got the click");
    var $this = $(this);
    loadDetail(Number($this.attr("prod_id")));
  });
  $(document).on("click", ".name", {}, function (e) {
    console.log("got the click");
    var $this = $(this);
    loadDetail(Number($this.attr("prod_id")));
  });
  $(document).on("click", ".catigoryOption", {}, function (e) {
    console.log("got the click");
    var $this = $(this);
    changeCat($this.attr("catigory"));
  });
  // $(".photo").click(function () {
  //   console.log("got the click");
  //   var $this = $(this);
  //   loadDetail(Number($this.attr("prod_id")));
  // });
  // $(".name").click(function () {
  //   var $this = $(this);
  //   loadDetail(Number($this.attr("prod_id")));
  // });
  // $(".catigoryOption").click(function () {
  //   var $this = $(this);
  //   changeCat($this.attr("catigory"));
  // });

  ///
}
