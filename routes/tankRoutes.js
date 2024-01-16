import express from "express";
const router = express.Router();
import {
  addTank,
  getTanks,
  getTank,
  updateTank,
  deactivateTank,
} from "../controllers/tankControllers.js";

router.post("/tanks", addTank);
router.get("/tanks", getTanks);
router.get("/tanks/:id", getTank);
router.put("/tanks/:id", updateTank);
router.patch("/tanks/:id", deactivateTank);

export default router;
