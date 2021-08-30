module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    'public': '.'
  });

  return {
    input: 'input',
    includes: '../_includes',
    layouts: '../_layouts',
    data: '../_data'
  };
}
