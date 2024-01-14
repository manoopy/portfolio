export const getImageUrl = (path: string) => {
  const assets = import.meta.glob("@/assets/images/**/*", {
    eager: true,
    import: "default",
  });

  return assets["/assets/" + path];
};
