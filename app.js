const crawl = require("./crawl");

const sources = [
  require("./sources/smashingmagazine"),
  require("./sources/davidwalsh"),
  require("./sources/catswhocode"),
  require("./sources/developerdrive")
];

async function start() {
  const promises = sources.map(source => {
    return crawl(source);
  });

  try {
    const fullData = await Promise.all(promises);
    console.dir(fullData, { depth: null });
  } catch (err) {
    console.error(err);
  }
}

start();
