import { Photo } from '@database/models/Photo';
import { Request, Response } from 'express';

class PhotoController {
    async index(request: Request, response: Response): Promise<Response> {
        const photos = await Photo.find();

        for (const i in photos) {
            if (photos[i].storageType === 'local')
                photos[i].url = `${request.headers.host}/${photos[i].url}`;
        }

        return response.json(photos);
    }

    async create(request: Request, response: Response): Promise<Response> {
        if (!request.file)
            return response
                .status(400)
                .json({ error: 'No Photo was send!' });

        const { url, key } = request.body;
        const { originalname: name, size, location = '' }
            = request.file as Express.MulterS3.File;

        const storageType = process.env.STORAGE_TYPE;

        const photo = await Photo.create({
            name,
            size,
            key,
            storageType,
            url: storageType === 'S3' ? location : url
        });

        if (storageType === 'local')
            photo.url = `${request.headers.host}/${photo.url}`;

        return response.status(201).json(photo);
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const photo = await Photo.findById(id);

            if (photo)
                await photo.remove();
        } catch { null; }

        return response.json({
            message: 'Photo deleted successfully',
        });
    }
}

export { PhotoController };
