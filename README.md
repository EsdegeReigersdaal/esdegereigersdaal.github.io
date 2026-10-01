# Esdege-Reigersdaal architecture

This repository owns the source, build, and publication of our architecture
diagrams. We publish them to make our systems understandable and open to scrutiny.
Security depends on effective controls and their verification, rather than keeping
the architecture obscure.

**Published diagrams:** <https://esdegereigersdaal.github.io/>

## Repository layout

| Path | Purpose |
| --- | --- |
| `architecture/confluxdb/` | LikeC4 specifications, models, relationships, and views |
| [docs/confluxdb/C4.md](docs/confluxdb/C4.md) | Existing reference documentation for the diagrams |
| `public/` | Static publication assets, including the crawler policy |
| `scripts/` | Publication asset preparation and build verification |
| [.github/workflows/pages.yml](.github/workflows/pages.yml) | Pull request checks and GitHub Pages deployment |
| `dist/` | Generated website; ignored by Git and uploaded as a Pages artifact |

The diagram sources and their C4 reference document were imported unchanged from
`confluxdb/data/` in `EsdegeReigersdaal/Esdege-documentatie`, at commit
`f8e8b2ecf0140153ad0d24831bbd1e1278744004`. Future diagram changes belong here.
The build uses only this checkout and its locked npm dependencies.

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
