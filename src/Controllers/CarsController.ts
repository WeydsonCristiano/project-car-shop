import { NextFunction, Request, Response } from 'express';
// import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    try {
      const newCar = await this.service.create(this.req.body);
      return this.res.status(200).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getall() {
    try {
      const car = await this.service.getall();
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async getid() {
    try {
      const { id } = this.req.params;
      const car = await this.service.getid(id);
      return this.res.status(200).json(car);
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

export default CarController;
