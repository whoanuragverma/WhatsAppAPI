const puppeteer = require("puppeteer");

module.exports = (async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["-disable-features=RendererCodeIntegrity", "--no-sandbox"],
        timeout: 10000,
    });

    page = await browser.newPage();
    await page.setUserAgent(
        "Mozilla/5.0 (Windows 10; NT ; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4182.0 Safari/537.36"
    );
    await page.goto("https://web.whatsapp.com", { waitUntil: "networkidle0" });
    return page;
})();
