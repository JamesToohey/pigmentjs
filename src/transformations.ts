import {RGB, HSL, ValidatedHex, RGBString, HSLString} from './types';

const hex2rgb = (hex: ValidatedHex): RGB => {
    return {
        r: parseInt(hex.substring(1, 3), 16),
        g: parseInt(hex.substring(3, 5), 16),
        b: parseInt(hex.substring(5, 7), 16),
    };
};

const rgb2hex = (rgb: RGB): string => {
    let rs: string = Number(rgb.r).toString(16);
    let gs: string = Number(rgb.g).toString(16);
    let bs: string = Number(rgb.b).toString(16);

    if (rs.length === 1) {
        rs = `0${rs}`;
    }
    if (gs.length === 1) {
        gs = `0${gs}`;
    }
    if (bs.length === 1) {
        bs = `0${bs}`;
    }

    return `#${rs}${gs}${bs}`.toUpperCase();
};

const rgb2string = (rgb: RGB): RGBString => {
    return `${rgb.r}, ${rgb.g}, ${rgb.b}`;
};

const rgb2hsl = (rgb: RGB): HSL => {
    let hue: number;
    let sat: number;
    let light: number;
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    light = ((min + max) / 2);

    if (light < 1) {
        sat = (max - min) / (1 - Math.abs((2 * light) - 1)) * 100;
    } else {
        sat = 0;
    }

    switch (max) {
        case r:
            hue = ((g - b) / (max - min)) * 60;
            break;
        case g:
            hue = (2.0 + (b - r) / (max - min)) * 60;
            break;
        case b:
            hue = (4.0 + (r - g) / (max - min)) * 60;
            break;
        default:
            throw Error('Error processing rgb2hsl');
    }

    if (hue < 0) {
        hue += 360;
    }

    hue = Math.round(hue * 10) / 10;
    sat = Math.round(sat * 10) / 10;
    light = Math.round((light * 100) * 10) / 10;

    return {
        h: hue || 0,
        s: sat || 0,
        l: light,
    };
};

const hsl2rgb = (hsl: HSL): RGB => {
    const hue = hsl.h
    const sat = hsl.s / 100;
    const light = hsl.l / 100;

    const chroma = (1 - Math.abs(2 * light - 1)) * sat;
    const x = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));
    const m = light - chroma / 2;

    let r = 0;
    let g = 0;
    let b = 0;

    if (0 <= hue && hue < 60) {
        r = chroma; g = x; b = 0;
    } else if (60 <= hue && hue < 120) {
        r = x; g = chroma; b = 0;
    } else if (120 <= hue && hue < 180) {
        r = 0; g = chroma; b = x;
    } else if (180 <= hue && hue < 240) {
        r = 0; g = x; b = chroma;
    } else if (240 <= hue && hue < 300) {
        r = x; g = 0; b = chroma;
    } else if (300 <= hue && hue <= 360) {
        r = chroma; g = 0; b = x;
    }

    return {
        r: Math.abs(Math.round((r + m) * 255)),
        g: Math.abs(Math.round((g + m) * 255)),
        b: Math.abs(Math.round((b + m) * 255)),
    };
}

const hsl2string = (hsl: HSL): HSLString => {
    return `${hsl.h}, ${hsl.s}, ${hsl.l}`;
};

const relativeLuminance = (rgb: RGB): number => {
    const lowCoefficient = 1 / 12.92;
    const rsRGB = rgb.r / 255;
    const gsRGB = rgb.g / 255;
    const bsRGB = rgb.b / 255;

    const r = rsRGB <= 0.03928 ? rsRGB * lowCoefficient : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
    const g = gsRGB <= 0.03928 ? gsRGB * lowCoefficient : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
    const b = bsRGB <= 0.03928 ? bsRGB * lowCoefficient : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

    return (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
};


const hsl2array = (hsl: HSL): [number, number, number] => [hsl.h, hsl.s, hsl.l];
const rgb2array = (rgb: RGB): [number, number, number] => [rgb.r, rgb.g, rgb.b];

export {
    hex2rgb,
    rgb2hex,
    rgb2string,
    rgb2hsl,
    hsl2string,
    hsl2rgb,
    relativeLuminance,
    hsl2array,
    rgb2array,
};
