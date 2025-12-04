# HelixAsm Editor (Solid.js)

A simple Solid.js project for editing and testing HelixAsm assembly programs in the browser.

![Web UI Showcase](https://github.com/NullRoz007/HelixWeb/blob/main/images/web.png)

## Features

- Live editor for HelixAsm programs
- Parse, evaluate, and inspect tokens, instructions, expressions, and labels
- Example programs with collapsible reference
- Dynamic loading of HelixAsm Lexer and Parser

## Setup

1. Clone the repository:

```bash
git clone https://github.com/NullRoz007/HelixWeb
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

- The app should be available at `http://localhost:3000`.


## Production Build

To build for production:

```bash
npm run build
```

- The build output will be in the `.output` folder.

## Usage

1. Open the editor in the browser.
2. Write HelixAsm code in the left hand pane.
3. Click **Parse** to see tokens, instructions, expressions, and labels.
4. Reference section provides instruction format and examples.


