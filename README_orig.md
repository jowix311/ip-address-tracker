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
- Tutorial for React Query - https://www.youtube.com/watch?v=8K1N3fE-cDs OR https://www.youtube.com/watch?v=r8Dg0KVnfMA @11:05 devtools
- https://medium.com/how-to-react/how-to-get-user-ip-address-in-react-js-73eb295720d0
- https://www.youtube.com/watch?v=PmPkAAu_QF4
- using fetch and useQUery https://rapidapi.com/guides/call-apis-react-query
- use react hook form with ZOD https://dev.to/majiedo/using-zod-with-react-hook-form-using-typescript-1mgk
- when a variable is undefined but you destruct - https://stackoverflow.com/questions/45210111/destructuring-nullable-objects
- learned how to handle destructuring when a variable is undefined
- redux toolkit with async thunk
  - https://www.youtube.com/watch?v=I2aM7YcOXDY
  - https://www.youtube.com/watch?v=93CR_yURoII
- sample IP address: 192.212.174.101
- Learned proper way of updating value using react hook form
- https://jsonplaceholder.typicode.com/todos/1
- adding custom marker icon https://www.youtube.com/watch?v=2R_5wRHpOfg
- custom marker https://codesandbox.io/p/sandbox/react-leaflet-change-marker-color-28l0z?file=%2Fsrc%2FApp.js%3A6%2C32
- https://codesandbox.io/p/sandbox/react-leaflet-marker-cluster-forked-pjfns4?file=%2Fsrc%2Fcomponents%2Fmap.tsx%3A9%2C32-9%2C36

```js
const {
  ip_address,
  gmt_offset,
  connection: { isp_name } = { isp_name: "" }, // provide default value for isp_name when data is undefined
} = data || {}; //default to empty object when data is undefined
```

    console.log(action.payload);
        state.ipDetail.ipAddress = "192.168.1.1";
        state.ipDetail.location = `Cebu City Philippines`;
        state.ipDetail.latitude = 51.505;
        state.ipDetail.longitude = -0.09;
        state.ipDetail.ispProvider = "PLDTz";
        state.ipDetail.timeOffset = "-8";
