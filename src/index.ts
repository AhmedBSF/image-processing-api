import express from 'express';
import routes from './routes/imageRoutes';
import cors from 'cors';

const middleware = cors();
const PORT = 3000;
const server = express();

server.use(middleware);
server.use('/main', routes);
server.listen(PORT, () => {
  return console.log(`Server running, port: ${PORT}...`);
});

export default server;
