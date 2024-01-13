import Truck from "../models/Truck.js";
const addTruck = async (req, res) => {
  try {
    const truck = await Truck.create(req.body);
    res.status(200).json(truck);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

const getTrucks = async (req, res) => {
  try {
    const trucks = await Truck.find({});
    res.status(200).json(trucks);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

const getTruck = async (req, res) => {
  try {
    const { id } = req.params;
    const trucks = await Truck.findOne({ _id: id });
    res.status(200).json(trucks);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

const updateTruck = async (req, res) => {
  try {
    const { id } = req.params;
    const trucks = await Truck.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json(trucks);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

const deactivateTruck = async (req, res) => {
  try {
    const { id } = req.params;
    const trucks = await Truck.findOneAndUpdate(
      { _id: id },
      { isActive: false }
    );
    res.status(200).json(trucks);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

export { addTruck, getTrucks, getTruck, updateTruck, deactivateTruck };
