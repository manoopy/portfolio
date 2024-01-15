<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <NuxtLink :to="`/projects/${data.id}`">
    <div class="overflow-hidden h-56 group relative shadow">
      <img
        :src="getImageUrl(data.image)"
        alt="design"
        class="object-cover w-full h-full object-top rounded"
      />

      <div
        class="transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible opacity-0 invisible absolute inset-0"
      >
        <div
          class="flex-col flex gap-y-4 items-center w-full h-full justify-center bg-gray-800/80 rounded"
        >
          <p class="text-white">پروژه {{ data.title }}</p>
          <p class="text-sm text-sky-400">مشاهده جزئیات</p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss"></style>
