# Clearly Drawn

Public site for the **Clearly Drawn** TikTok developer app: the landing page, the Terms of Service
and the Privacy Policy that the app's review submission points at, plus the real Login Kit
integration surface used to connect a TikTok account.

Live at: https://snapwave333.github.io/clearly-drawn/

## What is here

| File | Purpose |
| --- | --- |
| `index.html` | Product page, and the integration console: connect a TikTok account (Login Kit) and preview the exact Content Posting API request the service sends |
| `callback.html` | The OAuth redirect target registered in the app. Verifies `state`, shows the code was received, explains the server-side exchange |
| `terms.html` | Terms of Service |
| `privacy.html` | Privacy Policy |
| `assets/config.js` | Client key, redirect URI and the scopes requested. The only file to edit when configuring a new app |
| `assets/style.css` | Site styling |

## Configuration

`assets/config.js` holds the three public values the integration needs:

```js
window.CLEARLY_DRAWN_CONFIG = {
  clientKey: "PASTE_TIKTOK_CLIENT_KEY_HERE",
  redirectUri: "https://snapwave333.github.io/clearly-drawn/callback.html",
  scopes: ["user.info.basic", "user.info.profile", "user.info.stats",
           "video.list", "video.upload", "video.publish"]
};
```

The redirect URI must match, character for character, the one registered in the TikTok app under
Login Kit. The client key is an OAuth client identifier and is safe to publish; **never** put the
client secret or a refresh token in this repository.

## Local preview

Any static server works, since nothing here is built:

```bash
npx serve .
```

## Deploying

Pushes to `main` are published by GitHub Pages automatically once Pages is enabled for the
repository. The `.nojekyll` file keeps Pages from running Jekyll over these files.
