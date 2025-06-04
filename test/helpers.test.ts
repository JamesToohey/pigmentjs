import * as helpers from "../src/helpers";
import { isValidHex } from "../src/validations";

describe("randomHex", () => {
  let colour;

  test("ensure always valid Hex 100 times", () => {
    for (let i = 0; i < 100; i += 1) {
      colour = helpers.randomHex();
      expect(isValidHex(colour)).toEqual(true);
    }
  });
});
