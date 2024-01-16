import Tank from "../models/Tank.js";
const addTank = async (req, res) => {
  try {
    const tank = await Tank.create(req.body);
    res.status(200).json(tank);
  } catch (error) {
    console.log(error.message);
    resizeBy.status(200).json({ errors: error.message });
  }
};
const getTanks = async (req, res) => {
  try {
    const tanks = await Tank.find({});
    res.status(200).json(tanks);
  } catch (error) {
    console.log(error.message);
    resizeBy.status(200).json({ errors: error.message });
  }
};
const getTank = async (req, res) => {
  try {
    const { id } = req.params;
    const tank = await Tank.findOne({ _id: id });
    res.status(200).json(tank);
  } catch (error) {
    console.log(error.message);
    resizeBy.status(200).json({ errors: error.message });
  }
};
const updateTank = async (req, res) => {
  try {
    const { id } = req.params;
    const tank = await Tank.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json(tank);
  } catch (error) {
    console.log(error.message);
    resizeBy.status(200).json({ errors: error.message });
  }
};
const deactivateTank = async (req, res) => {
  try {
    const { id } = req.params;
    const tank = await Tank.findOneAndUpdate({ _id: id }, { isActive: false });
    res.status(200).json(tank);
  } catch (error) {
    console.log(error.message);
    resizeBy.status(200).json({ errors: error.message });
  }
};
export { addTank, getTanks, getTank, updateTank, deactivateTank };
