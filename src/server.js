const express = require("express");
const AuthController = require("./controllers/AuthController");
const AdminController = require("./controllers/AdminController");

const authenticateMiddleware = require("./middlewares/authenticate");


const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/auth", AuthController);
app.use("/admin", authenticateMiddleware ,AdminController);

app.listen(port, () => {
    console.log("Server is running");
});
