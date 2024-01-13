import express from "express";
const router = express.Router();

import {
  addTruck,
  getTrucks,
  getTruck,
  updateTruck,
  deactivateTruck,
} from "../controllers/truckControllers.js";

router.post("/trucks", addTruck);
router.get("/trucks", getTrucks);
router.get("/trucks/:id", getTruck);
router.put("/trucks/:id", updateTruck);
router.patch("/trucks/:id", deactivateTruck);

export default router;
