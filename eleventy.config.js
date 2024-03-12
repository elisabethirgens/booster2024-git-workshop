module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addCollection("promotedAdventures", function (collection) {
    return collection.getFilteredByTag("promotedAdventure");
  });
  eleventyConfig.addCollection("randomizedAdventures", function (collection) {
    return collection.getFilteredByTag("adventure").sort(() => {
      return 0.5 - Math.random();
    });
  });
  return {
    pathPrefix: "/booster2024-git-workshop/",
  };
};
