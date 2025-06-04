import { formatHex, validateHex } from "./validations";
import { randomHex } from "./helpers";
import { RGB, HSL, RGBString } from "./types";
import {
  hex2rgb,
  rgb2hex,
  rgb2string,
  rgb2hsl,
  hsl2string,
  hsl2rgb,
  relativeLuminance,
  rgb2array,
  hsl2array,
} from "./transformations";

export class Pigment {
  readonly hex: string;

  readonly rgb: [number, number, number];
  readonly irgb: RGB;
  readonly rgbString: RGBString;

  readonly hsl: [number, number, number];
  readonly ihsl: HSL;

  readonly hue: number;
  readonly saturation: number;
  readonly lightness: number;
  readonly hslString: string;
  readonly relativeLuminance: number;
  readonly textColourHex: string;

  constructor(hex?: string) {
    this.hex = formatHex(validateHex(hex || randomHex()));

    // Set these once, Pigment is immutable
    this.rgb = rgb2array(hex2rgb(this.hex));
    this.irgb = hex2rgb(this.hex); // internal rgb to avoid breaking API changes
    this.rgbString = rgb2string(this.irgb);

    this.hsl = hsl2array(rgb2hsl(this.irgb));
    this.ihsl = rgb2hsl(this.irgb); // internal hsl to avoid breaking API changes

    this.hue = this.ihsl.h;
    this.saturation = this.ihsl.s;
    this.lightness = this.ihsl.l;

    this.hslString = hsl2string(this.ihsl);
    this.relativeLuminance = relativeLuminance(this.irgb);
    this.textColourHex = this._textColourHex(this.relativeLuminance);
  }

  /**
   * Convert to HSL, rotate hue 180 degrees, convert
   * back to RGB and instantiate pigmentjs with hex
   */
  complementary(): Pigment {
    // eslint-disable-next-line prefer-const
    let { h, s, l } = this.ihsl;

    h += 180;
    if (h > 360) {
      h -= 360;
    }

    const hex = rgb2hex(hsl2rgb({ h, s, l }));
    return new Pigment(hex);
  }

  /**
   * Convert to HSL, rotate hue 120 degrees (twice), convert
   * back to RGB and instantiate pigmentjs with hex
   */
  triad(): [Pigment, Pigment, Pigment] {
    // eslint-disable-next-line prefer-const
    let { h, s, l } = this.ihsl;

    h += 120;
    if (h > 360) {
      h -= 360;
    }

    const Pigment2 = new Pigment(rgb2hex(hsl2rgb({ h, s, l })));

    h += 120;
    if (h > 360) {
      h -= 360;
    }

    const Pigment3 = new Pigment(rgb2hex(hsl2rgb({ h, s, l })));

    return [this, Pigment2, Pigment3];
  }

  monochrome(size: number): Pigment[] {
    const satUnit = 1 / (size + 1);
    const percentages = [];
    for (let steps = size; steps > 0; steps -= 1) {
      percentages.push(steps * satUnit);
    }
    percentages.sort((a, b) => a - b);

    return percentages.map((saturation) => {
      saturation = saturation * 100;
      return new Pigment(
        rgb2hex(hsl2rgb({ h: this.hue, s: saturation, l: this.lightness }))
      );
    });
  }

  shades(size: number): Pigment[] {
    const shadeUnit = 1 / (size + 1);
    const percentages = [];
    for (let steps = size; steps > 0; steps -= 1) {
      percentages.push(steps * shadeUnit);
    }
    percentages.sort((a, b) => a - b);

    return percentages.map((shade) => {
      const { r, g, b } = this.irgb;
      return new Pigment(
        rgb2hex({
          r: Math.round(r - r * shade),
          g: Math.round(g - g * shade),
          b: Math.round(b - b * shade),
        })
      );
    });
  }

  /**
   * Return either white or black depending on the relative luminance
   * of the primary colour. Can be used to ensure text is legible
   *
   * @returns {String} either '#FFFFFF' or '#000000'
   */
  _textColourHex(relativeLuminance: number): string {
    return relativeLuminance < 0.5 ? "#FFFFFF" : "#000000";
  }
}

export default Pigment;
