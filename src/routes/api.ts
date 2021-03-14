import { Router } from 'express';

import { PingController } from '@controllers/PingController';
import { PhotoController } from '@controllers/PhotoController';

const routesAPI = Router();

const pingController = new PingController();
const photoController = new PhotoController();

routesAPI.get('/ping', pingController.index);

routesAPI.get('/photos', photoController.index);

export { routesAPI };
