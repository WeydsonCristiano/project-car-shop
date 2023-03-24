import express from 'express';
import ErrorHandler from './Middleware/ErroHandler';
import carRouter from './Routers/carRouter';
import motorcycleRouter from './Routers/motorcyclesRouter';

const app = express();
app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', motorcycleRouter);
app.use(ErrorHandler.handle);

export default app;
