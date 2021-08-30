module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    'public': '.'
  });

  return {
    dir: {
      input: 'input',
      includes: '../_includes',
      layouts: '../_layouts',
      data: '../_data'
    }
  };
}
