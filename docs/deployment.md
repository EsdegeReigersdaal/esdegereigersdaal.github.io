# Documentation deployment

The [Documentation workflow](../.github/workflows/pages.yml) builds from this
repository and publishes only `dist/`. It does not check out `Esdege-documentatie`,
push generated files, or use a separate deployment repository. GitHub supplies the
short-lived token and Pages identity; no personal access token or deployment secret
is required.

## Cut over from the existing site

The previous site was generated elsewhere and committed as root-level HTML,
JavaScript, and `assets/`. GitHub Pages was configured to publish `main` at `/`.

1. Have the migration pull request pass **Validate and build**.
2. Immediately before merging, open this repository's **Settings > Pages > Build
   and deployment**, and change **Source** from **Deploy from a branch** to
   **GitHub Actions**. Retain the current site address and any custom-domain settings.
   The previous deployment remains available during the cutover.
3. In **Settings > Environments > github-pages**, allow deployments from `main`.
   Protect `main` with pull request review and the **Validate and build** status check.
4. Merge the migration. Its push starts validation, build, artifact upload, and
   deployment. Check the workflow's environment URL and open the landscape,
   ownership and production views, including a direct link to a view.
5. Stop any external automation or manual process that copies generated files from
   `Esdege-documentatie` into this repository. Make subsequent diagram changes here.

Repository settings are a one-time administrator action; workflow files do not
change the Pages publishing source. If the change has already been merged, switch
the source and run **Actions > Documentation > Run workflow** on `main`.

The initial source import contained the five `.c4` files and `C4.md` from the old
repository's `confluxdb/data/` directory. The subsequent
[DataOps architecture refresh](dataops/C4.md) replaces that design and retains the
`index`, `azure` and `confluxdb` view identifiers. Other documents and local edits
in the old checkout were outside the diagram migration.
The former unpinned Docker build is replaced by Node.js, a pinned LikeC4 version, and
the npm lockfile. Older generated deployments remain available in Git history.

## Build and publish

Pull requests validate and build with read permissions, including contributions
from forks. They do not query Pages settings, upload deployment artifacts, or receive
deployment permissions. Pushes to `main` and manual runs on `main` additionally read
Pages metadata, build for the configured base path, and upload a Pages artifact.
The deploy job waits for that build and is the only job with `pages: write` and
`id-token: write`. Production runs are serialized without cancelling an active
deployment. Actions are pinned to commit hashes and updated through Dependabot.

The build uses the Node.js version in `.nvmrc` and `npm ci` with `package-lock.json`.
The local and CI commands are identical:

```sh
npm ci
npm run validate
npm run build
npm run check:site
```

LikeC4 generates `index.html`, a matching `404.html` for direct diagram links, the
application assets, and `likec4-views.js` for embedding. The post-build step copies
`public/` over the output so our crawlable `robots.txt` takes precedence over the
generator's default. The artifact check verifies the referenced assets, fallback,
embedding bundle, favicon, and crawler policy before publication.

## Site URLs

The organization site is served at `https://esdegereigersdaal.github.io/` with base
path `/`. The workflow uses `actions/configure-pages` metadata rather than assuming
the repository name is a URL prefix. This also supports a project site or custom
domain without changing the workflow. To verify a project subpath locally:

```sh
npm run build -- --base /architecture/
npm run check:site -- /architecture/
npm run preview -- --base /architecture/
```

The current browser-history routes are retained. GitHub Pages serves the generated
`404.html` application for a direct request to a diagram route; the application then
opens that view. Such a direct request still has HTTP status 404, which is a GitHub
Pages hosting limitation. The public `robots.txt` permits crawling.

The verified clone URL is
`https://github.com/EsdegeReigersdaal/esdegereigersdaal.github.io.git`. An older local
checkout may still refer to `esdegereigersdaalhub.io.git.git`; correct that checkout
with:

```sh
git remote set-url origin https://github.com/EsdegeReigersdaal/esdegereigersdaal.github.io.git
```

## Rollback

For changes after this migration, revert the faulty source or build change through
a pull request. Merging the revert into `main` rebuilds and republishes the last
working configuration. A failed validation or build cannot reach the deploy job,
so the existing deployment stays live.

To undo the migration itself, restore the old generated files from the preceding
commit and switch Pages back to **Deploy from a branch**, `main`, `/`. The commit
before this migration is `af98d2855d42895ea508e7c8623f56ae9032142d`.

References: [LikeC4 CLI](https://likec4.dev/tooling/cli/) and
[GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
