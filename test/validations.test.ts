import * as validations from "../src/validations";

describe("isValidHex", () => {
  test("invalid length - too long", () => {
    expect(validations.isValidHex("#0000000")).toEqual(false);
  });

  test("invalid length - too short", () => {
    expect(validations.isValidHex("#00")).toEqual(false);
  });

  test("invalid non-alpha character - 3 char length", () => {
    expect(validations.isValidHex("#0(0")).toEqual(false);
  });

  test("invalid non-alpha character - 6 char length", () => {
    expect(validations.isValidHex("#0000(0")).toEqual(false);
  });

  test("invalid alpha character - 3 char length", () => {
    expect(validations.isValidHex("#Z00")).toEqual(false);
  });

  test("invalid alpha character - 6 char length", () => {
    expect(validations.isValidHex("#0000Z0")).toEqual(false);
  });

  test("valid 3 character hex", () => {
    expect(validations.isValidHex("#0F0")).toEqual(true);
  });

  test("valid 6 character hex", () => {
    expect(validations.isValidHex("#0F0789")).toEqual(true);
  });
});
