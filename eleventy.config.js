module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("css");
  return {
    pathPrefix: "/booster2024-git-workshop/",
  };
};
