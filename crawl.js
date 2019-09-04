const axios = require("axios");
const cheerio = require("cheerio");

const searchNews = async url => axios.get(url);

function getContent(config) {
  const $ = cheerio.load(config.html);

  return $(config.wrapper)
    .map((_, element) => config.returnResponse(_, $(element)))
    .get();
}

const crawl = async config => {
  try {
    console.log(`crawling: ${config.url}`);
    const { data: html } = await searchNews(config.url);
    config.html = html;

    return getContent(config);
  } catch (err) {
    console.error(err);
  }
};

module.exports = crawl;
