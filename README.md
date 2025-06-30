# ToDoApp

A modern, animated, and responsive To-Do List web application built with React, Vite, and Tailwind CSS.

## Features
- Add, delete, and mark tasks as completed
- Animated task entry and completion popup
- Sleek, colorful UI with dark gradient background
- Responsive design for desktop and mobile
- Custom popup notification for completed tasks

## Demo
![ToDoApp Screenshot](./public/vite.svg)

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm (comes with Node.js)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ToDoApp.git
   cd ToDoApp
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
```
ToDoApp/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── assets/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Customization
- Edit `src/App.jsx` to change the UI or add new features.
- Tailwind CSS classes are used for styling and animation.

## Deployment
You can deploy this app to Vercel, Netlify, or any static hosting provider. To build for production:
```bash
npm run build
```
The output will be in the `dist/` folder.

## License
This project is open source and available under the [MIT License](LICENSE).

---

> Made with ❤️ using React, Vite, and Tailwind CSS.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
