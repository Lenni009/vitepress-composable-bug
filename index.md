---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
---

<script setup>
import { useData } from "vitepress";
import { computed } from "vue";

const { isDark } = useData();

const theme = computed(() => (isDark.value ? "dark" : "light"));

console.log(theme.value)
</script>

<div :class="theme">
Hello World
</div>

<style>
.dark {
	background-color: black;
}

.light {
	background-color: white;
}
</style>