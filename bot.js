const crawl = require("./crawl");

const sources = [
  require("./sources/smashingmagazine"),
  require("./sources/davidwalsh"),
  require("./sources/catswhocode"),
  require("./sources/developerdrive")
];

const promises = sources.map(source => {
  return crawl(source);
});

async function start() {
  const fullData = await Promise.all(promises);
  console.dir(fullData, { depth: null });
}

start();
