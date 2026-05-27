# Audyt Umów Kredytowych — Landing Page (handoff)

Lead-genowy landing page dla usługi wstępnego audytu umów kredytowych/pożyczkowych.
Gotowy do przekazania web designerowi, copywriterowi i wdrożeniowcowi.

## Podgląd lokalny
To statyczny HTML/CSS/JS — wystarczy otworzyć `index.html` w przeglądarce.
Dla pełnej zgodności (fonty, schema) uruchom prosty serwer:

```powershell
# z katalogu projektu
python -m http.server 8080
# → http://127.0.0.1:8080
```

## Struktura
```
Audyt Umów Kredytowych\
├── index.html              # działający LP (11 sekcji + hero form + FAQ + sticky CTA)
├── assets\
│   ├── styles.css          # design premium (granat/zieleń/biel/grafit + złoto)
│   └── app.js              # walidacja, accordion, submit (placeholder)
├── COPY_STRATEGIA.md       # MASTER: strategia + persona + całe copy + headline + CTA + FAQ
├── SEO.md                  # meta, frazy, schema
├── WARIANTY_AB.md          # 3 warianty hero (A/B/C) + macierz testów
├── REKLAMY_META_GOOGLE.md  # kreacje reklamowe + compliance
├── DO_UNIKANIA_PRAWNE.md   # czerwone linie prawne i wizerunkowe
├── CLAUDE.md               # kontekst projektu + TODO
└── README.md               # ten plik
```

## Wdrożenie — kroki
1. **Marka:** zamień placeholder `[Marka]` (index.html, meta title/OG, footer).
2. **Backend formularza:** w `assets/app.js` jest miejsce „PODPIĘCIE BACKENDU" — podłącz `fetch` POST do API/CRM lub usługi mailowej. Obsłuż bezpieczny upload pliku (PDF/JPG/PNG, walidacja typu i rozmiaru po stronie serwera, szyfrowane przechowywanie).
3. **Dokumenty prawne:** dodaj Politykę prywatności i Regulamin; podlinkuj w stopce i przy checkboxie RODO.
4. **Domena/SEO:** ustaw canonical, wygeneruj `assets/og-image.png` (1200×630), zweryfikuj w Search Console.
5. **Analityka:** Piksel Meta + Google Tag; zdarzenie konwersji `Lead` na sukces submitu; UTM zgodnie z REKLAMY_META_GOOGLE.md.
6. **A/B:** wdroż warianty hero wg WARIANTY_AB.md (B→Meta, A→Search, C→LinkedIn/JDG).

## ⚠ Zanim opublikujesz — przeczytaj DO_UNIKANIA_PRAWNE.md
Usługa finansowo-prawna (YMYL). Brak obietnic wyniku, brak oskarżeń banków, JDG przez weryfikację charakteru umowy, obowiązkowy disclaimer. Status prawny podmiotu (kancelaria vs nie) decyduje o dopuszczalnym słownictwie.
