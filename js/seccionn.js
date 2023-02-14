$(document).ready(function () {
  var estado = false;

  $("#btn-toggle").on("click", function () {
    $(".seccionToggle").slideToggle();

    if (estado == true) {
      $(this).src(Image);
      $("body").css({
        overflow: "auto",
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
