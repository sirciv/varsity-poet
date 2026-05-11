module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");

return {
    pathPrefix: process.env.ELEVENTY_ENV === "production" ? "/varsity-poet/" : "/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
