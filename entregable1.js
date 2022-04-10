//Recolectar datos
const ingresarNombre = document.querySelector("#nombre")
const email = document.querySelector("#email")
const inquiry = document.querySelector("#inquiry")
const exito = document.querySelector("#exito")
const errorNodes = document.querySelectorAll(".error")

//Validar datos

function validarFormulario() {
  limpiaError()
  let errorFlag = false

  if (ingresarNombre.value.length < 1) {
    errorNodes[0].innerText = "El nombre no puede estar vacío"
    ingresarNombre.classList.add("error-border")
    errorFlag = true
  }
  if (!emailValido(email.value)) {
    errorNodes[1].innerText = "El email no es válido"
    email.classList.add("error-border")
    errorFlag = true
  }

  if (inquiry.value.length < 10) {
    errorNodes[2].innerText = "Provea una mayor descripción"
    inquiry.classList.add("error-border")
    errorFlag = true
  }

  if (!errorFlag) {
    exito.innerText = "Mensaje enviado con éxito"
  }
}

function limpiaError() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = ""
  }

  exito.innerText = "";
  ingresarNombre.classList.remove("error-border")
  email.classList.remove("error-border")
  inquiry.classList.remove("error-border")
}

function emailValido(email) {
  let pattern = /\S+@\S+\.\S+/
  return pattern.test(email)
}

//JS para el carrito de compras

//JS para borrar elementos del carrito de compras

var removerItemsCarro = document.getElementsByClassName(
  "carrito--boton__remover"
)
console.log(removerItemsCarro)
for (var i = 0; i < removerItemsCarro.length; i++) {
  var boton = removerItemsCarro[i]
  boton.addEventListener("click", function (event) {
    var botonClicked = event.target
    botonClicked.parentElement.parentElement.remove()
    actualizarTotalCarro()
  })
}

function actualizarTotalCarro() {
  var contenedorItemCarrito =
    document.getElementsByClassName("carrito--items")[0]
  var filasDelCarrito =
    contenedorItemCarrito.getElementsByClassName("carrito--fila")
  for (var i = 0; i < filasDelCarrito.length; i++) {
    var filaCarrito = filasDelCarrito[i];
    var precioDelItem =
      filaCarrito.getElementsByClassName("carrito--precio")[0]
    var cantidadDeItems = filaCarrito.getElementsByClassName(
      "carrito--cantidad__input"
    )[0]
    console.log(precioDelItem, cantidadDeItems)
  }
}
