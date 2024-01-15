<script lang="ts" setup>
const { id } = useRoute().params;
const { data: course } = await useFetch(`/api/courses/${id}`);
</script>

<template>
  <div class="container">
    <div class="w-10/12 mx-auto">
      <div class="grid grid-cols-4 gap-8">
        <!-- Content -->
        <div class="col-span-3">
          <div class="flex flex-wrap gap-8">
            <div>
              <NuxtIcon :name="course?.image" filled class="text-[6rem]" />
            </div>

            <div>
              <h1 class="text-xl font-bold mb-4">{{ course?.title }}</h1>

              <p class="text-gray-600 mb-6">
                {{ course?.description }}
              </p>
            </div>
          </div>

          <!--  -->
          <div class="mt-12">
            <p
              class="w-max text-xl font-bold pl-8 pb-2 border-b-4 border-blue-50"
            >
              سرفصل ها
            </p>

            <div class="flex flex-col gap-y-2 mt-4">
              <template v-for="(item, index) in 7" :key="index">
                <div
                  class="flex flex-wrap items-center gap-4 py-2 px-4 border-2 border-blue-50 rounded"
                >
                  <span class="text-xs text-blue-500">{{ index + 1 }}</span>

                  <span class="text-sm">سرفصل اول</span>

                  <span class="text-sm pt-1 mr-auto">00:05:00</span>

                  <button class="text-xs text-blue-500">دانلود</button>
                </div>
              </template>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="">
          <div class="sticky top-28 p-4 border-2 border-blue-50">
            <div class="mb-4">
              <h2 class="mb-2 font-bold">{{ course?.title }}</h2>

              <div class="flex flex-col gap-y-2">
                <p>
                  <span class="text-xs font-bold">مدرس: </span>
                  <span class="text-xs">محمد علی نورمحمدی</span>
                </p>

                <p>
                  <span class="text-xs font-bold">قیمت: </span>
                  <span class="text-xs">۵۰۰ هزار تومان</span>
                </p>

                <p>
                  <span class="text-xs font-bold">مدت زمان: </span>
                  <span class="text-xs">۱۲ ساعت</span>
                </p>

                <p>
                  <span class="text-xs font-bold">سطح دوره: </span>
                  <span class="text-xs">مقدماتی</span>
                </p>

                <p>
                  <span class="text-xs font-bold">تعداد دانشجو: </span>
                  <span class="text-xs">۱۲۰ نفر</span>
                </p>
              </div>
            </div>

            <!--  -->
            <button
              class="w-full text-blue-500 border-2 border-blue-100 rounded px-5 py-1 hover:border-blue-300 transition"
            >
              ثبت نام
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
