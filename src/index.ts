// These imports look weird. They're designed so that `palette instanceof Palette === true`;

import { Pigment as pi } from "./pigment";
import { Palette as pa } from "./palette";

export const Palette = (c: string | pi) => new pa(c);
export const Pigment = (c?: string) => new pi(c);
export default (c?: string) => new pi(c);
