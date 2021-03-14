import { Router } from 'express';
import multer from 'multer';

import { PingController } from '@controllers/PingController';
import { PhotoController } from '@controllers/PhotoController';
import { multerConfig } from '@config/multerConfig';

const routesAPI = Router();

const pingController = new PingController();
const photoController = new PhotoController();

const upload = multer(multerConfig);

routesAPI.get('/ping', pingController.index);

routesAPI.get('/photos', photoController.index);
routesAPI.post('/photos', upload.single('image'), photoController.create);
routesAPI.delete('/photos/:id', photoController.delete);

export { routesAPI };
