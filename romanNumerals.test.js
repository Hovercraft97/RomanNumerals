import { test, expect } from "vitest";

function romanNumerals(number) {
  let answer = "";
  while (number >= 10) {
    number -= 10;
    answer += "X";
  }
  if (number === 9) {
    number -= 9;
    answer += "IX";
  }
  if (number >= 5) {
    number -= 5;
    answer += "V";
  }
  if (number === 4) {
    number -= 4;
    answer += "IV";
  }
  for (let i = 0; i < number; i++) {
    answer += "I";
  }
  return answer;
}

test("1 in roman numerals is I", () => {
  expect(romanNumerals(1)).toBe("I");
});

test("2 in roman numerals is II", () => {
  expect(romanNumerals(2)).toBe("II");
});

test("3 in roman numerals is III", () => {
  expect(romanNumerals(3)).toBe("III");
});

test("4 in roman numerals is IV", () => {
  expect(romanNumerals(4)).toBe("IV");
});

test("5 in roman numerals is V", () => {
  expect(romanNumerals(5)).toBe("V");
});

test("6 in roman numerals is VI", () => {
  expect(romanNumerals(6)).toBe("VI");
});

test("7 in roman numerals is VII", () => {
  expect(romanNumerals(7)).toBe("VII");
});

test("8 in roman numerals is VIII", () => {
  expect(romanNumerals(8)).toBe("VIII");
});

test("9 in roman numerals is IX", () => {
  expect(romanNumerals(9)).toBe("IX");
});
test("10 in roman numerals is X", () => {
  expect(romanNumerals(10)).toBe("X");
});
test("11 in roman numerals is XI", () => {
  expect(romanNumerals(11)).toBe("XI");
});
test("20 in roman numerals is XX", () => {
  expect(romanNumerals(20)).toBe("XX");
});
test("34 in roman numerals is XXXIV", () => {
  expect(romanNumerals(34)).toBe("XXXIV");
});
test("39 in roman numerals is XXXIX", () => {
  expect(romanNumerals(39)).toBe("XXXIX");
});
