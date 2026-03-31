Google Sans — How to self-host and apply

This project uses self-hosted "Google Sans" webfont files so the type is only used on this site (no external Google-hosted fonts are requested).

If you have licensed webfont files for Google Sans, here is how to make the site use them:

1. Add the font files

   Create a folder: `assets/fonts/` in the project root and place your webfont files there. The project already supports the following filenames (TTF/WOFF/WOFF2):

   - `assets/fonts/GoogleSans-Regular.*`  (weight 400)
   - `assets/fonts/GoogleSans-Medium.*`   (weight 500)
   - `assets/fonts/GoogleSans-SemiBold.*` (weight 600)
   - `assets/fonts/GoogleSans-Bold.*`     (weight 700)
   - `assets/fonts/GoogleSans-*.Italic.*` (italic variants)

2. No further edits required

   The project contains `@font-face` rules in `style.css` that reference these paths. When the files exist the browser will load them and the site will display using Google Sans for all text (headings, body, buttons, etc.).

3. Verification

   - Serve the project (do not open files directly) and open the site in a browser.
   - DevTools → Network → filter 'font' to see loaded font resources.
   - Inspect an element and check Computed → font-family to confirm `Google Sans`.

4. Recommendations

   - WOFF2 is the best format for modern browsers. If you only have TTF, the CSS includes TTF fallbacks, but converting to WOFF2 will improve performance.
   - Clear cache or use an incognito window when testing.

License note

Google Sans / Product Sans are proprietary. Only use and redistribute if you have the proper license.
