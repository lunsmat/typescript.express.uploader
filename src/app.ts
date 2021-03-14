import express from 'express';

import { routesAPI } from '@routes/api';

class Application {
    express: express.Application;

    constructor() {
        this.express = express();

        this.variables();
        this.handlers();
        this.routes();
    }

    private variables() {
        this.express.set('port', 3333);
    }

    private handlers() {
        this.express.use(express.json());
    }

    private routes() {
        this.express.use('/api', routesAPI);
    }
}

const app = new Application().express;

export { app };
