module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
