module.exports = {
  apps: [
    {
      name: "osaka_panel",
      script: "./dist/server.js",
      watch: true,
      watch_delay: 1000,
      ignore_watch: ["node_modules", ".git"],
    },
  ],
};
