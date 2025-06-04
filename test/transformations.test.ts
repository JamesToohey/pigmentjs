import * as transformations from "../src/transformations";

describe("hex2rgb", () => {
  test("transforms hex to rgb", () => {
    expect(transformations.hex2rgb("#000000")).toEqual({ r: 0, b: 0, g: 0 });
    expect(transformations.hex2rgb("#FFFFFF")).toEqual({
      r: 255,
      b: 255,
      g: 255,
    });
  });
});

describe("rgb2hex", () => {
  test("transforms rgb to hex", () => {
    expect(transformations.rgb2hex({ r: 0, b: 0, g: 0 })).toEqual("#000000");
    expect(transformations.rgb2hex({ r: 20, b: 20, g: 50 })).toEqual("#143214");
  });

  test("uses capital letters", () => {
    expect(transformations.rgb2hex({ r: 255, b: 255, g: 255 })).toEqual(
      "#FFFFFF"
    );
  });
});

describe("rgb2string", () => {
  test("converts rgb to string", () => {
    expect(transformations.rgb2string({ r: 100, g: 250, b: 180 })).toEqual(
      "100, 250, 180"
    );
  });
});

describe("rgb2hsl", () => {
  test("#FFFFFF", () => {
    expect(transformations.rgb2hsl({ r: 255, g: 255, b: 255 })).toEqual({
      h: 0,
      s: 0,
      l: 100,
    });
  });

  test("#000000", () => {
    expect(transformations.rgb2hsl({ r: 0, g: 0, b: 0 })).toEqual({
      h: 0,
      s: 0,
      l: 0,
    });
  });

  test("#F4C542", () => {
    expect(transformations.rgb2hsl({ r: 244, g: 197, b: 66 })).toEqual({
      h: 44.2,
      s: 89,
      l: 60.8,
    });
  });

  test("#F4C", () => {
    expect(transformations.rgb2hsl({ r: 255, g: 68, b: 204 })).toEqual({
      h: 316.4,
      s: 100,
      l: 63.3,
    });
  });

  test("#1B156B", () => {
    expect(transformations.rgb2hsl({ r: 27, g: 21, b: 107 })).toEqual({
      h: 244.2,
      s: 67.2,
      l: 25.1,
    });
  });
});

describe("hsl2rgb", () => {
  test("#FFFFFF", () => {
    expect(transformations.hsl2rgb({ h: 0, s: 0, l: 100 })).toEqual({
      r: 255,
      g: 255,
      b: 255,
    });
  });

  test("#000000", () => {
    expect(transformations.hsl2rgb({ h: 0, s: 0, l: 0 })).toEqual({
      r: 0,
      g: 0,
      b: 0,
    });
  });

  test("#F4C542", () => {
    expect(transformations.hsl2rgb({ h: 44.2, s: 89, l: 60.8 })).toEqual({
      r: 244,
      g: 197,
      b: 66,
    });
  });

  test("#F4C", () => {
    expect(transformations.hsl2rgb({ h: 316.4, s: 100, l: 63.3 })).toEqual({
      r: 255,
      g: 68,
      b: 204,
    });
  });

  test("#1B156B", () => {
    expect(transformations.hsl2rgb({ h: 244.2, s: 67.2, l: 25.1 })).toEqual({
      r: 27,
      g: 21,
      b: 107,
    });
  });
});

describe("hsl2string", () => {
  test("converts hsl to string", () => {
    expect(transformations.hsl2string({ h: 244.2, s: 67.2, l: 25.1 })).toEqual(
      "244.2, 67.2, 25.1"
    );
  });
});

describe("relativeLuminance", () => {
  test("calculate relative luminance", () => {
    expect(
      transformations.relativeLuminance({ r: 250, g: 112, b: 20 })
    ).toEqual(0.319628412973411);
  });
});
