import Pigment, {Palette} from "../src/index";
import {Palette as pa} from "../src/palette";
import {Pigment as p} from "../src/pigment";

describe("instantiation structure", () => {
    test("Pigment() will return an instance of Pigment", () => {
        expect(Pigment() instanceof p).toBeTruthy();
    });

    test("Palette() will return an instance of Palette", () => {
        expect(Palette(Pigment()) instanceof pa).toBeTruthy();
    });
});
