import Pigment, {Palette} from "../src/index";

describe("Palette instantiation", () => {
    test("it returns source colour and complementary colour", () => {
        const colour = Pigment("#47FF66");
        const palette = Palette(colour);
        expect(palette.primary).toEqual(colour);
        expect(palette.complementary).toEqual(colour.complementary());
    });

    test("it throws an error when instantiated with invalid value", () => {
        expect(() => Palette("invalid")).toThrow(
            "Palette must be instantiated with either an instance of Pigment or a hex string",
        );
    });
});
