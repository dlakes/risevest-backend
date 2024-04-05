import { Sequelize } from 'sequelize-typescript';
//import config from '../config/Config';

// const connection = new Sequelize({
//   dialect: 'postgres', //'mysql',
//   host:  config.dbHost,
//   username: config.dbUser,
//   password: config.dbPassword,
//   database: config.dbName,
//   //logging: true,
//   models: [__dirname + '/../models/**.ts'],
// });

const connection = new Sequelize('postgres://udlc914hm9dq7g:pb05f1598b48f91a902ca26afb506013a8f6fd3c36ae3d991de9c321709624c09@c2fdaem59i7d3.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d63kcoffvpdnip');

export default connection;
