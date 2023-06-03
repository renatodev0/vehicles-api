import express, { Request, Response } from "express";
import {
  getVehicle,
  getAllVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} from "../../controllers/vehicles/vehicles.controller";

const router = express.Router();

router.get("/vehicles", getAllVehicles);
router.get("/vehicles/:id", getVehicle);
router.post("/vehicles", createVehicle);
router.put("/vehicles/:id", updateVehicle);
router.delete("/vehicles/:id", deleteVehicle);

export default router;
