const usersModel = require("../models/UsersModel");

const createViewUserAdmin = (req, res) => {
  res.render("users/createUsersAdmin");
};

const createUserAdmin = async (req, res) => {
  const essentialBody = {
    email: req.body.email,
    password: req.body.password,
    access: req.body.access    
  }; 
  console.log(essentialBody);
  try {
    const createUser = await usersModel.create(essentialBody);    
    console.log(req.body)     
    res.send("create users");
    
  } catch (error) {
    res.send(error)    
  }
 }        

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
