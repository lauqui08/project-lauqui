import Driver from "../models/Driver.js";

//add driver
const addDriver = async (req, res) => {
  try {
    const driver = await Driver.create(req.body);
    res.status(200).json(driver);
  } catch (error) {
    console.log(error.message);
    res.status(400).status({ errors: error.message });
  }
};

//get drivers
const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find({});
    res.status(200).json(drivers);
  } catch (error) {
    console.log(error.message);
    res.status(400).status({ errors: error.message });
  }
};

//get driver
const getDriver = async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findOne({ _id: id });
    res.status(200).json(driver);
  } catch (error) {
    console.log(error.message);
    res.status(400).status({ errors: error.message });
  }
};

//update driver
const updateDriver = async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json(driver);
  } catch (error) {
    console.log(error.message);
    res.status(400).status({ errors: error.message });
  }
};

//deactivated driver
const deactivateDriver = async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await Driver.findOneAndUpdate(
      { _id: id },
      { isActive: false }
    );
    res.status(200).json(driver);
  } catch (error) {
    console.log(error.message);
    res.status(400).status({ errors: error.message });
  }
};
export { addDriver, getDrivers, getDriver, updateDriver, deactivateDriver };
