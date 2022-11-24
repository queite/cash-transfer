import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'example',
  database: process.env.DB_NAME || 'transfer',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'postgres',
}

export = config;