import chai from "chai";
import sinon from "sinon";
import { expect } from "chai";
import {
  Vehicle,
} from "../models/vehicles/vehicles.model";
import {
  createVehicle,
  getVehicle,
  updateVehicle,
  deleteVehicle,
} from "../domain/vehicles/vehicles.domain";

describe("Testes da API de Veículos", () => {
  let createVehicleStub: sinon.SinonStub;
  let vehicleStub: sinon.SinonStub;
  let updateVehicleStub: sinon.SinonStub;
  let deleteVehicleStub: sinon.SinonStub;


  beforeEach(() => {
    createVehicleStub = sinon.stub(Vehicle, "create");
    vehicleStub = sinon.stub(Vehicle, "findByPk");
    deleteVehicleStub = sinon.stub(Vehicle, "destroy");
    updateVehicleStub = sinon.stub(Vehicle, "update");
  });

  afterEach(() => {
    createVehicleStub.restore();
    updateVehicleStub.restore();
    vehicleStub.restore();
    deleteVehicleStub.restore();
  });

  it("Deve criar um novo veículo", async () => {
    const placa = "XYZ5678";
    const chassi = "0987654321";
    const renavam = "123456789";
    const modelo = "Gol";
    const marca = "Volkswagen";
    const ano = 2023;

    createVehicleStub.resolves({
      id: "1",
      placa,
      chassi,
      renavam,
      modelo,
      marca,
      ano,
    } as unknown as Vehicle);

    const result = await createVehicle(
      placa,
      chassi,
      renavam,
      modelo,
      marca,
      ano
    );

    expect(createVehicleStub.calledOnce).to.be.true;
    expect(result).to.deep.equal({
      id: "1",
      placa,
      chassi,
      renavam,
      modelo,
      marca,
      ano,
    });
  });

  it("Deve retornar os detalhes de um veículo existente", async () => {
    const veiculoExistente = {
      placa: "ABC1234",
      chassi: "1234567890",
      renavam: "987654321",
      modelo: "Fiesta",
      marca: "Ford",
      ano: 2022,
    };

    vehicleStub.resolves(veiculoExistente);

    const result = await getVehicle("1");

    expect(vehicleStub.calledOnceWithExactly("1")).to.be.true;
    expect(result).to.deep.equal(veiculoExistente);
  });
});