import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Testes de serviço: Create Car', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('create car', async function () {
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
    Sinon.stub(Model, 'create').resolves(newCarMock);
    const service = new CarService();
    const result = await service.create(carMock);

    expect(result).to.be.deep.equal(newCarMock);
  });

  it('listar carros', async function () {
    const newCarMock: Car[] = [
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

    Sinon.stub(Model, 'find').resolves(newCarMock);
    const service = new CarService();
    const result = await service.getall();

    expect(result).to.be.deep.equal(newCarMock);
    expect(result.length).to.be.equal(1);
  });
});
