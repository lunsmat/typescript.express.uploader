import { Photo } from '@database/models/Photo';
import { Request, Response } from 'express';

class PhotoController {
    async index(request: Request, response: Response): Promise<Response> {
        const photos = await Photo.find();

        for (const i in photos) {
            photos[i].url = `${request.headers.host}/uploads/${photos[i].key}`;
        }

        return response.json(photos);
    }

    async create(request: Request, response: Response): Promise<Response> {
        const { key } = request.body;
        const { originalname: name, size } = request.file;

        const photo = await Photo.create({
            name,
            size,
            key,
        });

        return response.status(201).json(photo);
    }
}

export { PhotoController };
