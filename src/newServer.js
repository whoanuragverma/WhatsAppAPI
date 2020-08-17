/***********************************************
 * Add extra page for starting to show user that
 * inital page load may take a while
 *
 ***********************************************/

const app = require("express")();

module.exports = () => {
    const io = require("socket.io").listen(
        app.listen(process.env.PORT || 7000, () => {
            console.log(
                `Service Started at http://localhost:${
                    process.env.PORT || 7000
                }`
            );
        })
    );
    app.use("/auth", require("./routes/authUser")(io));
};
