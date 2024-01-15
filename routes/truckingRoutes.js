import express from "express";
const router = express.Router();
import {
  addTrucking,
  getTruckings,
  getTrucking,
  updateTrucking,
  deactivateTrucking,
} from "../controllers/truckingControllers.js";

router.post("/truckings", addTrucking);
router.get("/truckings", getTruckings);
router.get("/truckings/:id", getTrucking);
router.put("/truckings/:id", updateTrucking);
router.patch("/truckings/:id", deactivateTrucking);

export default router;
