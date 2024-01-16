import express from "express";
const router = express.Router();
import {
  addTransaction,
  getTransactions,
  getTransaction,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transactionControllers.js";

router.post("/transactions", addTransaction);
router.get("/transactions", getTransactions);
router.get("/transactions/:id", getTransaction);
router.put("/transactions/:id", updateTransaction);
router.delete("/transactions/:id", deleteTransaction);

export default router;
