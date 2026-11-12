# Henoch – Homepage

Version 1.5.2 (live) · Entwurf 2.0.0 auf Branch, noch nicht veröffentlicht · live unter **https://henoch.app**

Die Homepage stellt Henoch vor, einen Begleiter für Männer, die ihren Tag mit Gott beginnen und beschließen wollen, und führt zur App unter **https://mein.henoch.app**.

Reines HTML und CSS, ohne Build-Schritt und ohne Abhängigkeiten. Veröffentlicht über GitHub Pages aus `main` (Datei `CNAME`: `henoch.app`).

## Aufbau

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite. Der Link zur App steht einmal, als Knopf „Henoch öffnen“ oben links. Der Umschalter „Am Morgen / Über den Tag / Am Abend“ läuft ohne JavaScript und zeigt je ein Bildschirmfoto aus `bilder/`. |
| `anleitung/` | Anleitung „Henoch Schritt für Schritt“ mit eigenen Bildschirmfotos in `anleitung/img/` |
| `impressum.html`, `datenschutz.html`, `404.html` | Unterseiten |
| `startseite.css` | Gestaltung der Startseite; nur von `index.html` geladen. Farben mit fester Aufgabe: Gold für den Morgen, Weiß für den Tag, Nachtblau für den Abend, Rot für Rubriken. |
| `style.css` | Farben, Schriften und Layout wie in der App, hell und dunkel |
| `kontakt.js` | setzt die Kontaktadresse erst im Browser zusammen |
| `fonts/` | Literata und Source Sans 3 (SIL Open Font License) |
| `bilder/` | Bildschirmfotos der App, je hell und `-dunkel` (780 × 1540, JPG) |
| `og.png`, `favicon.svg`, `apple-touch-icon.png`, `logo.svg` | Vorschaubild, Symbole, Kopfgrafik |
| `robots.txt`, `sitemap.xml` | für Suchmaschinen |

## Beiträge unter Neuigkeiten

- Jeder Beitrag beginnt mit „Bruder“ und spricht den Leser direkt mit „du“ an, nie mit „Brüder“, „ihr“ oder „Sie“.
- Fürwörter für Gott, Jesus Christus und den Heiligen Geist werden im eigenen Text groß geschrieben („Er“, „Seine Güte“). Zitate bleiben wie in der Quelle.
- Bibeltexte nach der Lutherbibel 1912, Wort für Wort geprüft.

Änderungen stehen in `CHANGELOG.md`.

## Kontakt

kontakt@henoch.app
