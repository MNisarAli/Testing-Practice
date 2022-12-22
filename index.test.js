const { stringLength, reverseString, Calculator } = require("./index.js");
const calculator = new Calculator;

// Task 1 => Test Case 1
test("Should output string character count", () => {
  const output = stringLength("string");
  expect(output).toBe(6);
});

// Task 1 => Test Case 2
test('Check whether string length is between 1-10', () => {
  const output = () => stringLength('LengthyString');
  expect(output).toThrow();
});

// Task 2
test("Should output reversed string", () => {
  const output = reverseString("string");
  expect(output).not.toBe("string");
});

// Task 3 => Test Case 1
describe("Check Add Calculator", () => {
  test("Should retrun sum of numbers", () => {
    expect(calculator.add(5, 5)).toBe(10);
  });

  test("Should retrun sum of numbers", () => {
    expect(calculator.add(5, -20)).not.toBe(10);
  });

  test("Should retrun sum of numbers", () => {
    expect(calculator.add(5, 20)).toBe(25);
  });
});

// Task 3 => Test Case 2
describe("Check Subtract Calculator", () => {
  test("Should retrun subtraction result", () => {
    expect(calculator.subtract(5, 5)).toBe(0);
  });

  test("Should retrun subtraction result", () => {
    expect(calculator.subtract(5, -20)).not.toBe(10);
  });

  test("Should retrun subtraction result", () => {
    expect(calculator.subtract(5, 20)).toBe(-15);
  });
});

// Task 3 => Test Case 3
describe("Check Divide Calculator", () => {
  test("Should retrun division result", () => {
    expect(calculator.divide(5, 5)).toBe(1);
  });

  test("Should retrun division result", () => {
    expect(calculator.divide(5, -20)).not.toBe(10);
  });

  test("Should retrun division result", () => {
    expect(calculator.divide(27, 3)).toBe(9);
  });
});


// Task 3 => Test Case 4
describe("Check Multiply Calculator", () => {
  test("Should retrun multiplication result", () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  });

  test("Should retrun multiplication result", () => {
    expect(calculator.multiply(5, -20)).not.toBe(10);
  });

  test("Should retrun multiplication result", () => {
    expect(calculator.multiply(27, 3)).toBe(81);
  });
});
