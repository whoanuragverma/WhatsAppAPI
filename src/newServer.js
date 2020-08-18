/***********************************************
 * Add extra page for starting to show user that
 * inital page load may take a while
 *
 ***********************************************/

const app = require("express")();
const path = require("path");
module.exports = () => {
    const io = require("socket.io").listen(
        app.listen(7000, () => {
            console.log(`Navigate to http://localhost:${7000} to login.`);
        })
    );
    app.set("views", path.join(__dirname, "../views"));
    app.use("/", require("./routes/authUser")(io));
};
