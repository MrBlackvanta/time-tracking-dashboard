# Time tracking dashboard

My solution to the [Time tracking dashboard](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://time-tracking-dashboard.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/time-tracking-dashboard

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

### Colour

Two pairings fail and had to move. Neither qualifies for the large-text allowance: the tabs
are 18px Regular and the label is 15px.

|                        | design    | built     | contrast     |
| ---------------------- | --------- | --------- | ------------ |
| Inactive timeframe tab | `#7078C9` | `#7D85CE` | 3.84 to 4.51 |
| "Report for"           | `#BBC0FF` | `#DADDFF` | 3.46 to 4.51 |

Everything else passes as drawn, so nothing else moved.

Colours come from the design file rather than the style guide, which rounds every one of the
eleven a point or two off. The guide also lists none of the seven colours the design actually
needs beyond that, including the six darker tints the activity artwork is painted in.

### Type

Every text node is set to 100% line height, which is Figma for `normal`, so the type tokens
ship `line-height: normal` rather than a number. Rubik's own normal is 1.185, confirmed two
ways: the two-line name box measures 95px at 40px type, and `next/font`'s generated fallback
carries the same metrics as overrides, which is why swapping the webfont in shifts nothing.

Letter-spacing is zero on every node, so there are no tracking tokens.

**The report is mine, not Jeremy Robson's**, so the avatar and the name are my own. That name
doesn't fit the design's type scale. `Abdelrhman` is one unbreakable ten-character word
measuring 221px at the design's 40px against the 191px the desktop panel leaves, so the
desktop name ships at 34px, the largest that fits. It still wraps to two lines as the design
draws it, and the purple card comes out 341px tall rather than 355.

At the small end it needs help too. At 24px it wraps to two lines from 375 down, but by 320
the word alone is 132.6px against 124px of room beside the avatar, and being unbreakable it
pushed the page into horizontal scroll. So the token is `min(1.5rem, 6.5vw)`: exactly 24px
from 369 up, easing to 20.8px at 320.

### Layout

**The design has no tablet frame**, so the three layouts are deliberate rather than a
stretched mobile: one column below 768, two from 768, and the design's four-column grid from 1158.

**That last breakpoint is 72.375rem, not Tailwind's 64rem.** 1158 is the design's 1110 plus
its own gutters, so the desktop columns are exactly the 255px the design draws from the moment
the layout applies. Switching at 1024 gives 221.5px columns, and the Monthly `103hrs` measures
169.2px of ink against the 161.5px those columns leave. Worth knowing when testing: Chrome
evaluates media queries against the viewport minus the scrollbar, and the two-column layout
scrolls, so in a scrollbar-ful window the switch lands at 1174.

**The activity colour is a band, not the card's background.** The design draws it as a shape
that stops short of the bottom, where the dark body has covered it anyway. Painting it as the
card's background puts two identical radii on the same bottom corners, and the outer colour
bleeds through the inner one's antialiased edge as a hairline the design doesn't have. The
mobile frame does stack them, which Figma renders cleanly and a browser doesn't.

**The activity artwork is placed by fitting, not by reading the file.** Four of the six shapes
are rotated, so the file reports their untransformed bounds. Rasterising each SVG and
searching scale and offset for best overlap against the painted JPG recovers natural size with
a per-card offset.

### Behaviour

**Switching timeframe uses no JavaScript at all.** It's a native radio group with a visually
hidden legend, `peer-checked` for the label styling, and one `:has()` rule that hides the two
timeframes that aren't selected. Written as "hide the others" rather than "show the one", so a
browser without `:has()` shows all three values instead of none.

**The hours figures count up, which the design doesn't specify.** Each animates from zero on
load and tweens between values when the timeframe changes. It needs no JS either: `--hours` is
a registered `@property` integer so it interpolates, and the number is a counter rendered
through `::before`. Both dropped under `prefers-reduced-motion`.

Generated content can't be selected or found with Ctrl+F, so the animated figure is
`aria-hidden` and the real value ships as visually hidden text on the previous-period line,
which reads as "32hrs. Last Week - 36hrs".

### Reading the design file

**The `Desktop - Active` frame stacks a discarded variant under every card**, all of it
flagged visible: lighter strips, blown-up artwork, Black titles, truncated values. It's not
the hover state. The card strips are pixel-identical between the design and active-states
exports, so the real states are the three the JPG shows.

The design's mobile Play card reads "Last Week - 36hrs", which is the Work card's value pasted
in. `data.json` says 8, and that's what ships.

The card menu control is 24x24 for WCAG 2.5.8, which puts the glyph 1.5px in from the design's
inset. The Work card's glyph is drawn narrower than the other five; all six ship the same.

**No scroll reveals.** At 1440 the document is 1024px in a 1024px viewport.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
