# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio + blog of Maurizio Tolomeo. Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4, TypeScript, Biome. Package manager: **pnpm**, Node 24+.

## Commands

```bash
pnpm dev                 # dev server (Turbopack)
pnpm build               # production build (also runs TypeScript, so test-file type errors break it)
pnpm check               # Biome lint + format check (what CI runs); `pnpm lint` / `pnpm format` for each alone
pnpm typecheck           # tsc --noEmit (includes tests/)
pnpm test                # vitest run
pnpm test:coverage       # coverage with 70% thresholds on the files listed in vitest.config.ts
pnpm vitest run tests/lib/articles.test.ts   # single test file
pnpm vitest run -t "returns null"            # tests matching a name
```

CI on pull requests (`.github/workflows/pullrequest.yaml`) runs: `pnpm audit --audit-level=critical`, `pnpm check`, `pnpm typecheck`, `pnpm test:coverage`, `pnpm build`. Deploys go to Vercel: push to `main` → staging, tag `vX.X.X` → production.

## Architecture

**Server page → client component pattern.** Route files in `src/app/(pages)/**/page.tsx` are thin server components: they load the dictionary and data, build `generateMetadata`, then render a `Page*` client component from `src/components/Pages/` passing everything as props. UI logic lives in those `Page*` components, not in route files. All components are re-exported through barrel files (`@/components`, `@/components/UI`, ...); add new ones to the relevant `index.ts`.

**i18n.** No locale routing. `getDictionary()` (`src/app/dictionaries.ts`) reads the `locale` cookie (default `it`) and returns `dictionaries/it.ts` or `en.ts`. Pages derive the language with `dict.language === 'Italiano' ? 'it' : 'en'`. Every user-facing string must be added to **both** dictionaries (the tests in `tests/dictionaries/` check their shape).

**Static content.** Portfolio data (projects, skills, CV, history, contacts, quiz, links) is JSON in `src/data/`, accessed via the server functions in `src/lib/data.ts`; some files are keyed by language.

**Blog (Markdown, no database).** Articles are `content/blog/{it,en}/<id>.md`; the file name is the URL id (`/blog/<id>`), and IT/EN versions are separate files with different ids. `src/lib/articles.ts` reads them with `gray-matter` from `process.cwd()` (`getArticles`, `getArticle`), drops `published: false` drafts, and normalizes YAML dates to strings. Content is rendered by `MarkdownRenderer` (`react-markdown` + `remark-gfm`, no raw HTML) via `SectionHero`'s `markdown` prop; element styles are the `.markdown` rules in `src/app/globals.css` (there's no Tailwind typography plugin). Blog filtering happens client-side in `PageBlog`. Because files are read at runtime, `next.config.mjs` lists `content/blog` in `outputFileTracingIncludes`; keep it in sync if routes move. The frontmatter format is documented in `README.md`.

**Contact form.** `src/app/api/sendMessage/route.ts` → `src/lib/email.ts` (Nodemailer). Env vars: `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`; `DEVELOPMENT=true` enables logging and Vercel Analytics/Speed Insights; `NEXT_PUBLIC_SITE_MAINTENANCE=true` renders `MaintenancePage` for the whole site (`src/app/layout.tsx`).

**Other.** Theme state is a Jotai atom (`src/atoms.ts`). PWA is via `@ducanh2912/next-pwa` (disabled in dev; generates files into `public/`). Path alias `@/*` → `src/*`. Shared types are in `src/types/global.d.ts`.

## Tests

Vitest with the `node` environment by default; component tests opt into the DOM with a `// @vitest-environment jsdom` comment at the top of the file. `tests/setup.ts` imports `@testing-library/jest-dom/vitest` (v7: this entry point is required for the matcher types). Tests live in `tests/`, mirroring `src/`.

## Conventions

Biome formatting: tabs, single quotes, no semicolons (a few older files such as `src/lib/email.ts` still use double quotes and semicolons). Code comments are often in Italian.
