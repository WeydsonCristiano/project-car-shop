import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IGenericService from '../Interfaces/IGenericService';
import MotorcycleODM from '../Models/MotorcycleODM';
import GenericError from '../Errors/GenericError';

const err = 'Motocycle not fount';

class MotorcycleService implements IGenericService<IMotorcycle, Motorcycle> {
  protected odm: MotorcycleODM = new MotorcycleODM();

  async create(dto: IMotorcycle): Promise<Motorcycle> {
    const motor = await this.odm.create(dto);
    return new Motorcycle(motor);
  }

  async getall(): Promise<Motorcycle[]> {
    const motorAll = await this.odm.getAll();
    return motorAll.map((motor) => new Motorcycle(motor));
  }

  async getid(id: string): Promise<Motorcycle> {
    const motorId = await this.odm.getById(id);
    if (!motorId) throw new GenericError(err, 404);
    return new Motorcycle(motorId);
  }

  async update(id: string, dto: IMotorcycle): Promise<Motorcycle> {
    const motorUpdate = await this.odm.update(id, dto);
    if (!motorUpdate) throw new GenericError(err, 404);
    return new Motorcycle(motorUpdate);
  }

  async delete(id: string): Promise<void> {
    await this.getid(id);
    await this.odm.delete(id);
  }
}

export default MotorcycleService;
