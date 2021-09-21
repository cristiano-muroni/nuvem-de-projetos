const usersModel = require("../models/UsersModel");
const createViewUserAdmin = (req, res) => {
  res.render("users/createUsersAdmin");
};

const createUserAdmin = async(req, res) => {
    await usersModel.create(req.body)  
  res.send("create users");
};

const listViewUsers = (req, res) => {
  res.render("users/listUsers");
};

const listAllUsers = async (req, res) => {
  const users = await usersModel.findAll();
  let newUsers = [];
  let newUser = {};
  const essentialInfo = users.forEach((element) => {
    newUser = {
      id: element.id,
      email: element.email,
      admin: element.admin,
    };    
    return newUsers.push(newUser);
  });
  res.send(newUsers);
};

module.exports = {
  createUserAdmin,
  createViewUserAdmin,
  listViewUsers,
  listAllUsers,
};
