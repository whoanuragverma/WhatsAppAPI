module.exports = {
    createServer: require("./src/newServer"),
    getQR: require("./src/browser/getQR"),
    checkLogin: require("./src/browser/checkLoginOnce"),
    awaitLogin: require("./src/browser/checkLogin"),
    sendMessage: require("./src/browser/sendMessage"),
};
