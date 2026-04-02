## Description

This is the template for Figma plugin built with official [Figma Plugin API](https://developers.figma.com/docs/plugins/).

## Configuration Checklist

Before publishing, update these files with your plugin details:

| File | Task |
|------|------|
| `assets/cover.png` | Add your plugin cover image |
| `assets/icon.png` | Add your plugin icon |
| `src/config.ts` | Configure messages and constants |
| `manifest.json` | Update plugin name and add generated ID |
| `package.json` | Update name, version, description, author, license |
| `license.md` | Update year and your name |
| `readme.md` | Write your plugin description. Already contains a template|

## Directory Reference

- **assets/** - Plugin branding (cover, icon)
- **src/pages/** - UI entry point (`index.astro`)
- **src/components/** - Reusable Astro components
- **src/code.ts** - Main plugin logic
- **src/config.ts** - Configuration and constants
- **src/helpers/** - Shared utilities
- **manifest.json** - Plugin metadata
- **package.json** - NPM package configuration
- **readme.md** - Plugin documentation

Other files contain build configuration and development helpers.

## Build Tasks

- **`npm run dev`** - Watches `src/` and rebuilds `dist/` on changes
- **`npm run build`** - Builds both plugin code and UI for production
