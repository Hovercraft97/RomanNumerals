import { test, expect } from "vitest";

function romanNumerals(number) {
  let answer = "";
  function digitConverter(digit, romanNumber) {
    while (number >= digit) {
      number -= digit;
      answer += romanNumber;
    }
  }
  digitConverter(10, "X");
  digitConverter(9, "IX");
  digitConverter(5, "V");
  digitConverter(4, "IV");
  digitConverter(1, "I");
  return answer;
}

function testFunction(number, expected) {
  test(`${number} in roman numerals is ${expected}`, () => {
    expect(romanNumerals(number)).toBe(expected);
  });
}
testFunction(1, "I");
testFunction(34, "XXXIV");
testFunction(39, "XXXIX");
testFunction(77, "XXXXXXXVII");
testFunction(99, "XXXXXXXXXIX"); //99 is current max for testing
