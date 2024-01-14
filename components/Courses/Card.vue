<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <NuxtLink :to="`/courses/${data.id}`">
    <div
      class="flex items-center gap-6 rounded-lg p-8 justify-between overflow-hidden rounded shadow hover:shadow-xl transition"
    >
      <div class="w-3/5">
        <h5 class="font-bold text-2xl">{{ data.title }}</h5>

        <p class="mt-4">
          {{ data.description }}
        </p>
      </div>

      <NuxtIcon :name="data.image" filled class="shrink-0 text-[10rem]" />
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss"></style>
