# React native application for Clind

## Requirements

- **Expo CLI.** — `npm install -g expo-cli`
- **Expo app.** — Available on Google Play or Apple App Store
- **Yarn.** — `npm i -g yarn` or get it at https://yarnpkg.com/en/

**Recommended IDE**

VSCode with plugins :

- Prettier (also configure "editor.formatOnSave": true in config)

## Install and boot

Simply run `yarn` inside the root folder.
Run `expo start` this will open a webpage with a QRCODE to flash within the Expo client app.

You can also run on emulators on the machine using `yarn run android` or `yarn run ios`.

You'll need to be on the same network as the device if using LAN / Local mode (see in the webpage).

**Enjoy programming**

## On git commit

[Husky](https://www.npmjs.com/package/husky) will be responsible to launch some linting tests and typescripts check before commit on staged files.
