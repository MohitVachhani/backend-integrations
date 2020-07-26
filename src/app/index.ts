import mongoConnect from '../connections/mongoConnection';
import express, { Application } from 'express';
import Routes from './routes';

export class App {
  public app: Application;

  constructor() {
    this.app = express();
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
