import express from 'express';
import routes from './routes/imageRoutes';

const PORT = 3000;

const server = express();

server.use('/main', routes);
server.listen(PORT, () => {
  return console.log(`Server running, port: ${PORT}...`);
});

export default server;
