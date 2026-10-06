# Coach PA Portfolio

Open this folder in Visual Studio Code.

## Edit the website

- `dist/index.html` — page content and links.
- `dist/style.css` — colors, layout, logo styling, and animations.
- `dist/script.js` — navigation and scroll effects.
- `dist/assets/` — portrait photographs and logo.

The latest hero photograph is `dist/assets/hero-portrait.jpg`.

## Preview your edits

Open VS Code's terminal in this folder and run:

```sh
python3 -m http.server 4174 --directory dist
```

Then visit http://localhost:4174 in your browser. Refresh the page after saving your changes. Press Ctrl+C in the terminal to stop the preview.

Alternatively, use the VS Code Live Server extension to open `dist/index.html`.

## Hosted version

https://coach-pa-portfolio.tombaba.chatgpt.site/

Local edits do not automatically update the hosted website. Ask Codex to publish the changes when ready.

The `.openai` folder retains the existing hosting identity. Keep it when editing this project.
