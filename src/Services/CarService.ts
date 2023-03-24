import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IGenericService from '../Interfaces/IGenericService';
import CarODM from '../Models/CarODM';
import GenericError from '../Errors/GenericError';

const err = 'Car not found';

class CarService implements IGenericService<ICar, Car> {
  protected odm: CarODM = new CarODM();

  async create(dto: ICar): Promise<Car> {
    const car = await this.odm.create(dto);
    return new Car(car);
  }

  async getall(): Promise<Car[]> {
    const carAll = await this.odm.getAll();
    return carAll.map((car) => new Car(car));
  }

  async getid(id: string): Promise<Car> {
    const carId = await this.odm.getById(id);
    if (!carId) throw new GenericError(err, 404);
    return new Car(carId);
  }

  async update(id: string, dto: ICar): Promise<Car> {
    const carUpdate = await this.odm.update(id, dto);
    if (!carUpdate) throw new GenericError(err, 404);
    return new Car(carUpdate);
  }

  async delete(id: string): Promise<void> {
    await this.getid(id);
    await this.odm.delete(id);
  }
}

export default CarService;
