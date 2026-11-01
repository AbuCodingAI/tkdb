import { SITE } from '../config';

// Served at /ads.txt. Contains the AdSense line only once AdSense is enabled with a valid client id.
export function GET() {
  const ads = SITE.integrations.adsense;
  const m = /^ca-(pub-\d+)$/.exec(ads.clientId);
  const body = ads.enabled && m
    ? `google.com, ${m[1]}, DIRECT, f08c47fec0942fa0\n`
    : '# No advertising partners are authorized yet.\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
