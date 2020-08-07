const puppeteer = require("puppeteer");

module.exports = puppeteer.launch({
    headless: true,
    args: ["-disable-features=RendererCodeIntegrity", "--no-sandbox"],
    timeout: 10000,
});
