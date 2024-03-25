import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-composable-bug/",
  title: "vitepress-composable-bug",
  description: "A bug I observed",
  cleanUrls: true,
  srcExclude: ["**/README.md"],
});
