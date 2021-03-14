const express = require('express');

class App {
    express;

    constructor() {
        this.express = express();

        this.variables();
        this.handlers();
        this.routes();
    }

    variables() {
        this.express.set('port', 3333);
    }

    handlers() {
        this.express.use(express.json());
    }

    routes() {
        this.express.get('/api/ping',
            (request, response) => response.json({
                pong: true,
            })
        );
    }
}

module.exports = new App().express;
