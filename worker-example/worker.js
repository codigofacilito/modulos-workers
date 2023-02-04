self.onmessage = function (e) {
  // e.data contiene los datos enviados desde la página principal
  operationCostosa();
  // Enviar resultados de vuelta a la página principal
  self.postMessage("Finalicé la operación costosa");
};

function operationCostosa() {
  for (let i = 0; i < 100000; i++) {
    // hacer algo costoso
    console.log(i)
  }
}
