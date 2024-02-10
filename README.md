# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

- Error messages related to Tailwind custom code (but tailwind works) e.g., in index.css @tailwind or @apply etc, install plugin TailwindCSS Intellisense, on vs code change language fr
  Zom CSS to TailwindCSS
- SIMPLE Browser
  https://dev.to/equiman/vscode-browser-inside-2b06#:~:text=Open%20the%20command%20palette%20with%20ctrl%2Bshift%2Bp%20and%20search,code%20and%20the%20result%20at%20the%20same%20time.

- More Prettier Setup to fix errors on "unknown tailwind"
  https://tailwindcss.com/docs/editor-setup

- https://medium.com/@timndichu/getting-started-with-leaflet-js-and-react-rendering-a-simple-map-ef9ee0498202
- need to install npm i -D @types/leaflet to fix react leaflet errors and specify the type const position: [number, number]
- For additional reference https://www.youtube.com/watch?v=jD6813wGdBA @9:20 for styling issues
