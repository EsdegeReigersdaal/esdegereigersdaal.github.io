# Esdege-Reigersdaal architecture

This repository owns the source, build, and publication of our architecture
diagrams. We publish them to make our systems understandable and open to scrutiny.
Security depends on effective controls and their verification, rather than keeping
the architecture obscure.

**Published diagrams:** <https://esdegereigersdaal.github.io/>

The current model describes the DataOps production platform in Azure North Europe:
self-hosted Dagster on private AKS, PostgreSQL for orchestration metadata, ADLS
Gen2 and Azure Tables for data products, Fabric consumers, and private Container
Apps runners with ACR Tasks for delivery. Production is the only active
infrastructure environment.

See the [architecture reference](docs/dataops/C4.md) for ownership, network access,
delivery, the power schedule, recovery limits and dated source evidence. Reviewed
on **1 October 2026** against `dataops-infrastructure` commit
[`7e504e3`](https://github.com/EsdegeReigersdaal/dataops-infrastructure/commit/7e504e32937621670d1c563258eff576fc17449c).
This is a documented snapshot, not a live Azure inventory.

## Repository layout

| Path | Purpose |
| --- | --- |
| `architecture/dataops/` | LikeC4 specifications, models, relationships, and views |
| [docs/dataops/C4.md](docs/dataops/C4.md) | Current architecture and evidence references |
| [docs/confluxdb/C4.md](docs/confluxdb/C4.md) | Compatibility link for the former reference path |
| `public/` | Static publication assets, including the crawler policy |
| `scripts/` | Publication asset preparation and build verification |
| [.github/workflows/pages.yml](.github/workflows/pages.yml) | Pull request checks and GitHub Pages deployment |
| `dist/` | Generated website; ignored by Git and uploaded as a Pages artifact |

The original diagram sources and their C4 reference document were imported from
`confluxdb/data/` in `EsdegeReigersdaal/Esdege-documentatie`, at commit
`f8e8b2ecf0140153ad0d24831bbd1e1278744004`. The DataOps model supersedes that
design while retaining the published `index`, `azure` and `confluxdb` view URLs.
Future diagram changes belong here. The build uses only this checkout and its
locked npm dependencies; it does not need access to private infrastructure sources.

## Work locally

Install the Node.js version in [.nvmrc](.nvmrc), then run from the repository root:

```sh
npm ci
npm run dev
```

Open the local URL printed by LikeC4. Edit the `.c4` files under `architecture/`;
the preview updates automatically. The bundled Graphviz WebAssembly engine handles
layout, so the static site build requires neither Docker nor a Graphviz installation.

To run the same checks as CI and preview the publication:

```sh
npm run validate
npm run build
npm run check:site
npm run preview
```

LikeC4 is pinned in [package.json](package.json), and `package-lock.json` fixes its
dependency tree. Commit both files when updating dependencies. Dependabot opens
monthly dependency and GitHub Actions update pull requests.

## Contribute and publish

Open a pull request with source changes. The **Documentation / Validate and build**
check validates the model, builds the website, and checks the publication artifact.
Merging into `main` publishes that artifact to GitHub Pages. A manual run of the
workflow on `main` republishes the current source; runs on other branches only check
the build. Pull requests never deploy.

Generated HTML and JavaScript belong in `dist/` and are not committed. Supporting
Markdown is readable in this repository; the Pages website presents the interactive
diagrams. Put additional diagrams under `architecture/` and supporting prose under
`docs/`. Keep credentials and personal data out of this public documentation.

See [deployment and cutover](docs/deployment.md) for the one-time switch from branch
publishing, repository settings, URL handling, and rollback.
