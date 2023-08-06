import express from 'express';
import resizeImage from '../utilities/imageProcessing';

const imageRoutes = express.Router();

imageRoutes.get('/', (_req, res) => {
  res.send('Go to /image to start resizing an image.');
});

imageRoutes.use('/image', resizeImage);

imageRoutes.get('*', (_req, res) => {
  res.status(404);
  res.send('Not found');
});

export default imageRoutes;
