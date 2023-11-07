module.exports = {
  enabled: process.env.NODE_ENV === "production",
  content: ["./docs/.vitepress/**/*.{js,ts,vue}", "./docs/**/*.md"],
  options: {
    safelist: ["html", "body"],
  },
};
