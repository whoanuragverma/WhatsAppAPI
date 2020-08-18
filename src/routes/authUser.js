const router = require("express").Router();
const getQR = require("../browser/getQR");
const checkLogin = require("../browser/checkLogin");
module.exports = (io) => {
    router.get("/", (req, res) => {
        res.render("login.ejs");
    });
    checkLogin().then((res) => io.emit("LogIn", res));
    io.on("connection", () => {
        // Check if user is LoggedIn before calling getQR.
        getQR(io)
            .then((img) => {
                io.emit("QR", img);
            })
            .catch((res) => io.emit("LogIn", res));
    });
    return router;
};
