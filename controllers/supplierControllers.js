import Supplier from "../models/Supplier.js";
//add supplier
const addSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(200).json(supplier);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};
//get supliers
const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find({});
    res.status(200).json(suppliers);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};
//get suplier
const getSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findOne({ _id: id });
    res.status(200).json(supplier);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};
//update suplier
const updateSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json(supplier);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};
//deactivate suplier
const deactivateSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const supplier = await Supplier.findOneAndUpdate(
      { _id: id },
      { isActive: false }
    );
    res.status(200).json(supplier);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};

export {
  addSupplier,
  getSuppliers,
  getSupplier,
  updateSupplier,
  deactivateSupplier,
};
