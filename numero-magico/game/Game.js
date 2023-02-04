import Match from './Match.js';

class Game {
  constructor() {
    this.matches = [];
  }
  addMatch(match) {
    this.matches.push(match);
  }
  getBestMatch() {
    return this.matches.reduce((currentBestMatch, match) => {
      if (match.trials < currentBestMatch.trials) {
        return match;
      }
      return currentBestMatch;
    }, this.matches[0]);
  }
  play() {
    let magicNumber = Math.floor(Math.random() * 100);
    let match = new Match(magicNumber);
    this.addMatch(match);
    match.play();
  }
}

export default Game;