import http from 'http';
import { Sequelize } from 'sequelize/types';
import connection from './services/SequelizeClient';
import Config from './config/Config';
import ErrorHandler from './middlewares/ErrorHandler';
//import app from './server';

//import 'reflect-metadata';
import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { NotFoundError } from './utils/ApiError';
//import ErrorHandler from './middlewares/ErrorHandler';
import routes from './routes';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', routes);

app.use((req: Request, res: Response, next: NextFunction) => next(new NotFoundError(req.path)));
app.use(ErrorHandler.handle());



const PORT = Config.port || 61529;

let server: http.Server;
let dbClient: Sequelize | undefined;
const startServer = async () => {
  try {
    dbClient = await connection.sync();
    server = app.listen(PORT, (): void => {
      console.log(`Connected successfully on port ${PORT}`);
    });
  } catch (error: any) {
    console.error(`Error occurred: ${error.message}`);
  }
};

startServer();

ErrorHandler.initializeUnhandledException();

process.on('SIGTERM', () => {
  console.info('SIGTERM received');
  if (dbClient) dbClient.close();
  if (server) server.close();
});

export default app;