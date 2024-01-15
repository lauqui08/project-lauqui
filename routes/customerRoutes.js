import express from "express";
const router = express.Router();

export {
  addCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deactivateCustomer,
} from "../controllers/customerControllers.js";

router.post("/customers", addCustomer);
router.get("/customers", getCustomers);
router.get("/customers/:id", getCustomer);
router.put("/customers/:id", updateCustomer);
router.patch("/customers/:id", deactivateCustomer);

export default router;
