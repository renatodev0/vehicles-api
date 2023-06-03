import { Vehicle } from "../../models/vehicles/vehicles.model";
import { Vehicle as VehicleModel } from "../../models/vehicles/vehicles.model";

export const getAllVehicles = async (): Promise<Vehicle[]> => {
  const vehicles = await VehicleModel.findAll();
  return vehicles;
};

export const getVehicle = async (id: string): Promise<Vehicle | null> => {
  const vehicle = await VehicleModel.findByPk(id);
  return vehicle;
};

export const createVehicle = async (
  placa: string,
  chassi: string,
  renavam: string,
  modelo: string,
  marca: string,
  ano: number
): Promise<Vehicle> => {
  const newVehicle = await VehicleModel.create({
    placa,
    chassi,
    renavam,
    modelo,
    marca,
    ano,
  });
  return newVehicle;
};

export const updateVehicle = async (
  id: string,
  placa: string,
  chassi: string,
  renavam: string,
  modelo: string,
  marca: string,
  ano: number
): Promise<Vehicle | null> => {
  const vehicle = await VehicleModel.findByPk(id);
  if (!vehicle) {
    return null;
  }
  await vehicle.update({ placa, chassi, renavam, modelo, marca, ano });
  return vehicle;
};

export const deleteVehicle = async (id: string): Promise<Vehicle | null> => {
  const vehicle = await VehicleModel.findByPk(id);
  if (!vehicle) {
    return null;
  }
  await vehicle.destroy();
  return vehicle;
};
