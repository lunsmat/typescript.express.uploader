import request from 'supertest';
import { app } from '@app';

describe('Ping Test', () => {
    test('Response status should be 200', async () => {
        const response = await request(app).get('/api/ping');

        expect(response.status).toBe(200);
    });

    test('Response body should be pong equals true', async () => {
        const response = await request(app).get('/api/ping');

        expect(response.body).toMatchObject({ pong: true });
    });

});

