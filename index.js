const checkLogin = require("./src/browser/checkLogin");

/*******************************************

ADD Terms and Conditions and Non Liability Notice.

exports two modules

********************************************/
module.exports = {
    createServer: require("./src/newServer"),
    getQR: require("./src/browser/getQR"),
    checkLogin: require("./src/browser/checkLoginOnce"),
};
