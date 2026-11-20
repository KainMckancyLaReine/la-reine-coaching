# La Reine Coaching CMS

De beheerder gaat naar `https://www.lareinecoaching.nl/admin/`, logt in en kiest een pagina of onderdeel. De Nederlandse en Engelse teksten staan naast elkaar. Onder **Foto’s en logo** kan ze bestaande afbeeldingen vervangen en de gekozen foto meteen bekijken. Met **Wijzigingen publiceren** slaat ze alles in één GitHub-commit op. De bestaande GitHub Pages-workflow bouwt de site daarna opnieuw.

De editor beheert de 379 tekstparen in `src/content/site.json` en de 19 afbeeldingen in `public/admin/images.json`. Onder andere de shopteksten en getoonde prijzen, navigatielabels, formulierteksten en chatvragen zijn bewerkbaar. Vaste links, downloadbestanden, formulierbestemmingen, SEO-metadata en de opbouw van pagina’s worden in de broncode onderhouden.

## Eenmalige live inrichting

1. Merge de CMS-branch naar `main`. Maak op GitHub een fine-grained token voor alleen `la-reine-coaching`, met de repositorymachtiging **Contents: Read and write**. Geef het token een vervaldatum. Publicaties moeten met dit aparte token draaien om de Pages-workflow via de push te starten.
2. Meld je in Cloudflare aan met `npx wrangler@4 login`. Draai de volgende commando’s vanuit `cms-worker/` en bewaar de waarden in een wachtwoordmanager. Gebruik een nieuw, sterk klantwachtwoord en een apart willekeurig sessiegeheim van minimaal 32 bytes.

   ```sh
   npx wrangler@4 secret put ADMIN_USERNAME
   npx wrangler@4 secret put ADMIN_PASSWORD
   npx wrangler@4 secret put SESSION_SECRET
   npx wrangler@4 secret put GITHUB_TOKEN
   npx wrangler@4 deploy
   ```
3. Zet de HTTPS-URL uit de deploy-uitvoer in de GitHub Actions-repositoryvariabele `CMS_WORKER_URL` onder **Settings → Secrets and variables → Actions → Variables**. Start **Deploy to GitHub Pages** vervolgens handmatig vanuit het tabblad **Actions**. De workflow schrijft de publieke Worker-URL naar `out/admin/config.json`.
4. Open `/admin/`, log in en publiceer een afgesproken wijziging. Controleer de CMS-commit, de Pages-workflow en de live pagina. Deel het beheeradres en de klantinlog via een privé-kanaal.

De Worker accepteert de productie-origin uit `wrangler.toml`. Het CMS leest altijd de meest recente versie van GitHub, ook als een eerdere Pages-build nog loopt. Bij een wijziging op `main` tijdens het bewerken krijgt de beheerder een melding en blijven de lokale wijzigingen in het geopende tabblad beschikbaar.

### Lokale controle

Draai `npm run build` vanuit de repositoryroot en serveer `out/` met een statische HTTP-server. Voor handmatige integratiecontrole kun je een eigen testbranch en testtoken gebruiken. Start de Worker lokaal met `npx wrangler@4 dev` vanuit `cms-worker/` en plaats tijdelijke instellingen in `cms-worker/.dev.vars`. Stel daarin `SITE_ORIGIN` in op de origin van je statische server en `GITHUB_BRANCH` op je testbranch. Vul in de lokale uitvoer `out/admin/config.json` de URL van de lokale Worker in met hostnaam `localhost`.
