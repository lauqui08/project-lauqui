import express from "express";
const router = express.Router();
import {
  addSupplier,
  getSuppliers,
  getSupplier,
  updateSupplier,
  deactivateSupplier,
} from "../controllers/supplierControllers.js";

router.post("/suppliers", addSupplier);
router.get("/suppliers", getSuppliers);
router.get("/suppliers/:id", getSupplier);
router.put("/suppliers/:id", updateSupplier);
router.patch("/suppliers/:id", deactivateSupplier);

export default router;
