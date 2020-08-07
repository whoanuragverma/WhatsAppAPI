/***********************************************
 * This module launches an instance of Chromium
 * and captures and sends screenshot of an actual
 * QR from Chromium.
 ***********************************************/

const puppeteer = require("puppeteer");

module.exports = async () => {
    const browser = await require("./index");
    const page = await browser.newPage();
    await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4182.0 Safari/537.36"
    );
    await page.goto("https://web.whatsapp.com");
    // move this code to a new file
    const checkLogin = async () => {
        return await page.evaluate(async () => {
            return await new Promise((resolve) => {
                setInterval(() => {
                    const token = localStorage.getItem("WAToken1");
                    if (token != null) {
                        resolve(token);
                    }
                }, 500);
            });
        });
    };
    // till here
    await page.waitForXPath(
        "//*[@id='app']/div/div/div[2]/div[1]/div/div[2]/div/div/span"
    );
    const QR = await page.$("canvas");
    const img = await QR.screenshot({ encoding: "base64" });
    return img;
};
