const isValidHex = (hex: string): boolean =>
    /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);

const validateHex = (hex: string): ValidatedHex => {
    if (isValidHex(hex)) {
        return hex as ValidatedHex;
    }
    throw Error("Invalid hex string format.");
};

const formatHex = (hex: string) => {
    const fHex: string = hex[0] === "#" ? hex : `#${hex}`;

    if (fHex.length === 7) {
        return fHex.toUpperCase();
    } else if (fHex.length === 4) {
        return `#${fHex[1]}${fHex[1]}${fHex[2]}${fHex[2]}${fHex[3]}${fHex[3]}`;
    } else {
        throw Error("Invalid hex string format.");
    }
};

export {isValidHex, validateHex, formatHex};
