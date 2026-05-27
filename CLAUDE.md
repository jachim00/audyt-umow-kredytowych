# Audyt Umów Kredytowych — kontekst projektu (CLAUDE.md)

## Czym jest
Landing page lead-genowy dla usługi **wstępnego audytu umów kredytowych i pożyczkowych**
(zgodność z ustawą o kredycie konsumenckim, weryfikacja kosztów, RRSO, sankcja kredytu darmowego).
Cel: pozyskanie leadów (formularz + opcjonalny załącznik umowy) bez obietnicy wyniku.

- **Lokalizacja:** `D:\Automatyzacje\Landing Page\Audyt Umów Kredytowych\`
- **Status:** 🟠 PLANNING/DEV — kreacja gotowa, brak domeny i backendu formularza.
- **Utworzono:** 2026-05-27 (Claude + wsparcie Karola/Bolka).

## Grupa docelowa (3 segmenty)
1. **JDG** — wymaga zawsze weryfikacji charakteru umowy (konsument/przedsiębiorca) PRZED sugestią ochrony konsumenckiej.
2. **Sektor finansowy / świadomi** — ton ekspercki, analityczny.
3. **Managerowie / wyższe dochody** — ton kontroli, audytu, premium.

## Pliki
| Plik | Zawartość |
|------|-----------|
| `index.html` | Działający LP (hero+form, 11 sekcji, FAQ accordion, sticky CTA, JSON-LD Service+FAQ) |
| `assets/styles.css` | Design system: granat/zieleń/biel/grafit + złoto; mobile-first |
| `assets/app.js` | Walidacja formularzy, accordion FAQ, rok w stopce, placeholder submit |
| `COPY_STRATEGIA.md` | **Master**: analiza strategiczna, persona, pełne copy, 15+ headline, 20 CTA, formularz, FAQ |
| `SEO.md` | Meta, H1/H2, frazy, long-tail, schema |
| `WARIANTY_AB.md` | 3 warianty (A ekspercki / B problemowy / C premium-JDG) + macierz testów |
| `REKLAMY_META_GOOGLE.md` | Kreacje Meta + Google Ads, negatywy, compliance, KPI |
| `DO_UNIKANIA_PRAWNE.md` | Lista zakazanych sformułowań + reguły RODO/JDG/disclaimer |
| `README.md` | Instrukcja wdrożenia/handoff |

## ⚠ Zasady prawne (nadrzędne — patrz DO_UNIKANIA_PRAWNE.md)
- **NIGDY** „gwarantujemy odzyskanie", „unieważnimy kredyt", „bank Cię oszukał", „100% skuteczności".
- **ZAWSZE** „potencjalne nieprawidłowości", „możliwe podstawy do roszczeń", „najpierw sprawdź, potem zdecyduj".
- JDG → weryfikacja charakteru umowy. Sankcja kredytu darmowego → „w określonych sytuacjach", nie pewny skutek.
- Disclaimer obowiązkowy na stronie (sekcja „Ważne informacje").
- Jeśli usługodawca nie jest kancelarią → nie używać „porada prawna" sugerując uprawnienia; używać „wstępna analiza/audyt".

## TODO przed publikacją
- [ ] Podstawić markę: zamień `[Marka]` w `index.html` i meta.
- [ ] Podpiąć backend formularza (`assets/app.js` — sekcja „PODPIĘCIE BACKENDU") do CRM/maila; bezpieczny upload pliku.
- [ ] Polityka prywatności + Regulamin (linki w stopce i przy zgodzie RODO).
- [ ] Domena + canonical + `og-image.png` (1200×630).
- [ ] Piksel Meta + Google Tag (zdarzenie `Lead` na submit).
- [ ] Weryfikacja statusu prawnego podmiotu (kancelaria vs nie) → dobór słownictwa.
