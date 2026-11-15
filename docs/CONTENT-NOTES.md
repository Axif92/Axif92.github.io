# Content notes: sources, conflicts and gaps

Every fact on the site comes from one of three sources, tagged in `content/site.mjs`:

- `[site:…]`: https://sites.google.com/view/asif92 and its subpages (inspected Nov 2026)
- `[cv]`: Resume.txt
- `[li]`: Experience.txt / Education.txt (LinkedIn export)

Nothing was invented. Where sources disagree, the choice made is listed below so you can correct it.

## Conflicts to confirm

| Item | Sources say | Site uses |
|---|---|---|
| 3Value dates | Jul 2024 – Apr 2026 [cv]; Jun 2024 – Mar 2026 [li]; Jul 2024 – Present [site] | Jul 2024 – Apr 2026 |
| EBL titles | Manager 2021–23 + Associate Manager / Future Leader 2018–20 [cv]; Principal Officer + Senior Officer [site]; Manager Jan 2019 – May 2023 + Future Leader Jul–Dec 2018 [li] | Resume titles and dates |
| EBL YoY growth | 18% [li, site]; 20% revenue growth [cv] | 18% |
| EBL merchants | 12,000 POS / 3,000 merchants [li]; 8,500 POS merchants [site] | Not shown |
| Upgrades delivered | 500+ [li]; 50+ [cv, site] | 50+ |
| Client inquiries | 1,500+/month [li]; 150+/quarter [site] | Not shown (97% first-contact resolution is shown, all sources agree) |
| ML savings | $950K+ [li]; $650K [cv] | Not shown |
| BIBM start | Jun 2015 [site exp]; May 2015 [site edu]; Oct 2015 [li] | Jun 2015 (job), 2015 – 2017 (degree) |
| BBA end | Dec 2013 [site]; 2014 [li] | 2013 |
| Graduate Assistant duties | Research data + teaching support [site]; department operations, events, admissions [li] | Both, summarised; LinkedIn's specific numbers not shown |

## Inferences (please confirm)

- **Academic** label on SAP, SQL, statistics, supervised and unsupervised learning, and GradHub: the SQL work uses the course database `UA_HALLUX`, GradHub screenshots show the WCOB-ISYS Azure DevOps org (team F23-P3), and SAP S/4HANA is in the MS coursework list. The other pages do not say "coursework" explicitly.
- **Independent** label on the Power BI and Tableau collections, Uber and Python visualization projects: the source pages do not say whether these were coursework.
- Statistics: one chi-square finding on the source page does not match its code, and the RMSE figures there are computed from MAE. Those numbers are left out; only p-values and R²/MAE/accuracy are shown.

## Missing information

- **LinkedIn / GitHub URLs**: not on any source. Add to `site.socials`.
- **Email**: the only public address is `aratul@uark.edu` (university). Replace it if it is no longer monitored.
- **Phone** (+1 479 301 9585 on the old site) is deliberately left off. Set `site.phone` to show it on the resume.
- **Career objective**: none stated in the sources. The About text describes the work rather than inventing goals.
- **Live domain**: set `site.url` once known (enables canonical URLs, OG URLs and `sitemap.xml`).
- **Old resume PDF** ("EBL Resume.pdf") is embedded from Drive and could not be downloaded. The site's PDF is generated from the site content instead (see README).
- Certificates with no scan on the source site (Google Advanced Data Analytics, Google BI, IBM AI Enterprise Workflow, IBM IT Scrum Master, PMI Scrum: Advanced) have no date or verify link. Add `date` / `verify` if available.

## Added in the rebuild (Nov 2026)

- **Location / nav clock** show "Texas" (US Central time), taken from the resume header "3VALUE INC. | Consultant (Texas, USA)". The 3Value role ended in April 2026, so confirm the current city in `site.location` and `site.clock`.
- **"By the numbers" panels** (where the other site shows recommendations) contain only sourced figures, shown without quotation marks. No testimonials exist in the sources.
- **Resume PDF** is printed from `resume-source/resume.html`; it carries the same facts as the site.
- **Logos** (3Value, University of Arkansas, Eastern Bank, BIBM) come from the old Google Site. Jagannath University has no logo there, so an initials badge is shown.
