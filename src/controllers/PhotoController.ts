import { Photo } from '@database/models/Photo';
import { Request, Response } from 'express';

class PhotoController {
    async index(request: Request, response: Response): Promise<Response> {
        const photos = await Photo.find();

        return response.json(photos);
    }
}

export { PhotoController };
