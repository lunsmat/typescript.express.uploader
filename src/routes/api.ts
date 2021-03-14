import { Router } from 'express';

import { PingController } from '@controllers/PingController';

const routesAPI = Router();

const pingController = new PingController();

routesAPI.get('/ping', pingController.index);

export { routesAPI };
