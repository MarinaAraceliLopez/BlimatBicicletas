function cambiar() {
  document.getElementById("resultt").innerHTML = "Enviando Abrazo";
  document.getElementById("state-messagee").innerHTML = "Cargando...";

  setTimeout(function () {
    const message = document.getElementById("resultt");
    message.innerHTML = "¡Abrazo enviado!";
  }, 4000);
  setTimeout(function () {
    const message = document.getElementById("state-messagee");
    message.innerHTML = "&nbsp;";
  }, 4000);
  setTimeout(cambiaMensaje, 4000);
}
document.getElementById("btn-abrir-popup").onclick = function () {
  cambiar();
};
