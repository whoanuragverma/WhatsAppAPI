/***********************************************
 * This module launches an instance of Chromium
 * and captures and sends screenshot of an actual
 * QR from Chromium.
 ***********************************************/

const puppeteer = require("puppeteer");
const detectChange = require("./QRchange");

// Prevents page from continously refreshing.
let firstLoad = true;
module.exports = async (io) => {
    const page = await require("./index");
    if (!firstLoad) {
        await page.evaluate(() => {
            window.location.reload();
        });
    }
    firstLoad = false;
    await page.waitForXPath(
        "//*[@id='app']/div/div/div[2]/div[1]/div/div[2]/div/div/span"
    );
    const QR = await page.$("canvas");
    // Emits new QR image via webSocket
    (function recheck() {
        detectChange()
            .then(async (res) => {
                io.emit("QR", await QR.screenshot({ encoding: "base64" }));
                recheck();
            })
            .catch((err) => {
                console.log(err);
            });
    })();
    const img = await QR.screenshot({ encoding: "base64" });
    return img;
};
