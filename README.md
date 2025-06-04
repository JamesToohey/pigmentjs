# PigmentJS :pig_nose: :candy:

PigmentJS is a very, very simple zero-dependency colour library built for web developers to easily create beautiful, legible, and accessible colour palettes.

### Quick Start

#### Install

`npm i --save pigmentjs`

#### Use Pigment

Instantiate PigmentJS to generate a random colour, or use a 3 or 6 character Hex string.

**JavaScript:**

```javascript
// Require
const { Pigment } = require("pigmentjs");
// OR
// Import
import Pigment from "pigmentjs";

Pigment(); // Random colour
Pigment("#FFFFFF");
Pigment("#F3C");
```

**TypeScript:**

```typescript
import Pigment from "pigmentjs";

const pigment: Pigment = Pigment("#22FF09");
const complementary: string = pigment.complementary().hex; // '#E609FF'
const triad: [Pigment, Pigment, Pigment] = pigment.triad();
```

Create colours

```javascript
const pigment = Pigment("#22FF09");
const complementary = pigment.complementary().hex; // '#E609FF'
const triad = pigment.triad(); // [Pigment(), Pigment(), Pigment()];
```

## Pigment()

### API

#### Getters

`Pigment().rgb`

```javascript
Pigment().rgb; // [239, 56, 230]
```

`Pigment().irgb`

Returns RGB values as an object with `r`, `g`, `b` properties.

```javascript
Pigment().irgb; // {r: 239, g: 56, b: 230}
```

`Pigment().rgbString`

```javascript
Pigment().rgbString; // '239, 56, 230'
```

`Pigment().hex`

```javascript
Pigment().hex; // '#EF38E6'
```

`Pigment().hsl`

```javascript
Pigment().hsl; // [302, 85.1, 57.8]
```

`Pigment().ihsl`

Returns HSL values as an object with `h`, `s`, `l` properties.

```javascript
Pigment().ihsl; // {h: 302, s: 85.1, l: 57.8}
```

`Pigment().hslString`

```javascript
Pigment().hslString; // '302, 85.1, 57.8'
```

`Pigment().hue`

```javascript
Pigment().hue; // 302
```

`Pigment().saturation`

```javascript
Pigment().saturation; // 85.1
```

`Pigment().lightness`

```javascript
Pigment().lightness; // 57.8
```

`Pigment().relativeLuminance`

```javascript
Pigment().relativeLuminance; // 0.56
```

`Pigment().textColourHex`

Returns black or white, whichever will have a higher contrast relative to the
primary colour.

```javascript
Pigment().textColourHex; // '#FFFFFF'
```

#### Methods

Always returns a new Pigment instance or an array of Pigment instances.

---

`Pigment().complementary()`

Converts colour to HSL, rotates Hue by 180 degrees.

```javascript
Pigment().complementary(); // Pigment() (complementary colour)
```

---

`Pigment().triad()`

Converts colour to HSL, rotates Hue by 120 degrees either side.

```javascript
const pigment = Pigment();
pigment.triad(); // [colour (itself), Pigment(), Pigment()]
```

---

`Pigment().monochrome(5)`

Returns an array of colours with a monochromatic relationship to the input colour (i.e. an almost identical Hue).

Params

Size [Int] (required)

- How many new colours to return

```javascript
const pigment = Pigment();
pigment.monochrome(3); // [Pigment(), Pigment(), Pigment()]
```

---

`Pigment().shades(5)`

Returns an array of colours with black mixed progressively.

Params

Size [Int] (required)

- How many new colours to return

```javascript
const pigment = Pigment();
pigment.shades(3); // [Pigment(), Pigment(), Pigment()]
```
