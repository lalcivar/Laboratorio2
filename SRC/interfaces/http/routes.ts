import { Application, Request, Response } from "express";
import { serverAdapter } from "@services/queues/base.queue";

export default (app: Application) => {

    const routes = () => {

        app.use('/healthcheck', (_req: Request, res: Response) => res.send('Server is ok'));
        app.use('/queues', serverAdapter.getRouter());
    };

    routes();
};
