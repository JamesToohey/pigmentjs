export interface RGB {
  readonly r: number;
  readonly g: number;
  readonly b: number;
}

export interface HSL {
  readonly h: number;
  readonly s: number;
  readonly l: number;
}

export type ValidatedHex = string;
export type RGBString = string;
export type HSLString = string;
