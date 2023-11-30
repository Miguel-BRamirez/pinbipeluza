const enlaces = document.querySelectorAll(".enlace");

enlaces.forEach(enlace => {
  enlace.addEventListener("click", function(event) {
    event.preventDefault();
    const resultado = realizarAccion(this.getAttribute("data-accion"));
    redirigirSegunResultado(resultado);
  });
});

function redirigirSegunResultado(resultado) {
  const urls = {
    "caso1": "\inicio.html",
    "caso2": "\blog.html",
    "caso3": "\calculator.html",
    "caso4": "\contacto.html",
    "caso-desconocido": "\views\error.html",
  };
  window.location.href = urls[resultado] || "https://ejemplo.com/otra-url";
}

function realizarAccion(accion) {
  // Realiza aquí tu lógica según la acción
  if (accion === "accion1") {
    // Lógica para el enlace 1
    return "caso1";
  } else if (accion === "accion2") {
    return "caso2";
  } else if (accion === "accion3") {
    return "caso3";
  } else if (accion === "accion4") {
    return "caso4";
  } else {
    // Si la acción no coincide con ninguna conocida
    return "caso-desconocido";
  }
}