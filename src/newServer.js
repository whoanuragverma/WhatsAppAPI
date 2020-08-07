/***********************************************
 * Add extra page for starting to show user that
 * inital page load may take a while
 *
 ***********************************************/

const app = require("express")();

module.exports = () => {
    app.use("/auth", require("./routes/authUser"));
    app.listen(process.env.PORT || 7000, () => {
        console.log(
            `Service Started at http://localhost:${process.env.PORT || 7000}`
        );
    });
};
