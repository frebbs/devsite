import pkg from 'pg';
const { Pool } = pkg;

export const dbPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    user: 'postgres',
    // host: '127.0.0.1',
    database: 'app1',
    password: 'password',
    port: 5432,
});