const url = "https://www.developerdrive.com/";

module.exports = {
  url,
  wrapper: ".hp-post-parts",
  returnResponse: (_, element) => ({
    title: element
      .find(".hp-post-title")
      .text()
      .trim(),
    body: element.find(".hppp-text").text(),
    url: element
      .find(".hp-post-title")
      .find("a")
      .attr("href")
  })
};
