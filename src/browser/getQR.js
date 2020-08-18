/***********************************************
 * This module launches an instance of Chromium
 * and captures and sends screenshot of an actual
 * QR from Chromium.
 ***********************************************/

const puppeteer = require("puppeteer");
const detectChange = require("./QRchange");

// Prevents page from continously refreshing.
let firstLoad = true;
module.exports = async (io = undefined) => {
    const page = await require("./index");
    return new Promise(async (resolve, reject) => {
        await page
            .evaluate(async () => {
                return await new Promise((resolve, reject) => {
                    const token = localStorage.getItem("WAToken1");
                    if (token != null) {
                        resolve(token);
                    }
                    reject(null);
                });
            })
            .then((res) => {
                reject(res);
            })
            .catch(async () => {
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
                            if (io) {
                                io.emit(
                                    "QR",
                                    await QR.screenshot({ encoding: "base64" })
                                );
                            }
                            recheck();
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                })();
                const img = await QR.screenshot({ encoding: "base64" });
                resolve(img);
            });
    });
};
