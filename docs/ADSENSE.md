# AdSense go-live checklist

The site is prepared. Nothing loads until you switch it on.

When AdSense gives you a publisher ID (`ca-pub-1234567890123456`):

1. In `website/src/config.ts`, set `integrations.adsense.enabled` to `true` and `clientId` to your ID.
2. Rebuild and push. This adds the AdSense script and the `google-adsense-account` tag to every page, serves `/ads.txt` with your line, and changes the footer to "Ads by Google".
3. After approval, create a **display (banner)** ad unit in AdSense. Put its numeric slot ID in `integrations.adsense.slots.postBottom`. It then shows below every post. Do not create video ad units.
4. In AdSense, turn off video ad formats in Auto ads, if Auto ads are on.
5. Update `src/content/pages/privacy.md`: ads are active, Google may use cookies, and link Google's ad policy. Replace the cookie notice with a consent message. AdSense's free "Privacy & messaging" tool provides one for EU/UK visitors.
6. Before applying: at least 30 articles and 5 Linux videos, plus the About, Contact, Privacy and Terms pages (done).
