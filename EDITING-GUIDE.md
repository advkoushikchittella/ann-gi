# Editing your anniversary gift

## Change all visible text

Open `gift-config.js`. The `ui` object near the bottom controls the website's fixed interface text, including section headings, buttons, labels, accessibility labels, countdown units, and fallback messages. Edit the text between quotes and keep the commas and quotation marks.

The other fields in this file control the personal content: names, dates, main letter, reasons, surprise message, location, story captions, and “open when” notes. For example:

```js
ui: {
  pageTitle: "Our Anniversary",
  storyHeading: "Our favourite memories",
  continueButton: "Next page"
}
```

The real file already contains the full `ui` object. Edit its existing values rather than replacing the entire object with this short example.

## Add Canva-edited photos

1. Create or edit the image in Canva.
2. Export as JPG or PNG.
3. Put the image in `assets/images/`.
4. In `gift-config.js`, update the matching `photo` path in the `story` list. Example: `photo: "./assets/images/01.jpg"`.
5. Keep the image path and filename exactly the same, including capitalization.

The starter paths are `01.jpg` through `09.jpg`. You can use PNG instead by changing the relevant path to `.png`.

## Preview and publish

For local preview, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`. To publish, upload the contents of this folder to the root of your GitHub repository and enable GitHub Pages from `main` / root.

## Important editing notes

- Dates should include a timezone, for example `2026-10-28T00:00:00+05:30`.
- Keep JavaScript strings in quotes and preserve commas between fields.
- `index.html` controls layout and behavior. Most ordinary text should be changed in `gift-config.js`.
- GitHub Pages sites are public. Only upload photos and personal details you are comfortable making public.
