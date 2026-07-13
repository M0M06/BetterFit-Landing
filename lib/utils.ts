import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/* ── Real project links — update here in one place ────────── */

export const GITHUB_URL = "https://github.com/M0M06/Software-BetterFit";
export const GITHUB_ISSUES_URL = "https://github.com/M0M06/Software-BetterFit/issues";

/**
 * Pilot application channel: a prefilled GitHub issue — a real, public,
 * tracked channel. TODO(owner): swap for email/form if you prefer a
 * private channel.
 */
const pilotIssueTitle = "Candidatura palestra pilota: [nome struttura]";
const pilotIssueBody = `## Candidatura programma pilota

- **Nome struttura:**
- **Città:**
- **Numero indicativo di membri attivi:**
- **Numero di sedi:**
- **Gestionale attuale (se presente):**
- **Contatto (email o telefono):**

### Perché vi interessa il pilota

<!-- Due righe: cosa vi manca oggi e cosa vorreste testare per primi. -->
`;

export const PILOT_CONTACT_URL = `${GITHUB_ISSUES_URL}/new?title=${encodeURIComponent(
  pilotIssueTitle
)}&labels=${encodeURIComponent("palestra-pilota")}&body=${encodeURIComponent(pilotIssueBody)}`;
