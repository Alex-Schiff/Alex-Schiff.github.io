# Agent Instructions

## Build

This is a Svelte + Vite + TypeScript project with Tailwind CSS v4.

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

The build output goes to `dist/`. A successful build prints `✓ built in Xms` with no errors.

### Dev server

```bash
npm run dev
```

### Type checking

```bash
npm run check
```

## Build troubleshooting workflow

When `npm run build` fails, follow these steps in order until the build succeeds:

1. **Read the full error output.** PostCSS/CSS errors appear as `[plugin vite:css]`. TypeScript errors appear as `TS####`. Svelte compiler errors appear as `[plugin vite:svelte]`.

2. **PostCSS / Tailwind errors**
   - Tailwind CSS v4 requires `@tailwindcss/postcss` as the PostCSS plugin — not `tailwindcss` directly.
   - Verify `postcss.config.cjs` uses `'@tailwindcss/postcss': {}` and that `@tailwindcss/postcss` is listed in `devDependencies` in `package.json`.
   - If missing, run: `npm install --save-dev @tailwindcss/postcss`

3. **Missing dependencies**
   - If the error references a missing module, install it: `npm install --save-dev <package>`
   - Re-run `npm run build` after each install.

4. **TypeScript errors**
   - Run `npm run check` for detailed diagnostics.
   - Fix type errors in the reported files before re-running the build.

5. **Svelte compiler errors**
   - Check the file and line number in the error. Svelte 5 uses runes syntax (`$state`, `$derived`, etc.) — do not mix Svelte 4 and Svelte 5 APIs.

6. Repeat `npm run build` after each fix. Do not present changes for review until the build exits with `✓ built`.

## Key dependencies

| Package | Purpose |
|---|---|
| `svelte` v5 | UI framework |
| `vite` v8 | Build tool |
| `tailwindcss` v4 | CSS framework |
| `@tailwindcss/postcss` | Tailwind v4 PostCSS integration |
| `typescript` ~5.9 | Type checking |
