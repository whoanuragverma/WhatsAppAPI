// Evaluates whether the QR on sever has changed. IF so then resolves

const detectChange = async () => {
    return await page.evaluate(async () => {
        return await new Promise((resolve, reject) => {
            var previous = document
                .querySelector("canvas")
                .toDataURL("image/png");
            setInterval(() => {
                if (document.querySelector("canvas")) {
                    console.log("Probably Logged In");
                    reject("Logged In");
                }
                var n = document.querySelector("canvas").toDataURL("image/png");
                if (n !== previous) {
                    previous = n;
                    resolve(true);
                }
            }, 200);
        });
    });
};

module.exports = detectChange;
