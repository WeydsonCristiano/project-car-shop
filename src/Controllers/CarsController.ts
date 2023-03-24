import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
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
    const car: ICar = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.status,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const newCar = await this.service.create(car);
      return this.res.status(200).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getall() {
    const car = await this.service.getall();
    return this.res.status(200).json(car);
  }

  public async getid() {
    const { id } = this.req.params;
    const car = await this.service.getid(id);
    return this.res.status(200).json(car);
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

export default CarController;
