// Clearly Drawn — site configuration.
// Fill in the values from your TikTok app on developers.tiktok.com after the app is approved.
// NOTE: the TikTok client key is an OAuth client identifier and is not a secret; it is safe in a
// public page. Never put the client secret or a refresh token in this file.
window.CLEARLY_DRAWN_CONFIG = {
  clientKey: "PASTE_TIKTOK_CLIENT_KEY_HERE",
  redirectUri: "https://snapwave333.github.io/clearly-drawn/callback.html",
  scopes: [
    "user.info.basic",
    "user.info.profile",
    "user.info.stats",
    "video.list",
    "video.upload",
    "video.publish"
  ]
};
