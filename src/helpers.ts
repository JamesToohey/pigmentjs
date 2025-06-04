import { validateHex } from "./validations";
import { ValidatedHex } from "./types";

const randomHex = (): ValidatedHex => {
  let r = Math.round(Math.random() * 255).toString(16);
  if (r.toString().length === 1) {
    r += r;
  }

  let g = Math.round(Math.random() * 255).toString(16);
  if (g.length === 1) {
    g += g;
  }

  let b = Math.round(Math.random() * 255).toString(16);
  if (b.length === 1) {
    b += b;
  }
  return validateHex(`#${r}${g}${b}`.toUpperCase());
};

export { randomHex };
