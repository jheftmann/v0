# Ronan

### Local development
Ronan is built wiht the Small Victories gem, which compiles JS/SCSS. It also lets you run a local server to handle the `liquid` templating language.

1. Install the Small Victories gem
```gem install smallvictories```
2. Run `sv watch`
3. Run `sv server`
4. Open browser to `localhost:2345`

### Hacking
You want to write your code inside the `_sv` folder. Liquid, SCSS, and JS files will compile to the top-level directory (unless otherwise set in `_sv_config.yml`).

#### Components
- [Stencil](https://github.com/jheftmann/stencil)
