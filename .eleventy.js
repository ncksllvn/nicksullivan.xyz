const pluginRss = require('@11ty/eleventy-plugin-rss');
const dateFunctions = require('date-fns');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    'public': '.'
  });

  eleventyConfig.addFilter('formatDate',
    (dateString, format = 'MMMM do, yyyy') => {
      const adjustedForEst = dateFunctions.addHours(dateString, 4);
      return dateFunctions.format(adjustedForEst, format);
    }
  );

  eleventyConfig.addPlugin(pluginRss);

  return {
    dir: {
      input: 'input',
      includes: '../_includes',
      layouts: '../_layouts',
      data: '../_data'
    }
  };
}
