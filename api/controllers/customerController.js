const list = (req,res) => {
    res.send('you are on the customer route')
};

const createViewCustomer = (req, res) => {
    res.render("customers/createCustomers");
  };

module.exports ={
    list,
    createViewCustomer
};