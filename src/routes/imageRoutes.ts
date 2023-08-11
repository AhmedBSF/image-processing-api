import express, { Request, Response } from 'express';
import processImage from '../utilities/imageProcessing';

const imageRoutes = express.Router();

imageRoutes.get('/', (_req: Request, res: Response): void => {
  res.send(
    'Add to the URL /image?file={your image file name}&width={new width}&height={new height} to resize an image.'
  );
});

imageRoutes.use('/image', processImage);

imageRoutes.get('*', (_req: Request, res: Response): void => {
  res.status(404);
  res.send('Not found');
});

export default imageRoutes;
