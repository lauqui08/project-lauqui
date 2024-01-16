import Transaction from "../models/Transaction.js";
const addTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(200).json(transaction);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({});
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};
const getTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findOne({ _id: id });
    res.status(200).json(transaction);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};
const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findOneAndUpdate(
      { _id: id },
      req.body
    );
    res.status(200).json(transaction);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};
const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findOneAndDelete({ _id: id });
    res.status(200).json(transaction);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ errors: error.message });
  }
};
export {
  addTransaction,
  getTransactions,
  getTransaction,
  updateTransaction,
  deleteTransaction,
};
