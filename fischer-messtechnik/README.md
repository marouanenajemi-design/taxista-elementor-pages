# Fischer Messtechnik – Homepage-Prototyp

Redesign proposal for the homepage of https://www.fischer-messtechnik.de/, built as a
static, dependency-free prototype (semantic HTML, one CSS file, one small JS file).

## Running it locally

```bash
cd fischer-messtechnik
npm start              # → http://localhost:8080  (uses npx http-server)
# or, without Node:
python3 -m http.server 8080
```

Open it through a local server rather than by double-clicking `index.html`, because
browsers block the self-hosted web fonts under `file://`.

## Structure

```
index.html                  All sections, semantic landmarks, German copy
css/styles.css              Tokens → base → components (one block per section) → responsive
js/main.js                  Mega menu, mobile drawer, form validation (not wired to a backend)
assets/
  fischer-elektronik-logo.svg      Logo, vectorised from the current website (see note below)
  milli-to3-messplatz.jpg          Hero: Milli-TO3 with measuring electrode (from the current website)
  milli-to3-frontpanel.jpg         Crop of the same photo
  schutzringelektrode-detail.jpg   Crop of the same photo
  fonts/                           Archivo (variable, 62–125 % width) + IBM Plex Mono, OFL, self-hosted
```

Fonts are self-hosted with no Google Fonts requests, which avoids the GDPR issue
from the LG München ruling (3 O 17493/20). The page has no tracking and no external requests.

## Art direction: "Kalibriert"

The design reads like an instrument datasheet. Headlines use an expanded grotesque
(Archivo at 118 % width), which echoes the wide FE wordmark. Measured values, norms
and labels use IBM Plex Mono. The one recurring motif is a logarithmic decade scale
(µΩ … PΩ) showing the Milli-TO3's real measuring range. Navy carries authority, Fischer
blue is kept for actions and emphasis, and corners are nearly square. The grid is
12 columns with hairline rules, and each section has its own layout.

## To confirm with the client

**Assets**
1. **Product photography in print resolution.** The only product photo available was a
   crop of a screenshot of the current website (about 730 × 470 px), which is soft on
   high-DPI screens. We need original photos, ideally cut out or shot on white: the
   Milli-TO3 front on, the FE 50 and other electrodes, a glow-wire tester, a tracking
   tester, TOM 5 / TOM 300-2 and calibration resistors.
2. **Logo as original vector data** (SVG/EPS/AI) plus the exact brand blue.
   `fischer-elektronik-logo.svg` was traced from a screen crop and is only a stand-in.
3. **The electrode in the hero photo:** which model is it? It is labelled only as
   "Messelektrode" for now.

**Facts and copy**
4. **Milli-TO3 range "10 µΩ to 1.6 PΩ".** Taken from a third-party product listing
   (kompass.com). Please confirm against the datasheet, because the hero scale is based on it.
5. **"Seit 1984".** Appears on the current site ("Präzision seit 1984") and matches
   "über 40 Jahre", but please confirm the founding year.
6. **"Entwicklung und Fertigung in Mittenwalde".** Based on the site text ("entwickelt und
   fertigt"). **Wartung & Reparatur** comes from company directory entries. Please confirm both.
7. **Norm references:** DIN EN IEC 62631 (FE 50), DIN EN 60695-2 (Glühdraht) and
   DIN EN 60112 (Kriechstrom). Please confirm the exact standard editions or parts.
8. **Current site bug:** the Kriechstromprüfgeräte card on the live homepage reuses the
   Glühdraht copy ("Prüfung der Entflammbarkeit … DIN EN 60695-2"), and the Glühdraht card
   lists "GWIT" twice. This prototype uses corrected copy.
9. **Figures left out on purpose:** "1.500+ zufriedene Kunden", "100 % Made in Germany" and
   the lab photo with Brandenburg Gate from the current site were not used. They can
   only come back once the numbers are confirmed and real photos are available.

**Links and integration**
10. Product links point to the existing product pages. Kriechstromprüfgeräte has no
    known URL yet, so it links to the contact section.
11. URLs are still needed for Jobs, Impressum, Datenschutz, LinkedIn and YouTube
    (placeholders are currently `#`).
12. The contact form only validates in the browser. It still needs a mail or CRM
    endpoint plus the final wording of the privacy consent.
13. The current site has an article search ("Artikel suchen"). Please confirm whether
    the new homepage should keep it.
