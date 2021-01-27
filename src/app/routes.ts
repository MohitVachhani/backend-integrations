import { Application, Router } from 'express';
import AuthRouter from '../controllers/routes/auth';
import TestingRouter from '../controllers/routes/testing';

export default class Routes {
  public routes = Router();

  static initializeRoutes(app: Application): void {
    app.use('/testing', TestingRouter);
    app.use('/auth', AuthRouter);
  }
}
