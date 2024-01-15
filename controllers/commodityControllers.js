import Commodity from "../models/Comodity.js";

const addCommodity = async (req, res) => {
  try {
    const commodity = await Commodity.create(req.body);
    res.status(200).json(commodity);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

const getCommodities = async (req, res) => {
  try {
    const commodities = await Commodity.find({});
    res.status(200).json(commodities);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

const getCommodity = async (req, res) => {
  try {
    const { id } = req.params;
    const commodity = await Commodity.findOne({ _id: id });
    res.status(200).json(commodity);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

const updateCommodity = async (req, res) => {
  try {
    const { id } = req.params;
    const commodity = await Commodity.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json(commodity);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

const deactivateCommodity = async (req, res) => {
  try {
    const { id } = req.params;
    const commodity = await Commodity.findOneAndUpdate(
      { _id: id },
      { isActive: false }
    );
    res.status(200).json(commodity);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

export {
  addCommodity,
  getCommodities,
  getCommodity,
  updateCommodity,
  deactivateCommodity,
};
