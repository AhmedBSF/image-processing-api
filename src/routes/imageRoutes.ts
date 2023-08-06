import express from 'express';
import resizeImage from '../utilities/imageProcessing';

const imageRoutes = express.Router();

imageRoutes.get('/', (_req, res) => {
  res.send(
    'Add to the URL /image?file={your image file name}&width={new width}&height={new height} to resize an image.'
  );
});

imageRoutes.use('/image', resizeImage);

imageRoutes.get('*', (_req, res) => {
  res.status(404);
  res.send('Not found');
});

export default imageRoutes;
