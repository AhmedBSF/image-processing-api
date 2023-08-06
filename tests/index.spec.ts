import supertest from 'supertest';
import server from '../src';
import fs from 'fs';
import path from 'path';

const request = supertest(server);

it('Get main endpoint', async () => {
  const response = await request.get('/main');
  expect(response.status).toBe(200);
});

it('Resized river image to be 500x500', async () => {
  const outputPath = path.join(
    __dirname,
    '../public/assets/imageOutput',
    'river(500X500).jpg'
  );
  const response = await request.get(
    '/main/image?file=river&width=500&height=500'
  );
  expect(response.status).toBe(200);
  expect(fs.existsSync(outputPath)).toBe(true);
});
