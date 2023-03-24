import express from 'express';
import CarsController from '../Controllers/CarsController';

const carRouter = express.Router();

carRouter.post(
  '/',
  (req, res, next) => new CarsController(req, res, next).create,
);
carRouter.get(
  '/',
  (req, res, next) => new CarsController(req, res, next).getall,
);
carRouter.get(
  '/:id',
  (req, res, next) => new CarsController(req, res, next).getid,
);
carRouter.put(
  '/:id',
  (req, res, next) => new CarsController(req, res, next).create,
);
carRouter.delete(
  '/:id',
  (req, res, next) => new CarsController(req, res, next).delete,
);

export default carRouter;
