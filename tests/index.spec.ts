import supertest from 'supertest';
import server from '../src';
import { resizeImage } from '../src/utilities/imageProcessing';
import path from 'path';
import fs from 'fs';

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

  it('resize an image', async () => {
    const IMAGE_INPUT_PATH = '../public/assets/imageInput';
    const IMAGE_OUTPUT_PATH = '../public/assets/imageOutput';
    const inputPath = path.join(__dirname, IMAGE_INPUT_PATH, `river.jpg`);
    const outputPath = path.join(
      __dirname,
      IMAGE_OUTPUT_PATH,
      `river(${250}X${150}).jpg`
    );
    await resizeImage(inputPath, outputPath, 250, 150);
    expect(fs.existsSync(outputPath)).toBeTrue();
  });
});
