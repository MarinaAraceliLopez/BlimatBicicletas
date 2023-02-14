var btnAbrirPopup = document.getElementById("btn-abrir-popup"),
  overlay = document.getElementById("overlay"),
  popup = document.getElementById("popup"),
  message = document.getElementById("result"),
  message = document.getElementById("state-message"),
  btnCerrarPopup = document.getElementById("btn-cerrar-popup");

btnAbrirPopup.addEventListener("click", function () {
  overlay.classList.add("active");
  popup.classList.add("active");
  message.classList.add("active");
});

btnCerrarPopup.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.remove("active");
  popup.classList.remove("active");
  message.classList.remove("active");
});
