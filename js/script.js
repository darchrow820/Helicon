$(function () {
  $(".product__btn").click(function (event) {
    var x = $(this).text();
    if (x == "Добавить в корзину") {
      $(this).text("Добавлено");
    } else {
      $(this).text("Добавить в корзину");
    }
  });
});
