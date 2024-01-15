import Trucking from "../models/Trucking.js";
const addTrucking = async (req, res) => {
  try {
    const trucking = await Trucking.create(req.body);
    res.status(200).json(trucking);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

const getTruckings = async (req, res) => {
  try {
    const truckings = await Trucking.find({});
    res.status(200).json(truckings);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

const getTrucking = async (req, res) => {
  try {
    const { id } = req.params;
    const trucking = await Trucking.findOne({ _id: id });
    res.status(200).json(trucking);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

const updateTrucking = async (req, res) => {
  try {
    const { id } = req.params;
    const trucking = await Trucking.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json(trucking);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

const deactivateTrucking = async () => {
  try {
    const { id } = req.params;
    const trucking = await Trucking.findOneAndUpdate(
      { _id: id },
      { isActive: false }
    );
    res.status(200).json(trucking);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

export {
  addTrucking,
  getTruckings,
  getTrucking,
  updateTrucking,
  deactivateTrucking,
};
