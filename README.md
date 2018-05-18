# XXIX

## Developing
[The site](http://xxix.smallvictories.tk) is compiled with the [Small Victories gem](http://github.com/xxix/smallvictories-gem).

The index file is compiled from `_sv/index.liquid` and compiled into the root as
`index.html`. Liquid partials are included from `_sv/templates`.

Sass is compiled from `_sv/application.scss` and compiled into the root as
`application.css`. Sass partials are sourced from `_sv/_partials`.

Javascript is compiled from `_sv/application.js` and compiled into the root as
`application.js`.

Third party libraries are included using [Sprockets](https://github.com/rails/sprockets).

## Getting Started
1. Install the [Small Victories gem](http://github.com/xxix/smallvictories-gem)
2. Clone the repo
3. Cd into the project folder and run `sv watch`
4. Open `index.html`
5. Edit files in `_sv`
6. Check your Small Victories folder path in `_sv_config.yml`
7. Run `sv deploy` to copy files/folders to your SV site

## Developing SV themes locally
1. View and copy the page source from the theme you want to Edit
2. Paste into a new `.liquid` template file
3. Remove `<head>` and `<html>`. Replace `<body>` with `div` and keep the classes
4. Run SV to generate HTML and open in a browser
5. Edit!

## Updating project metadata
All project metadata is entered as structred data in `_sv/project-info.js` and read out via JavaScript.

To add or update project metadata, run SV and make updates to this file.

## Styles

### Media sizes
`.desk`
`.tablet`
`.mobile`

#### Projects page
`.xs`
`.sm`
`.md`
`.lg`
`.xl`
`.cover`
`.hasshadow`
`.noshadow`

#### Project detail page
`.thumb`
`.quarter`
`.third`
`.half`
`.full`
`.cover`

## Changelog
v0 - On branch old-master
v1 - LIVE
v1.5 – New features
