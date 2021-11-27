const usersModel = require("../models/UsersModel");

const createViewUserAdmin = (req, res) => {
  res.render("users/createUsersAdmin");
};

const createUserAdmin = async (req, res) => {
  const essentialBody = {
    email: req.body.email,
    password: req.body.password,
    access: req.body.access,
  };
  console.log(essentialBody);
  try {
    const createUser = await usersModel.create(essentialBody);
    console.log(req.body);
    res.send("create users");
  } catch (error) {
    res.send(error);
  }
};

const listAllUsers = async (req, res) => {
  try {
    const users = await usersModel.findAll();
    res.render("users/listUsers", { users });
  } catch (error) {
    res.send(error);
  }
};

const editViewUsers = async (req, res) => {
  try {
    const usersEdit = await usersModel.findByPk(req.params.id);    
    res.render("./users/updateUsers",{usersEdit});
  } catch (error) {
    res.send(error)
  }
}

const editUsers = async (req, res) => {
  try {
     await usersModel.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    console.log(req.body)
    res.redirect("/users/listUsers");
  } catch (error) {
    res.send(error);
  }
};

const deleteUsers = async (req, res) => {
  console.log(req.params.id);
  try {
    await usersModel.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.redirect("/users/listUsers");
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  createUserAdmin,
  createViewUserAdmin,
  listAllUsers,
  editUsers,
  editViewUsers,
  deleteUsers,
  
};
