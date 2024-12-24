/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paleRed: "#F89197",
        darkRed: "#B72831",
        newRed: "#FF2C2C",
      },
      inset: {
        "88": "22rem",
        "100": "25rem",
      },
      rotate: {
        20: "20deg",
        26: "26deg",
        37: "37deg",
      },
    },
  },
  plugins: [],
};
