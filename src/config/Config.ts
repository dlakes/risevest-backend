import dotenv from 'dotenv';
dotenv.config({ path: __dirname + `/../../.env.${process.env.NODE_ENV}` });

const config = {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
  dbHost: process.env.DB_HOST ?? 'localhost',
  dbUser: process.env.DB_USER ?? 'root',
  dbPassword: process.env.DB_PASSWORD ?? '',
  dbName: process.env.DB_NAME ?? 'test_db',
};

export default config;
