# v0
Start a new site quickly and easily.

## Getting started
1. Install the SV gem
2. Run `sv watch`
3. Compiles to `/build`
4. Configure `_sv_config.yml`
5. Configure `application.js` to import the JS components you need
6. Configure `application.scss` with project variables and imports for the SCSS components you need
2. configure `fonts.scss`

## Transporting v0
How would you install v0 in an existing project?

## Typography
- philosophy
- workflow
- usage

## Utilities and Layouting
v0 uses Bootstrap 4’s Layout and Utilities tools:

- [Bootstrap—Layout](https://getbootstrap.com/docs/4.1/layout/overview/)
- [Bootstrap—Utilities](https://getbootstrap.com/docs/4.1/utilities/borders/)

## Differences
- Use `@include sm { ... }` but Bootstrap `@include media-breakpoint-up(xl) { ... }` is also supported

## Deprecated
These are still supported but should be phased out in favor of Bootstrap helpers:

- positioning – `u-relative`, etc.
- display – `u-block`, etc.
- spacing – `u-sm-pvlg`, etc.

## To do
+ [x] Update bootstrap
+ [x] CSS grid and flexbox helpers
+ [x] Typography updates
+ [x] Variables updates
+ [x] Helpers
+ [x] Variables as classes e.g. `$letter-sm` > `.letter-sm {}`
