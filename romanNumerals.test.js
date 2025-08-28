import { test, expect } from "vitest";

function romanNumerals(number) {
  let answer = "";
  function digitConverter(digit, romanNumber) {
    while (number >= digit) {
      number -= digit;
      answer += romanNumber;
    }
  }
  digitConverter(100, "C");
  digitConverter(99, "IC");
  digitConverter(90, "XC");
  digitConverter(89, "IXC");
  digitConverter(50, "L");
  digitConverter(49, "IL");
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
testFunction(49, "IL");
testFunction(77, "LXXVII");
testFunction(90, "XC");
testFunction(99, "IC"); //99 is current max for testing, 50 and 90 missing too!
