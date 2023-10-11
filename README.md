# MUA Studio

## [Documentation](docs/index.md)

## Install package manager

Make sure to install pnpm package manager:

using npm

```bash
# pnpm
npm install -g pnpm
```

using homebrew

```bash
# pnpm
brew install pnpm
```

### Solving problem with running script on windows

[Resolved: Running Scripts Is Disabled on This System](https://www.partitionwizard.com/clone-disk/running-scripts-is-disabled-on-this-system.html)

## Setup

Upgrade pnpm and install current dependencies

```bash
pnpm lift
```

## Development Server

Start the development server on <http://localhost:3000>

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
