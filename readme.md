# React native boilerplate

This a project starter kit for web developers who want to get into native app development quickly and get a solid project structure right out of the gate.

The kit has basic implementation of server-side state handling using react-query, unit and e2e testing, navigation, push notifications and more.

There's a sample TODO list app pre-built out of the box to demonstrate how everything works together.

## Features

- Eslint
- Prettier
- TypeScript
- React Query
- i18n Translations
- React navigation and routing
- Jest unit tests
- Dark/light theme
- Expo Push notifications
- JSON Server Mock API

## Getting started

#### Prerequisites

- Node & npm
- Android studio
- Make sure your system supports virtualization
- Android emulator
- Ngrok

#### Running locally

Install dependancies

    npm i

Start dev server

    npm start

Open android emulator by clicking 'a' in the console

Start ngrok proxy for JSON API

    ngrok http 3000

Start mock-api

    npm run mock-api

#### Running e2e tests locally

Open
http://localhost:19002/
Click on run in web browser

Start cypress

    npm run e2e-test

To run cypress without UI

    npm run e2e-test:silent

#### Running unit tests locally

Start jest

    npm run unit-test
