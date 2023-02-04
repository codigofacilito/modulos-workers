//random generated between 0 and 100
let magicNumber = Math.floor(Math.random() * 100);

let boton = document.querySelector("#boton");
let messageElement = document.querySelector("#mensaje");


boton.addEventListener("click", function () {
  let input = document.querySelector("#numero-usuario");
  let number = parseInt(input.value);

  if (number === magicNumber) {
    messageElement.innerText = "¡Lo lograste! Muchas felicidades, el numero es " + magicNumber;
    document.querySelector("main").classList.add("success");
  } else if (number > magicNumber) {
    messageElement.innerText = "El número mágico es menor que " + number;
  } else {
    messageElement.innerText = "El número mágico es mayor que " + number;
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('Service Worker registrado exitosamente: ', registration.scope);
    }).catch( err => {
      console.log('Service Worker no se pudo registrar: ', err);
    });
  });
}