import express from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRouter = express.Router();
const rota = '/motorcycles/:id';

motorcycleRouter.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);
motorcycleRouter.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getall(),
);
motorcycleRouter.get(
  rota,
  (req, res, next) => new MotorcycleController(req, res, next).getid(),
);
motorcycleRouter.put(
  rota,
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);
motorcycleRouter.delete(
  rota,
  (req, res, next) => new MotorcycleController(req, res, next).delete(),
);

export default motorcycleRouter;
