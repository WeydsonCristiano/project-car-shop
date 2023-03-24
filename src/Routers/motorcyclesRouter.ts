import express from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRouter = express.Router();

motorcycleRouter.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create,
);
motorcycleRouter.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).getall,
);
motorcycleRouter.get(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getid,
);
motorcycleRouter.put(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).create,
);
motorcycleRouter.delete(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).delete,
);

export default motorcycleRouter;
