import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const motorMock: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.0,
  category: 'Street',
  engineCapacity: 600,
};
const newMotorMock: Motorcycle = new Motorcycle({
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.0,
  category: 'Street',
  engineCapacity: 600,
});

const motorMockArray: Motorcycle[] = [
  new Motorcycle({
    id: '6348513f34c397abcad050b2',
    model: 'kawasak Ninja',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.0,
    category: 'Street',
    engineCapacity: 600,
  }),
];

const service = new MotorcycleService();

describe('Testes de serviço: Create Car', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('create car', async function () {
    Sinon.stub(Model, 'create').resolves(newMotorMock);
    const result = await service.create(motorMock);

    expect(result).to.be.deep.equal(newMotorMock);
  });

  it('listar carros', async function () {
    Sinon.stub(Model, 'find').resolves(motorMockArray);
    const result = await service.getall();

    expect(result).to.be.deep.equal(motorMockArray);
    expect(result.length).to.be.equal(1);
  });

  it('listar um carros por id', async function () {
    Sinon.stub(Model, 'findById').resolves(newMotorMock);
    const result = await service.getid('634852326b35b59438fbea2f');
    expect(result).to.be.deep.equal(newMotorMock);
  });

  it('atualizar um carros por id', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(newMotorMock);
    const result = await service.update('634852326b35b59438fbea2f', motorMock);
    expect(result).to.be.deep.equal(newMotorMock);
  });

  // it('deletar um carros por id', async function () {
  //   Sinon.stub(Model, 'findByIdAndDelete').resolves(newMotorMock);
  //   const result = await service.delete('634852326b35b59438fbea2f');
  //   expect(result).to.be.deep.equal(newMotorMock);
  // });
});
