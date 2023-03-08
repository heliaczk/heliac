/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "800px",
        xl: "800px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
