const createViewProject = (req,res) => {
    res.render("projects/registerProjects")
};
const createProject = (req,res) => {
    res.send('this is the project route')
};

module.exports = {
    createProject,
    createViewProject
}