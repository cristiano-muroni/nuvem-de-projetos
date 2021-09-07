require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

// Data Base Connection
const dataBase = require("./dataBase/connection");

// Sync Data Base Models
const UsersModel = require("./models/UsersModel");
const ProjectsModel = require("./models/ProjectsModel");
const OwnersPlacesModel = require("./models/OwnersPlacesModel");
const OperatorsModel = require("./models/OperatorsModel");
const CustomersModel = require("./models/CustomersModel");
const AddressModel = require("./models/AddressModel");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

const indexRouter = require("./routes/index");
const projectsRouter = require("./routes/projectRoutes");
const userRouter = require("./routes/userRoutes");
const customerRouter = require("./routes/customerRoutes");
const { patch } = require("./routes/index");

app.use("/", indexRouter);
app.use("/", projectsRouter);
app.use("/", userRouter);
app.use("/", customerRouter);

app.listen(port, () => console.log(`Server running at port ${port}`));
