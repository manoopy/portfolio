<script lang="ts" setup>
const { data: courses } = await useFetch("/api/courses");
</script>

<template>
  <div class="w-10/12 mx-auto">
    <div class="mb-10 w-max bg-yellow-50 px-8 py-1 mx-auto text-center">
      <h3 class="font-bold text-2xl">آکادمی آموزش</h3>
      <p class="mt-1 text-gray-400">Our Courses</p>
    </div>

    <div class="flex flex-col gap-y-8">
      <template v-for="(course, index) in courses" :key="index">
        <CoursesCard :data="course" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
