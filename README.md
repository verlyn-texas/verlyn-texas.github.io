# verlynfischer.com

Source for [verlynfischer.com](https://verlynfischer.com), served by GitHub Pages from the `main` branch of `verlyn-texas/verlyn-texas.github.io`.

Plain HTML, one stylesheet (`assets/style.css`) and a small menu script (`assets/menu.js`); there is no build step. Fonts (Source Serif 4, IBM Plex Sans) come from Google Fonts. `assets/hero-art.svg` is the hero image; `assets/pill-and-dish-fork.jpg` is slide 5 of the summary deck, used as the project's card image. `CNAME` sets the custom domain. `.nojekyll` turns off GitHub's Jekyll processing.

## Layout

- `index.html`: the home page and list of projects.
- `ai-policy/`: *The Pill and the Dish* project page, with the report, essay and summary deck as PDFs.
- `404.html`: shown for unknown addresses.

## Adding a project

1. Create a folder named for the project (for example `physics/`) with an `index.html` copied from `ai-policy/index.html`.
2. Add a `work` card to the Selected Works grid in `index.html` (only the first card should carry `featured`), and a link under "Selected works" in the menu on every page.
3. Link each document to its Zenodo DOI. The DOI record is the canonical copy; the PDF here is a convenience copy.

## License

Documents are © 2026 Verlyn Fischer, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
