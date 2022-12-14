const InputCheck = require("./InputCheck");
const InputView = require("./inputView");
const OutputView = require("./OutputView");
const RandomNumbers = require("./RandomNumbers");
const CompareNumbers = require("./CompareNumbers");
const OptionCheck = require("./OptionCheck");

class BaseballGame {
  #computer;
  #user;

  constructor() {
    this.#computer;
    this.#user;
  }

  startGame() {
    OutputView.printStart();
    this.getComputerNumbers();
  }

  getComputerNumbers() {
    this.#computer = RandomNumbers.generate();
    this.getUserNumbers();
  }

  getUserNumbers() {
    InputView.getNumbers(this.handleUserNumbers);
  }

  handleUserNumbers = (numbers) => {
    InputCheck.isValidInput(numbers);
    this.#user = numbers.split("").map((number) => {
      return parseInt(number, 10);
    });

    this.compare();
  };

  compare() {
    const result = new CompareNumbers().compare(this.#computer, this.#user);
    let messages = [];
    if (result.ball === 0 && result.strike === 0) {
      messages.push("낫싱");
    }
    if (result.ball !== 0) {
      messages.push(`${result.ball}볼`);
    }
    if (result.strike !== 0) {
      messages.push(`${result.strike}스트라이크`);
    }
    if (result.strike === 3) {
      OutputView.printWin();
    }
    OutputView.printResult(messages);
    this.retry(result);
  }

  retry(result) {
    if (result.strike !== 3) {
      return this.getUserNumbers();
    }

    InputView.getOptions(this.handleOptions);
  }

  handleOptions = (option) => {
    OptionCheck.isValidInput(option);
    if (option === "1") return this.getComputerNumbers();
    if (option === "2") return OutputView.finishGame();
  };
}

module.exports = BaseballGame;
