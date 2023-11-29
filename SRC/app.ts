import express, { Express } from "express";
import { RedSocialServer } from "@bootstrap/setupServer.bootstrap";
import { config } from "@configs/configEnvs";
import databaseConnection from '@bootstrap/setupDatabase.bootstrap';

class Application {

    public initialize(): void{
      this.LoadConfig();
      databaseConnection();
      const app: Express = express();
      const server: RedSocialServer = new RedSocialServer(app);
      server.start();

    }

    private LoadConfig():void{
      config.validateConfig();
    }
}

const application : Application = new Application();
application.initialize();