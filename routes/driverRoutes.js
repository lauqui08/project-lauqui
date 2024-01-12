import express from "express";
const router = express.Router();
//controllers
import {
  addDriver,
  getDrivers,
  getDriver,
  updateDriver,
  deactivateDriver,
} from "../controllers/driverControllers.js";

router.post("/drivers", addDriver);
router.get("/drivers", getDrivers);
router.get("/drivers/:id", getDriver);
router.put("/drivers/:id", updateDriver);
router.patch("/drivers/:id", deactivateDriver);

export default router;
