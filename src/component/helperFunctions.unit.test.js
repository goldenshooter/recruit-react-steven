import { getNumber } from "./helperFunctions";

const MOCK_DATA = [
  {
    input: 0,
    expected: 0,
  },
  {
    input: 1,
    expected: 1,
  },
  {
    input: "abc",
    expected: undefined,
  },
  {
    input: "123abc",
    expected: 123,
  },
  {
    input: null,
    expected: undefined,
  },
  {
    input: NaN,
    expected: undefined,
  },
  {
    input: undefined,
    expected: undefined,
  },
];

test.each(MOCK_DATA)("Should return correct result", (data) => {
  const result = getNumber(data.input);
  expect(result).toBe(data.expected);
});
