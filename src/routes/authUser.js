const router = require("express").Router();
const getQR = require("../browser/getQR");

router.get("/", (req, res) => {
    getQR().then((qr) => {
        res.render("login.ejs", { qr: qr });
    });
});

module.exports = router;
