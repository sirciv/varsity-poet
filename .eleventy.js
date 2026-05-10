module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    pathPrefix: "/varsity-poet/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
