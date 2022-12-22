const { stringLength, reverseString } = require("./index.js");

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
test("Should output reversed string", () =>{
  const output = reverseString("string");
  expect(output).not.toBe("string");
});
