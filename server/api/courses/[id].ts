export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id") || 1;

  const data = await $fetch("/api/courses");
  const course = data.find((item) => item.id == id);

  return course;
});
