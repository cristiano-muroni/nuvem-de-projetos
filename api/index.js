const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));//statics files

// Data Base Connection
const dataBase = require("./dataBase/connection");

// Sync Data Base Models
const UsersModel = require("./models/UsersModel");
const ProjectsModel = require("./models/ProjectsModel");
const OwnersPlacesModel = require("./models/OwnersPlacesModel");
const OperatorsModel = require("./models/OperatorsModel");
const CustomersModel = require("./models/CustomersModel");
const ProjectsAddressModel =require("./models/ProjetcsAddressModel");
const OwnersAddressModel = require("./models/OwnersAddressModel");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

dataBase
  .authenticate()
  .then(() => {
    console.log("successfully connected");

}).catch((error) => {
  console.log(error);
})


const indexRouter = require("./routes/index");
const projectRouter = require("./routes/projectRoutes");
const userRouter = require("./routes/userRoutes");
const customerRouter = require("./routes/customerRoutes");
const operatorRouter = require("./routes/operatorRoutes");
const OwnerPlacesrouter = require("./routes/ownerPlaceRoutes");
const addressRouter = require("./routes/addressRoutes");

const { patch } = require("./routes/index");

app.use("/", indexRouter);
app.use("/", projectRouter);
app.use("/", userRouter);
app.use("/", customerRouter);
app.use("/", operatorRouter);
app.use("/", OwnerPlacesrouter);
app.use("/", addressRouter);

app.listen(port, () => console.log(`Server running at port ${port}`));
