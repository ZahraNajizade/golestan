/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      // => @media (min-width: ...px) { ... }
      t1: "768px",
      t2: "881px",
      d1: "1024px",
      d2: "1366px",
    },
  },
  plugins: [],
};

