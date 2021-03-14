import request from 'supertest';
import faker from 'faker';
import mongoose from 'mongoose';

import { app } from '@app';
import { PhotoInterface } from '@database/models/Photo';

describe('Photos tests', () => {
    it('Should be able to upload one photo', async () => {
        const response = await request(app)
            .post('/api/photos')
            .attach('image', faker.image.image());

        expect(response.status).toBe(201);

        expect(response.body).toHaveProperty('_id');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('size');
        expect(response.body).toHaveProperty('key');
    });

    it('Should not be able to send request without photo', async () => {
        const response = await request(app)
            .post('/api/photos');

        expect(response.status).toBe(400);

        expect(response.body).toMatchObject({ error: 'No file was send' });
    });

    it('Should be able to get all photos', async () => {
        const response = await request(app)
            .post('/api/photos')
            .attach('image', faker.image.image());

        const body = response.body;

        expect(response.status).toBe(200);

        body.map((photo: PhotoInterface) => {
            expect(photo).toHaveProperty('_id');
            expect(photo).toHaveProperty('name');
            expect(photo).toHaveProperty('size');
            expect(photo).toHaveProperty('key');
        });
    });

    it('Should be able to delete a photo', async () => {
        const responsePost = await request(app)
            .post('/api/photos')
            .attach('image', faker.image.image());

        const { _id } = responsePost.body;

        const response = await request(app)
            .delete(`/api/photos/${_id}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Photo deleted successfully');
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });
});
