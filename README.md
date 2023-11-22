# Safe App Vite SWC TypeScript Template

## Overview

This template is designed to offer a streamlined and modern approach to
[Safe Wallet App](https://docs.safe.global/getting-started/readme) development.
It's an alternative to the original Safe App template which relies on
`create-react-app`, a tool that is not actively maintained as of late.

## Key Features

- **TypeScript and React**: Harness the power of TypeScript and React for robust
  app development.
- **Vite and SWC**: Benefit from fast builds and compilation with Vite and SWC.
- **Tailwind CSS**: Style your app efficiently with Tailwind CSS.
- **Safe integration**: Includes
  [`@safe-global/safe-apps-react-sdk`](https://github.com/safe-global/safe-apps-sdk/tree/main/packages/safe-apps-react-sdk),
  [`@safe-global/safe-apps-sdk`](https://github.com/safe-global/safe-apps-sdk/tree/main)
  and `manifest.json` for seamless integration with the Safe Wallet.

## Getting Started

To get started with this template, clone the repository and install the
dependencies:

```bash
git clone https://github.com/isSerge/safe-vite-swc-ts-template [project-name]
cd [project-name]
npm install
```

Start the development server:

```bash
npm run dev
```

Once dev server is up, you can follow
[these steps](https://github.com/safe-global/safe-apps-sdk/blob/main/packages/cra-template-safe-app/template/README.md)
to connect your app with Safe Wallet. Make sure to use `http://localhost:5173/`
instead of `http://localhost:3000/`

## Recommended dependencies

- [`ethers`](https://github.com/ethers-io/ethers.js) (Library for interacting
  with Ethereum)
- [`web3`](https://github.com/ethereum/web3.js/) (Library for interacting with
  Ethereum)
- [`viem`](https://github.com/wagmi-dev/viem) (Typerscript library for
  interacting with Ethereum)
