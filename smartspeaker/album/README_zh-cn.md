## Introduction

The family photo album is one of the important applications on the speaker, and its main functions are as follows:
- Users can preview pictures by sliding.
- Click on the picture to preview/view the enlarged picture.
- Users can add pictures by scanning the QR code. 

## Project Structure

```cpp
album
    ├─ package.json
    ├─ src
    │  ├─ app.ux
    │  ├─ common
    │  │  ├─ images
    │  │  ├─ js js files
    │  │  │  ├─ constants.js
    │  │  │  ├─ exchange.js
    │  │  │  ├─ http.js
    │  │  │  ├─ promisify.js
    │  │  │  ├─ storage.js
    │  │  │  └─ util.js
    │  │  ├─ logo.png
    │  │  └─ style
    │  │     └─ unocss-vela.css
    │  ├─ components
    │  │  └─ MyButton
    │  │     └─ index.ux
    │  ├─ config-watch.json
    │  ├─ i18n languages
    │  │  ├─ defaults.json
    │  │  ├─ en.json
    │  │  └─ zh-CN.json
    │  ├─ manifest.json
    │  └─ pages
    │     ├─ empty
    │     │  └─ index.ux page not open screenSaver
    │     ├─ home
    │     │  └─ index.ux home page
    │     ├─ manual
    │     │  └─ index.ux help page
    │     ├─ preview
    │     │  └─ index.ux preview page
    │     ├─ screenSaver
    │     │  └─ index.ux screenSaver page
    │     └─ upload
    │        └─ index.ux upload image page
```

## Quick Start

### 1. develop

```
npm install
npm run start
```

### 2. build

```
npm run build
npm run release
```

### 3. test

```
npm run watch
```
### 4. Code Normalization Configuration

- Code standardization can assist developers in performing code verification, formatting, and commit message verification before git commit.

- Prerequisite for use: It is necessary to associate with git first. 

macOS or Linux
```
sh husky.sh
```

windows
```
./husky.sh
```

