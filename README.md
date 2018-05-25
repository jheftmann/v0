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

## Utilities and Layouting
- [Layout](https://getbootstrap.com/docs/4.1/layout/overview/)
- [Utilities](https://getbootstrap.com/docs/4.1/utilities/borders/)
- We don’t use any of Bootstrap’s Compontents.

### Differences
- Use `@include sm { ... }` but Bootstrap `@include media-breakpoint-up(xl) { ... }` is also supported


## Deprecated
- positioning – `u-relative`, etc.


## To do
+ [x] Update bootstrap
+ [x] CSS grid and flexbox helpers
+ [x] Typography updates
+ [x] Variables updates
+ [ ] Helpers
+ [ ] Variables as classes e.g. `$letter-sm` > `.letter-sm {}`
