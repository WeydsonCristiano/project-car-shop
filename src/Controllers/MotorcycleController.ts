import { NextFunction, Request, Response } from 'express';
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
    try {
      const newMotor = await this.service.create(this.req.body);
      return this.res.status(200).json(newMotor);
    } catch (error) {
      this.next(error);
    }
  }

  public async getall() {
    try {
      const motor = await this.service.getall();
      return this.res.status(200).json(motor);
    } catch (error) {
      this.next(error);
    }
  }

  public async getid() {
    try {
      const { id } = this.req.params;
      const motor = await this.service.getid(id);
      return this.res.status(200).json(motor);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      const car = await this.service.update(id, this.req.body);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async delete() {
    try {
      const { id } = this.req.params;
      await this.service.delete(id);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;
