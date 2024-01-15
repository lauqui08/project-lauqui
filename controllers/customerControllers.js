import Customer from "../models/Customer.js";

const addCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(200).json(customer);
  } catch (error) {
    console.log(error.message);
    res.status(400).status({ errors: error.message });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.status(200).json(customers);
  } catch (error) {
    console.log(error.message);
    res.status(400).status({ errors: error.message });
  }
};

const getCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findOne({ _id: id });
    res.status(200).json(customer);
  } catch (error) {
    console.log(error.message);
    res.status(400).status({ errors: error.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json(customer);
  } catch (error) {
    console.log(error.message);
    res.status(400).status({ errors: error.message });
  }
};

const deactivateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findOneAndUpdate(
      { _id: id },
      { isActive: false }
    );
    res.status(200).json(customer);
  } catch (error) {
    console.log(error.message);
    res.status(400).status({ errors: error.message });
  }
};

export {
  addCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deactivateCustomer,
};
