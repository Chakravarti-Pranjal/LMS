# LMS Frontend

### Setup instruction 

1. Clone the project

```
    git clone https://github.com/Chakravarti-Pranjal/LMS.git
```

2. Move into the directory

```
    cd LMS
```

3. install dependecies

```
    npm i
```

4. run the server

```
    npm run dev
```

5. Add the following details in the plugin property of tailwind config
```
    plugins: [require("daisyui"), require("@tailwindcss/line-clamp")]
```

### Adding plugins and dependencies
```
    npm i @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort eslint

1. Install simple import sore
```
    npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in `.eslint.cjs`
```
    'simple-import-sort/imports' : 'error'
```

3. add simple-import sort plugin in `.eslint.cjs`
```
    plugins: [...,'simple-import-sort']
```

4. To enable auto import sort on file save in vscode

    - Open `setting.json`
    - add the following config
```
    "editor.codeActionsOnSave" : {
        "source.fixAll.eslint" : true
    }
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
