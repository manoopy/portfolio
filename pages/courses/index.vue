<script lang="ts" setup>
const { data: courses } = await useFetch("/api/courses");
</script>

<template>
  <div class="container">
    <div class="w-10/12 mx-auto">
      <div class="grid grid-cols-2 gap-12">
        <div>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </div>

        <div>
          <img src="~/assets/images/design.svg" alt="img" />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <hr />

      <br />
      <br />

      <div class="grid grid-cols-2 gap-8">
        <template v-for="(course, index) in courses" :key="index">
          <CoursesCard :data="course" />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
