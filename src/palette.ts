import Pigment from "./pigment";

export class Palette {
    readonly primary: Pigment;
    readonly complementary: Pigment;

    constructor(colour: Pigment | string) {
        if (!(colour instanceof Pigment)) {
            try {
                colour = new Pigment(colour);
            } catch (e) {
                throw new Error(
                    "Palette must be instantiated with either an instance of Pigment or a hex string",
                );
            }
        }
        this.primary = colour;
        this.complementary = colour.complementary();
    }
}

export default Palette;
