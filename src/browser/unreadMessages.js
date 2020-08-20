const unreadMessage = async () => {
    const page = await require("./index");
    await page.waitForXPath("//*[@id='pane-side']");
    return await page.evaluate(async () => {
        return new Promise((resolve) => {
            archive = [];
            document
                .querySelector("#pane-side > div:nth-child(1) > div > div")
                .childNodes.forEach((child) => {
                    let msg = child.querySelector("div").innerText;
                    msg = msg.split("\n");
                    if (msg.length == 4 && msg[3] !== ": ") {
                        archive.push({
                            sender: msg[0],
                            message: msg[2],
                            time: msg[1],
                            count: msg[3],
                        });
                    }
                    resolve(archive);
                });
        });
    });
};

module.exports = unreadMessage;
