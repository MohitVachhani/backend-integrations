import { Application, Router } from 'express';
import TestingRouter from '../controllers/routes/testing';
import AuthRouter from '../controllers/routes/auth';
export default class Routes {
  public routes = Router();

  static initializeRoutes(app: Application): void {
    app.use('/testing', TestingRouter);
    app.use('/auth', AuthRouter);
  }
}
