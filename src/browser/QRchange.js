// Evaluates whether the QR on sever has changed. IF so then resolves

// Error is here - Detect changes keeps on being called if the QR is not changed and throws out of context error.
const detectChange = async () => {
    return await page.evaluate(async () => {
        return await new Promise((resolve, reject) => {
            var previous = document
                .querySelector("canvas")
                .toDataURL("image/png");
            setInterval(() => {
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
