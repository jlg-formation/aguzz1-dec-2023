console.log('About to start a server...');

import express, { Request, Response, NextFunction } from 'express';
import serveIndex from 'serve-index';

import api from './api';

const app = express();
const port = 3000;

const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('req: ', req.method, req.url);
  next();
};

app.use(loggingMiddleware);

app.use('/api', api);

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
