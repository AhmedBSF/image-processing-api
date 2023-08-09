import supertest from 'supertest';
import server from '../src';

const request = supertest(server);

it('Get main endpoint', async () => {
  const response = await request.get('/main');
  expect(response.status).toBe(200);
});

describe('Image processing tests', () => {
  it('Checks image endpoint', async () => {
    await request
      .get('/main/image?file=river&width=500&height=500')
      .expect(200);
  });

  it('Checks for invalid query parameters', async () => {
    await request.get('/main/image').expect(400);
  });
});
