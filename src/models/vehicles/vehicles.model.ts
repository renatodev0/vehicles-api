import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/database";

export interface VehicleAttributes {
  id?: string;
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: number;
}

export class Vehicle
  extends Model<VehicleAttributes>
  implements VehicleAttributes
{
  public id?: string;
  public placa!: string;
  public chassi!: string;
  public renavam!: string;
  public modelo!: string;
  public marca!: string;
  public ano!: number;
}

Vehicle.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    placa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chassi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    renavam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "vehicles",
  }
);

export default Vehicle;
