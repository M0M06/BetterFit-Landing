# Contribuire alla landing di BetterFit

Grazie dell'interesse! Questa repository contiene solo il sito pubblico; per
contribuire al prodotto (backend e dashboard) fai riferimento al
[repository principale](https://github.com/GPOI-2526-5E/BetterFit).

## Come proporre una modifica

1. Apri una [issue](https://github.com/GPOI-2526-5E/BetterFit/issues) descrivendo
   il problema o la proposta, così evitiamo lavoro duplicato.
2. Fai un fork e crea un branch descrittivo (`fix/contrasto-footer`,
   `feat/sezione-faq`, …).
3. Sviluppa in locale:

   ```bash
   pnpm install
   pnpm dev
   ```

4. Prima di aprire la pull request verifica che passino:

   ```bash
   pnpm lint
   pnpm build
   ```

5. Apri la pull request compilando il template.

## Linee guida

- **Onestà dei contenuti**: la landing non deve contenere numeri, clienti,
  testimonianze o garanzie non verificabili nel repository. I dati nei mockup
  sono dichiarati come seed di sviluppo.
- **Brand**: colori, raggi e spaziature seguono
  `docs/brand-guideline-betterfit.md` del repository principale. I token sono
  in `app/globals.css`.
- **Accessibilità**: heading in ordine, contrasto ≥ 4.5:1, focus visibile,
  animazioni disattivate con `prefers-reduced-motion`.
- **Semplicità**: niente nuove dipendenze se una soluzione CSS/HTML basta.

## Segnalare un bug

Apri una issue con: pagina/sezione, browser e viewport, comportamento atteso e
osservato, screenshot se utile.
