const { Random } = require("@woowacourse/mission-utils");

const RandomNumbers = {
  generate() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  },
};

module.exports = RandomNumbers;
