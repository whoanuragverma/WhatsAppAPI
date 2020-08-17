const router = require("express").Router();
const getQR = require("../browser/getQR");

module.exports = (io) => {
    router.get("/", (req, res) => {
        res.render("login.ejs");
    });
    io.on("connection", () => {
        // Check if user is LoggedIn before calling getQR.
        getQR(io).then((img) => {
            io.emit("QR", img);
        });
    });
    return router;
};
