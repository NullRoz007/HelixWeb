# HelixAsm Editor (Solid.js)

A simple Solid.js project for editing and testing HelixAsm assembly programs in the browser.

---

## Features

- Live editor for HelixAsm programs
- Parse, evaluate, and inspect tokens, instructions, expressions, and labels
- Example programs with collapsible reference
- Dynamic loading of HelixAsm Lexer and Parser

---

## Setup

1. Clone the repository with submodules:

```bash
git clone --recurse-submodules <your-repo-url>
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

---

## Production Build

To build for production:

```bash
npm run build
```

- The build output will be in the `.output` folder.

---

## Updating HelixAsm Submodule

If HelixAsm has updates in its GitHub repo:

```bash
cd src/lib/helixasm
git pull origin main
cd ../../../
git add src/lib/helixasm
git commit -m "Update HelixAsm submodule to latest"
```

- This ensures the latest lexer/parser are included.

---

## File Structure

```
helixasm/         # HelixAsm submodule
src/
  components/
    Editor.jsx        # Main editor component
    Reference.jsx     # Assembly reference
public/
package.json
vite.config.js
```

---

## Usage

1. Open the editor in the browser.
2. Write HelixAsm code in the textarea.
3. Click **Parse** to see tokens, instructions, expressions, and labels.
4. Reference section provides instruction format and examples.

---

