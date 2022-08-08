module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("dist/css");

    return {
        dir: {
            input: 'src'
        }
    };
};
