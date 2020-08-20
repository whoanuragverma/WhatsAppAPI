const sendMessage = async (phone, text, image = undefined) => {
    const page = await require("./index");
    await page.goto(
        `https://web.whatsapp.com/send?phone=${phone}&app_absent=true`
    );
    await page.waitForXPath("//*[@id='main']/footer/div[1]/div[2]/div/div[2]");
    text = text.split("\n");
    for (let i = 0; i < text.length; i++) {
        await page.keyboard.type(text[i]);
        await page.keyboard.down("Shift");
        await page.keyboard.press("Enter");
        await page.keyboard.up("Shift");
    }
    await page.keyboard.press("Enter");
    page.on("dialog", async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    });
    return await page.evaluate(() => {
        return new Promise(async (resolve) => {
            resolve({
                sentAt: document.querySelectorAll("._18lLQ")[
                    document.querySelectorAll("._18lLQ").length - 1
                ].innerText,
                status: "SENT",
            });
        });
    });
};

module.exports = sendMessage;
