import { test, expect } from "vitest";

function romanNumerals(number) {
  if (number === 5) {
    return "V";
  }

  if (number === 4) {
    return "IV";
  }

  let answer = "";
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

test("6 in roman numerals is V", () => {
  expect(romanNumerals(6)).toBe("VI");
});
