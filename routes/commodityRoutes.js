import express from "express";
const router = express.Router();

import {
  addCommodity,
  getCommodities,
  getCommodity,
  updateCommodity,
  deactivateCommodity,
} from "../controllers/commodityControllers.js";

router.post("/commodities", addCommodity);
router.get("/commodities", getCommodities);
router.get("/commodities/:id", getCommodity);
router.put("/commodities/:id", updateCommodity);
router.patch("/commodities/:id", deactivateCommodity);

export default router;
