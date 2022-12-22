const { stringLength } = require("./index.js");

test("Should output string character count", () => {
  const output = stringLength("string");
  expect(output).toBe(6);
});

test('Check whether string length is between 1-10', () => {
  const output = () => stringLength('LengthyString')
  expect(output).toThrow();
});