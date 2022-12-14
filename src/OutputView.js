const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
  },

  printResult(messages) {
    Console.print(messages.join(' '));
  },

  printWin() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  },

  finishGame() {
    Console.close();
  }
};

module.exports = OutputView;
