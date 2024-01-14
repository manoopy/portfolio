<script lang="ts" setup>
const menuItems = [
  {
    title: "صفحه نخست",
    route: "/",
  },

  {
    title: "آکادمی آموزش",
    route: "/courses",
  },

  {
    title: "پروژه‌ها",
    route: "/projects",
  },

  {
    title: "ارتباط باما",
    route: "/about-us",
  },
];
</script>

<template>
  <div class="sticky top-0 z-50 mb-6">
    <!--  -->
    <div class="bg-blue-500 py-1.5">
      <div class="container">
        <div class="w-10/12 mx-auto">
          <p class="text-xs text-white text-center">جشنواره کلاس های آموزش</p>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="bg-white py-5 border-b-2 border-blue-50">
      <div class="container">
        <div class="w-10/12 mx-auto">
          <div class="flex gap-x-8">
            <NuxtLink to="/" class="text-gray-500">
              <NuxtIcon name="stacks/vue-js" filled class="text-xl" />
            </NuxtLink>

            <template v-for="(item, index) in menuItems" :key="index">
              <NuxtLink :to="item.route" class="text-gray-500">
                {{ item.title }}
              </NuxtLink>
            </template>

            <!-- Space -->
            <div class="mr-auto"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.router-link-active.router-link-exact-active {
  @apply font-bold;
}
</style>
