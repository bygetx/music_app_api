module.exports = {
  routes: [
    {
      method: "PUT",
      path: "/customsubtitles",
      handler: "customsubtitles.generate",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
