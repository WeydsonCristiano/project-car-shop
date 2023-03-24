import express from 'express';
import CarsController from '../Controllers/CarsController';

const carRouter = express.Router();

carRouter.post(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).create(),
);
carRouter.get(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).getall(),
);
carRouter.get(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).getid(),
);
carRouter.put(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).create(),
);
carRouter.delete(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).delete(),
);

export default carRouter;
