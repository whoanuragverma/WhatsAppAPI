const router = require("express").Router();
const getQR = require("../browser/getQR");
const checkLogin = require("../browser/checkLogin");
module.exports = (io) => {
    router.get("/", (req, res) => {
        io.on("connection", () => {
            getQR(io)
                .then((img) => {
                    io.emit("QR", img);
                })
                .catch((res) => io.emit("LogIn", res));
        });
        checkLogin().then((res) => io.emit("LogIn", res));
        res.render("login.ejs");
    });
    return router;
};
