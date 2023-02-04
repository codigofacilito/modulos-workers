class Match {
  trials = 0;
  constructor(magicNumber) {
    this.magicNumber = magicNumber;
    this.state = "waiting"; // waiting, running, finished
  }
  play() {
    let number = parseInt(prompt("Adivina el número mágico"));
    this.evaluate(number);
    this.trials++;

    if (this.state === "finished") {
      alert("Has ganado en " + this.trials + "intentos");
    } else {
      this.play();
    }
  }

  evaluate(number) {

    if (this.magicNumber > number) {
      return alert("El número mágico es mayor a " + number);
    }
    if (this.magicNumber < number) {
      return alert("El número mágico es menor a " + number);
    }
    this.state = "finished";
  }
}

export default Match;