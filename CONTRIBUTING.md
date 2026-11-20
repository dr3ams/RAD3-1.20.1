# Contributing

## Development setup

KubeJS scripts are formatted automatically with [Prettier](https://prettier.io/) before each commit.

1. Install [Node.js](https://nodejs.org/) (20 or newer) and [just](https://just.systems/).

   On Windows, using WinGet:

   ```powershell
   winget install --id OpenJS.NodeJS.LTS --exact
   winget install --id Casey.Just --exact
   winget install --id Git.Git --exact
   ```

   Reopen your terminal afterwards so `node`, `npm` and `just` are available.

2. Run `just setup` once after cloning. This installs Prettier, Husky and lint-staged, and activates the git hook.

After that, any staged `kubejs/**/*.js`, `kubejs/**/*.json` or `kubejs/**/*.mcmeta` file is formatted on commit. Mod-generated files under `config/` are intentionally excluded. Use `just format` to format everything, or `just check` to check formatting without modifying files.
