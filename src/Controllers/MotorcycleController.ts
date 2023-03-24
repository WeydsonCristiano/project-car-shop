import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motor: IMotorcycle = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.status,
      category: this.req.body.category,
      engineCapacity: this.req.body.category,
    };
    try {
      const newMotor = await this.service.create(motor);
      return this.res.status(200).json(newMotor);
    } catch (error) {
      this.next(error);
    }
  }

  public async getall() {
    const motor = await this.service.getall();
    return this.res.status(200).json(motor);
  }

  public async getid() {
    const { id } = this.req.params;
    const motor = await this.service.getid(id);
    return this.res.status(200).json(motor);
  }

  public async update() {
    const { id } = this.req.params;
    const car = await this.service.update(id, this.req.body);
    return this.res.status(200).json(car);
  }

  public async delete() {
    const { id } = this.req.params;
    await this.service.delete(id);
  }
}

export default MotorcycleController;
