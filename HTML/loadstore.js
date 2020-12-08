$(document).ready(load_store);
//console.log(news.news[2].id);
//const headlines[];

function load_store() {
  var data = products["product"];

  //loads products
  var template1 = $("#product-template").html();
  var html_maker = new htmlMaker(template1);
  //create an html Maker
  var htmlmulti = html_maker.getHTML(data);
  //generate dynamic HTML based on the data
  $("#products_display").html(htmlmulti);

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

  $(".photo").click(function () {
    var $this = $(this);
    loadDetail(Number($this.attr("prod_id")));
  });
  $(".name").click(function () {
    var $this = $(this);
    loadDetail(Number($this.attr("prod_id")));
  });
  ///
}
