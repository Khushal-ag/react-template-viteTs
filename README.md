<div align=center>

![views] ![stars] ![forks] ![issues] ![license] ![repo-size]

<div style="display: flex; justify-content: center; align-items:center; gap: 1rem;">
<img src="public/react.svg" style="width: 100px; height: 100px;">
<img src="public/vite.svg" style="width: 90px; height: 100px;">
</div>

# React Starter Template w/ Vite & TypeScript

## A Modern React Starter Template with Vite, TypeScript, TailwindCSS, and ESLint/Prettier pre-configured

</div>

## ✨ Features

- ⚡ **[Vite](https://vitejs.dev/)** - Lightning fast frontend tooling
- ⚛️ **[React 19](https://reactjs.org/)** - A JavaScript library for building user interfaces
- 🎨 **[TailwindCSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapidly building custom designs
- 📦 **[TypeScript](https://www.typescriptlang.org/)** - A typed superset of JavaScript that compiles to plain JavaScript
- 🛣️ **[React Router DOM](https://reactrouter.com/)** - Declarative routing for React
- 🎯 **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons
- 🧹 **[ESLint](https://eslint.org/)** - The pluggable linting utility for JavaScript and JSX
- ✨ **[Prettier](https://prettier.io/)** - An opinionated code formatter
- 🚀 **[Bun](https://bun.sh/)** - Fast all-in-one JavaScript runtime and package manager
- 🎨 **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Utility to efficiently merge Tailwind CSS classes
- 📝 **[CLSX](https://github.com/lukeed/clsx)** - Tiny utility for constructing className strings conditionally

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (recommended) or npm/yarn

### Installation

**Clone the repository:**

```bash
git clone https://github.com/Khushal-ag/react-template-viteTs.git <project-name>
cd <project-name>
```

**Install dependencies:**

```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install

# Or using yarn
yarn install
```

**Start the development server:**

```bash
bun dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📜 Available Scripts

| **Script**   | **Description**                                                              |
| ------------ | ---------------------------------------------------------------------------- |
| `dev`        | Runs the app in development mode with hot reload                              |
| `build`      | Builds the app for production to the `dist` folder                          |
| `serve`      | Serves the production build from the `dist` folder                          |
| `preview`    | Bundles and serves the production build from the `dist` folder              |
| `type-check` | Runs TypeScript type-checking                                               |
| `lint`       | Runs ESLint to check for code quality issues                                |
| `fmt`        | Formats the code with Prettier                                              |
| `fmt:check`  | Checks if the code is formatted with Prettier                               |
| `clean`      | Removes `dist` and `node_modules` directories                               |
| `cleani`     | Cleans and reinstalls dependencies (Bun only)                               |

## 🛠️ Development

### Project Structure

```
src/
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── styles/
│   └── index.css        # Global styles and Tailwind imports
└── types/
    └── reset.d.ts       # TypeScript type definitions
```

### Code Quality

This template includes:

- **ESLint** configuration with React and TypeScript rules
- **Prettier** for consistent code formatting
- **TypeScript** for type safety
- **TailwindCSS** for utility-first styling

### Package Manager

This template uses [Bun](https://bun.sh/) as the default package manager for its speed and efficiency. However, you can use npm or yarn by:

1. Removing the `bun.lock` file
2. Running `npm install` or `yarn install` to generate the respective lock file

## 📋 After Installation Checklist

- [ ] Update `package.json` with your project details
- [ ] Update `README.md` with your project information
- [ ] Update `LICENSE` with your name and year
- [ ] Update `index.html` title and meta tags
- [ ] Clear `App.tsx` and start building your application
- [ ] Configure your deployment platform (Vercel, Netlify, etc.)

## 🚀 Deployment

### Vercel (Recommended)

This template includes a `vercel.json` configuration file for easy deployment on Vercel.

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service like:

- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributors

<div align=center>

[![][contributors]][contributors-graph]

_Note: It may take up to 24h for the [contrib.rocks][contrib-rocks] plugin to update because it's refreshed once a day._

</div>

<!----------------------------------{ Labels }--------------------------------->

[views]: https://komarev.com/ghpvc/?username=react-template-viteTs&label=view%20counter&color=red&style=flat
[repo-size]: https://img.shields.io/github/repo-size/Khushal-ag/react-template-viteTs
[issues]: https://img.shields.io/github/issues-raw/Khushal-ag/react-template-viteTs
[license]: https://img.shields.io/github/license/Khushal-ag/react-template-viteTs
[forks]: https://img.shields.io/github/forks/Khushal-ag/react-template-viteTs?style=flat
[stars]: https://img.shields.io/github/stars/Khushal-ag/react-template-viteTs
[contributors]: https://contrib.rocks/image?repo=Khushal-ag/react-template-viteTs&max=500
[contributors-graph]: https://github.com/Khushal-ag/react-template-viteTs/graphs/contributors
[contrib-rocks]: https://contrib.rocks/preview?repo=Khushal-ag%2Freact-template-viteTs

<!----------------------------------{ Images }--------------------------------->

