import { Request, Response } from "express";
import { Vehicle } from "../../models/vehicles/vehicles.model";
import * as VehicleDomain from "../../domain/vehicles/vehicles.domain";

export const getAllVehicles = async (req: Request, res: Response) => {
  try {
    const vehicles = await VehicleDomain.getAllVehicles();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getVehicle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const vehicle = await VehicleDomain.getVehicle(id);
    if (!vehicle) {
      res.status(404).json({ message: "Vehicle not found" });
    } else {
      res.json(vehicle);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createVehicle = async (req: Request, res: Response) => {
  try {
    const { placa, chassi, renavam, modelo, marca, ano }: Vehicle = req.body;
    const newVehicle = await VehicleDomain.createVehicle(
      placa,
      chassi,
      renavam,
      modelo,
      marca,
      ano
    );
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateVehicle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { placa, chassi, renavam, modelo, marca, ano }: Vehicle = req.body;
    const updatedVehicle = await VehicleDomain.updateVehicle(
      id,
      placa,
      chassi,
      renavam,
      modelo,
      marca,
      ano
    );
    if (!updatedVehicle) {
      res.status(404).json({ message: "Vehicle not found" });
    } else {
      res.json(updatedVehicle);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteVehicle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedVehicle = await VehicleDomain.deleteVehicle(id);
    if (!deletedVehicle) {
      res.status(404).json({ message: "Vehicle not found" });
    } else {
      res.json(deletedVehicle);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
