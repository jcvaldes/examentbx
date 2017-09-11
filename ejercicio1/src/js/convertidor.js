import FizzBuzz from "./fizzBuzz";
import Fizz from "./fizz";
import Buzz from "./buzz";

class Convertidor {
  constructor() {}
  parseArray(iArray) {
    return iArray.map((value, key) => {
      if (value % 3 == 0 && value % 5 == 0) {
        return new FizzBuzz().toString();
      }
      if (value % 3 == 0 || value.toString().indexOf('3') > -1) {
        return new Fizz().toString();
      }
      if (value % 5 == 0 || value.toString().indexOf('5') > -1) {
        return new FizzBuzz().toString();
      }
      // y en el caso que no cumpla ninguna condición anterior? asumo que devuelvo el mismo número
      return value.toString();
    })
  }
}
module.exports = Convertidor;