<script lang="ts" setup>
const icons = [
  "html",
  "css",
  "js",
  "vue-js",
  "nuxt-js",
  "tailwindcss",
  "bootstrap",
  "github",
  "gitlab",
  "python",
  "django",
  "postgresql",
  "mysql",
];
</script>

<template>
  <div class="w-10/12 mx-auto">
    <div class="flex flex-wrap justify-center gap-12">
      <template v-for="(icon, index) in icons" :key="index">
        <NuxtIcon
          :name="`stacks/${icon}`"
          filled
          class="text-[5rem] hover:scale-150 hover:skew-x-3 hover:skew-y-12 transition-all duration-300 ease-in-out"
        />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
