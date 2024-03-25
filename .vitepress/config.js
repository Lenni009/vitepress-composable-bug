import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-computed-bug/",
  title: "vitepress-computed-bug",
  description: "A bug I observed",
  cleanUrls: true,
  srcExclude: ["**/README.md"],
});
