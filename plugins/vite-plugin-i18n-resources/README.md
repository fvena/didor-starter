<h1 align="center">vite-plugin-i18n-resources</h1>
<p align="center">Vite plugin to load i18n translation message files</p>

In small applications, have single json file per language may be sufficient, but if your app grows, you should split it in multiple files per language, to improve your structure.

You may even want to move these files to different locations.

This plugin finds all language files within a path and groups them by language so that you can set them on your vue-i18n instance.

## Install

```bash
yarn add --dev @didor/vite-plugin-i18n-resources

npm i -D @didor/vite-plugin-i18n-resources
```

## Getting Started

### Config plugin in `vite.config.js`.

Import this plugin and set the path of translation files.

```js
import i18nResources from '@didor/vite-plugin-i18n-resources';

export default {
  plugins: [
    i18nResources({
      path: 'src/locales',
    }),
  ]
}
```

### Import translation message and set them to your vue-i18n instance

```js
import { createI18n } from "vue-i18n";
import { messages } from "vite-i18n-resources";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});

// Only if you want hot module replacement when translation message file change
if (import.meta.hot) {
  import.meta.hot.on('locales-update', (data) => {
    Object.keys(data).forEach(lang => {
      i18n.global.setLocaleMessage(lang, data[lang]);
    });
  })
}
```

### Message Format Syntax

To avoid namespace collisions when group all translations files by language, each file is stored within a section with its name:

**home.en.json**

```json
{
  "title": "Home Page"
}
```

**about.en.json**

```json
{
  "title": "About Page"
}
```

The plugin will generate the following object:

```js
{
  en: {
    home: {
      title: 'Home Page'
    },
    about: {
      title: 'About Page'
    }
  },
  ...
}
```

Now, you can use a translation message by:

```html
<template>
  <h1>{{ $t("home.title") }}</h1>
  ...
</template>
```

## Setup Examples

In the examples folder you can see several complete examples with different structures.

[All translation files in the same folder](examples/locales_folder/)

    src
    ├── ...
    ├── locales
    │   ├── about.en.json
    │   ├── about.es.json
    │   ├── about.fr.json
    │   ├── home.en.json
    │   ├── home.es.json
    │   ├── home.fr.json
    │   └── ...
    └── ...

[Translation Files split by scopes](examples/scopes/)

    src
    ├── ...
    ├── pages
    │   ├── about
    │   │   ├── ...
    │   │   ├── locales
    │   │   │   ├── about.en.json
    │   │   │   ├── about.es.json
    │   │   │   └── about.fr.json
    │   │   └── ...
    │   ├── home
    │   │   ├── ...
    │   │   ├── locales
    │   │   │   ├── home.en.json
    │   │   │   ├── home.es.json
    │   │   │   └── home.fr.json
    │   │   └── ...
    │   └── ...
    └── ...

```js
import i18nResources from '@didor/vite-plugin-i18n-resources';

export default {
  plugins: [
    i18nResources({
      path: 'src/pages',
    }),
  ]
}
```

## Todos

* Better docs
* Basic test coverage