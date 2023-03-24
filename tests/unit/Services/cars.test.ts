import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

const carMock: ICar = {
  model: 'Marea',
  year: 1992,
  color: 'Black',
  status: true,
  buyValue: 10.99,
  doorsQty: 2,
  seatsQty: 5,
};
const newCarMock: Car = new Car({
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 1992,
  color: 'Black',
  status: true,
  buyValue: 10.99,
  doorsQty: 2,
  seatsQty: 5,
});

const CarMockArray: Car[] = [
  new Car({
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 1992,
    color: 'Black',
    status: true,
    buyValue: 10.99,
    doorsQty: 2,
    seatsQty: 5,
  }),
];

const service = new CarService();

describe('Testes de serviço: Create Car', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('create car', async function () {
    Sinon.stub(Model, 'create').resolves(newCarMock);
    const result = await service.create(carMock);

    expect(result).to.be.deep.equal(newCarMock);
  });

  it('listar carros', async function () {
    Sinon.stub(Model, 'find').resolves(CarMockArray);
    const result = await service.getall();

    expect(result).to.be.deep.equal(CarMockArray);
    expect(result.length).to.be.equal(1);
  });

  it('listar um carros por id', async function () {
    Sinon.stub(Model, 'findById').resolves(newCarMock);
    const result = await service.getid('634852326b35b59438fbea2f');
    expect(result).to.be.deep.equal(newCarMock);
  });

  it('atualizar um carros por id', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(newCarMock);
    const result = await service.update('634852326b35b59438fbea2f', carMock);
    expect(result).to.be.deep.equal(newCarMock);
  });
});
