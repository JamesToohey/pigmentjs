const {Pigment} = require("../dist/pigment.js");

describe("loads", () => {
    test("public methods", () => {
        const pigment = Pigment();

        pigment.complementary();
        pigment.triad();
        pigment.monochrome();
        pigment.shades();
    });
});
