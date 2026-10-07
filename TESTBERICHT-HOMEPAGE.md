# Testbericht Homepage henoch.app – Version 1.0

Stand: 8. Oktober 2026 · Phase 1 (Bestandsaufnahme) und Phase 2 (Korrekturen) · geprüft: `main` bei `fdb5640`

## Kurzfazit

Die Homepage ist technisch sauber: kein Build, keine Konsolenfehler, keine fremden Server, keine Cookies.
Lighthouse ergibt 100 / 100 / 100 / 100 (Performance, Barrierefreiheit, Best Practices, SEO) auf Handy und Rechner.
**Nichts blockiert die Veröffentlichung.** Vor 1.0 sollten vor allem die Bildschirmfotos erneuert, eine
eigene 404-Seite ergänzt und die Datenschutzerklärung um den E-Mail-Anbieter ergänzt werden.

Die Live-Adressen (henoch.app, www.henoch.app, mein.henoch.app) konnte ich aus dieser Umgebung nicht aufrufen,
weil das Netzwerk sie sperrt. Zertifikat, Weiterleitungen und „Enforce HTTPS“ stehen deshalb in der
Checkliste für deinen eigenen Test.

---

## Status nach Phase 2 (8. Oktober 2026, Zweig `claude/release-1.0`)

Alle Punkte unter „Wichtig“ sind behoben, dazu S2 und S3. Jede Korrektur ist ein eigener Commit und wurde danach erneut geprüft.
**Noch nichts ist live:** `main` ist unverändert, es gibt keinen Tag und kein Deployment.

| Nr. | Status | Was geändert wurde | Commit |
|---|---|---|---|
| W1 | ✅ behoben | Alle drei Bildschirmfotos hell und dunkel aus der App 0.40.0, alle vom selben Tag. Beschreibung von Bild 1 an den Inhalt angepasst. | `7d456f4` |
| W2 | ✅ behoben | `404.html` im Henoch-Design mit „Zur Startseite“. Absolute Pfade, damit sie auch bei verschachtelten Adressen richtig aussieht (getestet unter `/a/b/`). | `2be539a` |
| W3 | ✅ behoben | Datenschutz nennt IONOS SE als E-Mail-Anbieter. Grundlage: Die MX-Einträge bei IONOS zeigen auf mx00/mx01.ionos.de. | `fee18bd` |
| W4 | ✅ behoben | Gebetsordnung: „Auf Wunsch mit der geistlichen Waffenrüstung aus Epheser 6.“ Arena: „Im Gebet ringen, Treffen mit Brüdern vorbereiten und in einer Wüstenzeit von 40 oder 90 Tagen dranbleiben.“ | `6e180d3` |
| W5 | ✅ behoben | Der Link zu GitHub in der Datenschutzerklärung öffnet in neuem Tab. „Henoch öffnen“ bleibt im selben Tab. | `0f5e1f7` |
| W6 | ✅ behoben | Startseite und Open Graph mit dem ersten Satz der Einleitung, Impressum und Datenschutz mit je einer eigenen Beschreibung. | `f5bc280` |
| W7 | ✅ behoben | `robots.txt` und `sitemap.xml` (nur die Startseite, weil Impressum und Datenschutz auf `noindex` stehen). | `a133538` |
| W8 | ✅ behoben | iPhone: „… dann „Zum Home-Bildschirm“ und „Hinzufügen“.“ | `106b411` |
| S2 | ✅ behoben | Die Bildreihe ist per Tastatur fokussierbar und scrollbar. | `2cec2d7` |
| S3 | ✅ behoben | `og:image:alt` ergänzt. | `1dc5565` |
| – | ✅ behoben | Bei der Nachprüfung gefunden: „1. Mose 5,24“, „Epheser 6“ und „90 Tagen“ brachen am Zeilenende auseinander. Jetzt mit geschützten Leerzeichen. | `3ac3b83` |
| S1, S4–S7 | ⏳ offen für 1.1 | WebP-Bilder, einheitliches Symbol mit der App, Aufräumen der Zweige, Samsung Internet, Hinweise zur App | – |

**Nachprüfung nach allen Korrekturen (lokal):**
- Lighthouse Startseite: 100/100/100/100 auf Handy und Rechner.
- Impressum, Datenschutz und 404: Performance, Barrierefreiheit und Best Practices je 100. SEO niedriger nur wegen des gewollten `noindex`.
- iPhone SE (hoch und quer), 360 px, Tablet (hoch und quer), 1440 px, hell und dunkel, alle vier Seiten: kein seitliches Scrollen, keine fehlenden Bilder, genau eine H1, keine Konsolenfehler, keine fremden Server.
- HTML-Prüfung (html-validate): nur der Hinweis, dass `<!doctype html>` kleingeschrieben ist. Das ist gültiges HTML5 und bleibt so.

**Vorbereitet für Phase 3 (noch nicht veröffentlicht):** Versionsvermerk `<!-- Henoch Homepage 1.0.0 -->` in `index.html`, `CHANGELOG.md` mit Eintrag 1.0.0, neue `README.md`.

**Bitte vor dem Livegang entscheiden:**
1. Die Texte aus W4 (Waffenrüstung, Wüstenzeit) passen? Sie lassen sich mit einem Satz zurücknehmen.
2. Dieser Testbericht liegt im Hauptordner. Nach dem Merge wäre er unter henoch.app/TESTBERICHT-HOMEPAGE.md öffentlich abrufbar, ebenso README und CHANGELOG. Mein Vorschlag: den Testbericht vor dem Merge entfernen. Er bleibt auf dem Zweig `claude/release-1.0` und im Verlauf erhalten.
3. Im Kundenbereich von IONOS den Vertrag zur Auftragsverarbeitung (AVV) abschließen, falls noch nicht geschehen. Das ist ein Klick unter „Verträge“.

---

## Gefundene Punkte (Phase 1)

### Kritisch (blockiert die Veröffentlichung)

Keine.

### Wichtig (sollte vor 1.0 behoben werden)

| Nr. | Bereich | Befund | Vorschlag |
|---|---|---|---|
| W1 | Bildschirmfotos | Bild 1 („Heute“) und Bild 3 („Wort“) stammen vom 6. Oktober, die App steht inzwischen bei 0.40.0 (u. a. Wüstenzeit unter „Heute“). Die Bilder zeigen verschiedene Tage (Dienstag/Mittwoch), helle Bilder vom iPhone und dunkle aus der Demo sehen unterschiedlich aus. | Alle drei Bilder hell und dunkel einheitlich aus dem aktuellen Stand der App neu aufnehmen. |
| W2 | Fehlerseite | Es gibt keine eigene `404.html`. Bei einer falschen Adresse erscheint die englische Standardseite von GitHub. | Schlichte 404-Seite im Henoch-Design mit Link zur Startseite. |
| W3 | Datenschutz | E-Mails an kontakt@henoch.app laufen über IONOS. Das steht nicht in der Datenschutzerklärung. | Absatz „Kontakt per E-Mail“ um IONOS als Anbieter (IONOS SE, Elgendorfer Str. 57, 56410 Montabaur) ergänzen. |
| W4 | Stimmigkeit mit der App | Die Kachel „Arena“ nennt die Wüstenzeit nicht. Die Geistliche Waffenrüstung (Andacht) kommt auf der Homepage gar nicht vor. | Arena-Text ergänzen, z. B. „Im Gebet ringen, Treffen mit Brüdern vorbereiten und in der Wüstenzeit 40 oder 90 Tage dranbleiben.“ Ob die Waffenrüstung genannt werden soll, entscheidest du. |
| W5 | Links | Der Link zur Datenschutzerklärung von GitHub öffnet im selben Tab. | `target="_blank" rel="noopener"` für alle fremden Links. Der Knopf „Henoch öffnen“ bleibt im selben Tab, weil er zu unserer eigenen App führt und Safari sie so am einfachsten installiert. |
| W6 | Auffindbarkeit | Impressum und Datenschutz haben keine Meta-Beschreibung. Die Beschreibung der Startseite ist mit „Mit Gott durch den Tag.“ sehr knapp. | Startseite: erster Satz der Einleitung als Beschreibung (auch für Open Graph). Unterseiten: je ein Satz. |
| W7 | Auffindbarkeit | `robots.txt` und `sitemap.xml` fehlen. | Beide anlegen. Sitemap mit Startseite, Impressum und Datenschutz. |
| W8 | Installationsanleitung | iPhone: Der letzte Schritt „Hinzufügen“ fehlt, die App nennt ihn. | „… dann „Zum Home-Bildschirm“ und „Hinzufügen“.“ |

### Später (kann in 1.1)

| Nr. | Bereich | Befund | Vorschlag |
|---|---|---|---|
| S1 | Bilder | Bildschirmfotos als JPG (je 67–88 KB). Lighthouse empfiehlt WebP und kleinere Fassungen für schmale Spalten. | WebP-Fassungen über `<picture>` ergänzen, ggf. zwei Größen. |
| S2 | Barrierefreiheit | Die seitlich wischbare Bildreihe auf dem Handy ist per Tastatur nicht scrollbar (Lighthouse bemängelt es nicht). | `tabindex="0"` und eine Beschriftung für den Bildbereich. |
| S3 | Open Graph | Kein `og:image:alt`. | Ergänzen. |
| S4 | Symbole | Die Homepage nutzt die Sonne über dem Horizont, das App-Symbol auf dem Startbildschirm ist Luthers Rose. | Entscheiden, ob beide einheitlich werden sollen. |
| S5 | Aufräumen | Neun bereits gemergte Zweige liegen noch im Repository. `logo.svg` wird auf der Seite nicht verwendet (nur als Vorlage). | Zweige löschen, `logo.svg` behalten oder entfernen. |
| S6 | Installationsanleitung | Samsung Internet wird nicht erwähnt (die App selbst erklärt es). | Optional ergänzen. |
| S7 | App (nicht Homepage) | Die App steht bei Version 0.40.0, nicht 1.0. Im Code der App steht „Winter Arc“ noch in Kommentaren und Dateinamen, in der Oberfläche nicht mehr. | Nur zur Kenntnis. |

### Geprüft und in Ordnung

- **Projektzustand:** keine offenen Änderungen, alle Zweige gemergt, kein Build-Schritt, keine Konsolenfehler oder Warnungen.
- **Platzhalter:** keine Platzhalter, kein „Lorem ipsum“, kein TODO, keine Dummy-Links „#“, kein Debug-Code. Der einzige HTML-Kommentar markiert die Stelle des App-Links.
- **Texte:** durchgehend „du“, deutsche Anführungszeichen „…“, Gedankenstriche, Bibelstelle im Format der App („1. Mose 5,24“, Luther 1912). Keine Rechtschreibfehler gefunden.
- **Begriffe:** kein „Winter Arc“ und keine „Streithalle“ mehr. „Wüstenwanderung“ (der Ort in der Arena) und „Wüstenzeit“ (der Zeitraum) werden wie in der App verwendet.
- **App-Link:** zeigt auf https://mein.henoch.app/ (nicht mehr auf github.io).
- **Kontakt:** Der Link `mailto:kontakt@henoch.app` wird per JavaScript zusammengesetzt und funktioniert. Ohne JavaScript steht „kontakt (at) henoch.app“. Es gibt kein Formular.
- **Rechtliches:** Impressum und Datenschutz sind von jeder Seite über den Fuß erreichbar und vollständig ausgefüllt. Die Unterseiten sind bewusst auf `noindex` gesetzt.
- **Fremde Server:** keine. Schriften (Literata, Source Sans 3) liegen lokal, keine CDNs, Videos, Analytics oder Social-Media-Knöpfe.
- **Cookies:** keine Cookies, kein `localStorage`, kein Tracking. Ein Cookie-Banner ist nicht nötig.
- **Mixed Content:** Alle Ressourcen werden relativ geladen. Es gibt keine `http://`-Verweise.
- **Konfiguration:** `CNAME` mit `henoch.app`, `.nojekyll` vorhanden. Die DNS-Einträge bei IONOS wurden am 6. Oktober geprüft.
- **Darstellung:** iPhone SE (375 × 667, auch quer), schmales Android (360 px), Tablet hoch und quer, Rechner (1440 px), jeweils hell und dunkel. Kein seitliches Scrollen, keine fehlenden Bilder.
- **Barrierefreiheit:** genau eine H1 je Seite, Überschriften in richtiger Reihenfolge, Kontraste ausreichend (Lighthouse 100), sichtbarer Fokusrahmen, Tastaturreihenfolge sinnvoll.
- **Teilen:** Seitentitel, Open-Graph-Titel, Beschreibung und Vorschaubild (1200 × 630) vorhanden, `lang="de"` auf allen Seiten, Favicon (SVG) und Apple-Touch-Icon (180 × 180) im Henoch-Design.
- **Lighthouse (lokal):** Startseite 100/100/100/100 auf Handy und Rechner. Impressum und Datenschutz: SEO 50, nur wegen `noindex` (gewollt) und der fehlenden Beschreibung (W6). Hinweise zu Caching und Komprimierung betreffen den lokalen Testserver. GitHub Pages komprimiert und cacht selbst.

---

## Angaben, die du noch liefern oder entscheiden musst

1. **Datenschutz rechtlich prüfen lassen.** Besonders die Aussage zum EU-US Data Privacy Framework und die Rechtsgrundlagen.
2. **E-Mail-Anbieter bestätigen:** Läuft kontakt@henoch.app über IONOS? Dann ergänze ich das (W3).
3. **Impressum:** Name, Anschrift und E-Mail sind vollständig. Falls du Inhalte mit journalistischem Anspruch planst, etwa Andachten oder Artikel, kommt eine Zeile „Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Andreas Dykau, Anschrift wie oben“ dazu. Für die jetzige Seite ist das nicht nötig.
4. **Waffenrüstung auf der Homepage nennen?** Ja oder nein (W4).
5. **Neue Bildschirmfotos:** Soll ich sie aus der Demo aufnehmen, oder schickst du eigene vom iPhone (Heute, Arena, Wort, jeweils hell und dunkel)?

---

## Checkliste für deinen Test (Handy und Rechner)

- [ ] https://henoch.app öffnet sich mit Schloss im Browser, ohne Warnung.
- [ ] http://henoch.app leitet auf https://henoch.app um.
- [ ] https://www.henoch.app leitet auf https://henoch.app um.
- [ ] In GitHub unter Settings → Pages ist bei henoch-homepage „Enforce HTTPS“ angehakt.
- [ ] „Henoch öffnen“ führt zu https://mein.henoch.app, die App startet.
- [ ] Die alte Adresse cft5v9c8yf-stack.github.io/tagzeiten leitet auf mein.henoch.app um.
- [ ] Impressum und Datenschutz öffnen sich über den Fuß, „Henoch“ oben führt zurück.
- [ ] Der Kontakt-Link öffnet dein Mailprogramm mit kontakt@henoch.app, eine Testmail kommt an.
- [ ] Handy im Dunkelmodus: Seite und Bildschirmfotos erscheinen dunkel.
- [ ] Handy quer gehalten: nichts ragt über den Rand.
- [ ] Die Bildschirmfotos lassen sich auf dem Handy seitlich wischen.
- [ ] Link zu henoch.app per WhatsApp an dich selbst schicken: Vorschau mit Bild, Titel und Satz erscheint.
- [ ] iPhone: Installation nach der Anleitung auf der Seite klappt.
- [ ] Android: Installation nach der Anleitung auf der Seite klappt.
- [ ] Eine falsche Adresse wie henoch.app/test zeigt eine Fehlerseite (nach W2 die eigene).
