# Spend Tracker redirect page

Enable Banking production apps need an **https** redirect URL, but Spend Tracker runs on
`http://localhost:47321`. These static files are hosted on GitHub Pages:

- `callback/` — the redirect URL registered at Enable Banking. It forwards the browser straight to
  `http://localhost:47321/callback?…` (fixed destination; nothing stored).
- `index.html` — the privacy & terms note Enable Banking asks for.

The one-time authorization code passes through this page's URL, so GitHub's servers see it. It is
single-use, expires in minutes, and can only be redeemed with the app's private key (kept in the
macOS Keychain); Spend Tracker also requires its own single-use `state` value.

Setup: a public GitHub repository with these files at its root, Settings → Pages → "Deploy from a
branch" → `main` / `(root)`. Register `https://<user>.github.io/<repo>/callback/` (with the trailing
slash) at Enable Banking and enter the same URL in `npm run setup`.
