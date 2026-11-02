# shaypunter.co.uk

My personal site. It's plain HTML and CSS in `site/`, with no framework or build step.

## Editing

- `site/index.html`: the home page and experience
- `site/writing/index.html`: the list of posts
- `site/writing/<slug>/index.html`: one folder per post
- `site/style.css`: styles for every page

Each page has its own copy of the sidebar, so a sidebar change needs making in every page.

## Previewing locally

```bash
python -m http.server 8080 --directory site
```

Then open http://localhost:8080.

## Deploying

Cloudflare Pages deploys `site/` as it is, with no build command (see `wrangler.toml`). Pushing to `master` deploys to production, and other branches get preview deployments. `site/_redirects` sends the old `/blog` and `/portfolio` URLs to their new homes.
