const checkLogin = async () => {
    const page = await require("./index");
    console.log("1");
    return await page.evaluate(async () => {
        return await new Promise((resolve) => {
            const token = localStorage.getItem("WAToken1");
            if (token != null) {
                resolve(true);
            }
            resolve(false);
        });
    });
};

module.exports = checkLogin;
