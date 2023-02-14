$(document).ready(function () {
  var estado = false;
  $("#btn1-toggle").on("click", function () {
    $(".seccionToggle").slideToggle();

    if (estado == true) {
      $(this).src(Image);
      $("body").css({
        overflow: "",
      });
      estado = true;
    } else {
      $("body").css({
        overflow: "hidden",
      });
      estado = false;
    }
  });
});
