const createViewUserAdmin = (req,res) => {
    res.render("users/registerUsersAdmin")
};
const createUserAdmin = (req,res) => {
    res.send('this is the user route')
};

module.exports = {
    createUserAdmin,
    createViewUserAdmin
};