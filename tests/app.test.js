const request = require('supertest');
const app = require('../app');

describe('DevOps application tests', () => {
test('Home page should return a success message', async () => {
const response = await request(app).get('/');

expect(response.statusCode).toBe(200);
expect(response.text).toBe(
'Hello! DevOps CI/CD Pipeline is working.'
);
});

test('Health endpoint should return healthy status', async () => {
const response = await request(app).get('/health');

expect(response.statusCode).toBe(200);
expect(response.body).toEqual({ status: 'healthy' });
});
});
