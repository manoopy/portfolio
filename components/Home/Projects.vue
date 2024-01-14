<script lang="ts" setup>
const { data: projects } = await useFetch("/api/projects");
</script>

<template>
  <div class="w-10/12 mx-auto">
    <div class="mb-10 w-max bg-yellow-50 px-8 py-1 mx-auto text-center">
      <h3 class="font-bold text-2xl">پروژه های انجام شده</h3>
      <p class="mt-1 text-gray-400">Completed projects</p>
    </div>

    <div class="grid grid-cols-3 gap-8">
      <template v-for="(project, index) in projects" :key="index">
        <ProjectsCard :data="project" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
