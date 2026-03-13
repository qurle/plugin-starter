## Plugin Starter

A starter template for building Figma plugins with **TypeScript**, **Astro**, and **Vite**. Contains everything you need to get started with a fully typed, modern plugin development setup.

### Why Astro?

I find [Astro](https://astro.build) a perfect tool for building simple web interfaces. Same vanila flavour + components. 

## **How to use**

### Quick start

1. Install [Node.js](https://nodejs.org/en/download)
2. Clone / download the repo 
3. Run `npm i` in terminal to install dependencies
4. Run `npm run dev` to keep plugin updated on each change

### Running plugin in Figma

You need Figma desktop app to test local plugins.
Go to Actions `⌘K` › Plugins & Widgets › Import from manifest (at the bottom).

Open console (`⌘⌥I` › Console) to see logs and errors.

### Remember to update

There are some places where you'd want to fill in your plugin specific data like name and stuff:
```
assets/
  ├── cover.png         # Add your icon
  └── icon.png          # Add your cover
src/
  └── config.ts         # Edit messages
readme.md               # Remove this guide and make a really cool description
manifest.json           # Edit name, add generated ID on publish
package.json            # Edit name, version, description, author, license
```

### Project structure

```
assets/
  ├── cover.png         # Plugin cover (used in readme, you will need it on publish)
  └── icon.png          # Plugin icon (used in readme, you will need it on publish)
src/
  ├── pages/            
  │   └── index.astro   # Main plugin UI
  ├── components/       # Reusable Astro components
  ├── code.ts           # Main plugin logic
  ├── config.ts         # Your config and constants
  └── helpers/          # Shared helpers and utilities
readme.md               # Description 
manifest.json           # Plugin name and configuration
package.json            # NPM package info

```
You probably won't need other files, it's mostly configuration files, demos and helpers. 


### Development workflow
- **`npm run dev`** - Watches `src/` and rebuilds `dist/` on changes
- **`npm run build`** - Builds both plugin code and UI for production

---

## **Template for your plugin readme**

# Plugin name for Figma

Plugin description

![<Plugin name cover>](assets/cover.png)

### How to use

**Just run it** from the Quick Actions or Plugin menu. 

Alternatively, select layers and the plugin will `<do this>`.

### How it works

`<Explain the approach>`
Plugin will do `<things>` with selected layers.

### Feedback

I accept feature suggestions and ideas to improve the plugin. If you have any ideas or issues, let me know in the comments.

Or contact me via e-mail at [nick@qurle.net](mailto:nick@qurle.net?subject=<Plugin%20for%Figma>) or [Telegram](http://t.me/qurle).

# <3
