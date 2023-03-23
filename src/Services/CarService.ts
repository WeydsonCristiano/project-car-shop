import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IGenericService from '../Interfaces/IGenericService';

class CarService implements IGenericService<ICar, Car> {
  async create(dto: ICar): Promise<Car> {
    throw new Error('Method not implemented.');
  }

  async getall(): Promise<Car[]> {
    throw new Error('Method not implemented.');
  }

  async getid(id: string): Promise<Car> {
    throw new Error('Method not implemented.');
  }

  async update(id: string, dto: ICar): Promise<Car> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default CarService;
