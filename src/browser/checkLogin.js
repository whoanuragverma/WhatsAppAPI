const checkLogin = async (io) => {
    const page = await require("./index");
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

module.exports = checkLogin;
