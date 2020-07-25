import { Application, Router } from 'express';
import TestingRouter from '../controllers/routes/testing';
export default class Routes {
  public routes = Router();

  static initializeRoutes(app: Application): void {
    app.use('/testing', TestingRouter);
  }
}
