import mongoConnect from '../connections/mongoConnection';
import express, { Application } from 'express';
import Routes from './routes';
import passport from 'passport';
import bodyParser from 'body-parser';

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(passport.initialize());
  }

  private async connectToMongo(): Promise<void> {
    await mongoConnect(this.app);
  }

  private initRoutes(): void {
    Routes.initializeRoutes(this.app);
  }

  private listen(): void {
    this.app.listen(process.env.PORT, () => {
      console.log(`Server connected to port: ${process.env.PORT}`);
    });
  }

  async initializeApp(): Promise<void> {
    await this.connectToMongo();
    this.initRoutes();
    this.listen();
  }
}

export default new App();
