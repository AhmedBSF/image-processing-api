import supertest from 'supertest';
import server from '../src';

const request = supertest(server);

it('Get main endpoint', async () => {
  const response = await request.get('/main');
  expect(response.status).toBe(200);
});
