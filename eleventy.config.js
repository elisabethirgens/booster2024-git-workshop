module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addCollection("promotedAdventures", function (collection) {
    return collection.getFilteredByTag("promotedAdventure");
  });
  eleventyConfig.addCollection("adventures", function (collection) {
    return collection.getFilteredByTag("adventure");
  });
  return {
    pathPrefix: "/booster2024-git-workshop/",
  };
};
