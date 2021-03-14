import express from 'express'

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
        this.express.get('/api/ping',
            (request, response) => response.json({
                pong: true,
            })
        );
    }
}

const app = new Application().express;

export { app };
