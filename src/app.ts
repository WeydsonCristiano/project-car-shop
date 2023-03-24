import express from 'express';
import ErrorHandler from './Middleware/ErroHandler';
import carRouter from './Routers/carRouter';

const app = express();
app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', carRouter);
app.use(ErrorHandler.handle);

export default app;
// cria genericerro ****
// middleware erro handler *****
// refator saida erro com handler *****
// cria controlador 
// router 
// repeti o car para motorcyle.
// test unidade model service controller.
