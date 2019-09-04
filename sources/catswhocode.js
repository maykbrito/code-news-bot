const url = "https://catswhocode.com/blog/";

module.exports = {
  url,
  wrapper: ".elementor-post__text",
  returnResponse: (_, element) => ({
    title: element
      .find(".elementor-post__title")
      .text()
      .trim(),
    body: element.find(".elementor-post__excerpt").text(),
    url: element
      .find(".elementor-post__title")
      .find("a")
      .attr("href")
  })
};
