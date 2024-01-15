export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id") || 1;

  const data = await $fetch("/api/projects");
  const project = data.find((item) => item.id === +id);

  return project;
});
