import request from 'supertest';
import mongoose from 'mongoose';
import path from 'path';

import { app } from '@app';
import { PhotoInterface } from '@database/models/Photo';

describe('Photos tests', () => {
    const imagePath = path.resolve(__dirname, '..', 'tmp', 'uploads', 'test.jpg');
    const insertedIds: string[] = [];

    it('Should be able to upload one photo', async () => {
        const response = await request(app)
            .post('/api/photos')
            .attach('image', imagePath);

        expect(response.status).toBe(201);

        expect(response.body).toHaveProperty('_id');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('size');
        expect(response.body).toHaveProperty('key');

        insertedIds.push(response.body._id);
    });

    it('Should not be able to send request without photo', async () => {
        const response = await request(app)
            .post('/api/photos');

        expect(response.status).toBe(400);

        expect(response.body).toMatchObject({ error: 'No Photo was send!' });
    });

    it('Should be able to get all photos', async () => {
        const response = await request(app)
            .get('/api/photos');

        const body = response.body;

        expect(response.status).toBe(200);

        body.map((photo: PhotoInterface) => {
            expect(photo).toHaveProperty('_id');
            expect(photo).toHaveProperty('name');
            expect(photo).toHaveProperty('size');
            expect(photo).toHaveProperty('key');
            expect(photo).toHaveProperty('url');
        });
    });

    it('Should be able to delete a photo', async () => {
        for (const i in insertedIds) {
            const response = await request(app)
                .delete(`/api/photos/${insertedIds[i]}`);

            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Photo deleted successfully');
        }
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });
});
