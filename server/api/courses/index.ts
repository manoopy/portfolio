export default defineEventHandler((event) => {
  const data = [
    {
      id: 1,
      title: "دوره حرفه ای فرانت اند",
      description:
        "به صورت حرفه ای هرچی که تو زمینه فرانت لازمه رو یاد بگیر و وارد بازار کار شو",
      image: "stacks/js",
    },

    {
      id: 2,
      title: "دوره حرفه ای nuxt 3",
      description: "دوره هیجان انگیز و به روز nuxt 3",
      image: "stacks/nuxt-js",
    },

    {
      id: 3,
      title: "دوره حرفه ای vue 3",
      description: "دوره هیجان انگیز و به روز vue 3",
      image: "stacks/vue-js",
    },
  ];
  return data;
});
