import Game from "./game/Game.js";


let game = new Game();
let option = parseInt(prompt("Ingresa 1 para iniciar o 0 para terminar el juego"));
while (option === 1) {
  game.play();

  option = parseInt(prompt("Ingresa 1 para jugar otra partida o 0 para terminar el juego"));
}

let bestMatch = game.getBestMatch();

alert("La mejor partida terminó en " + bestMatch.trials + " intentos")