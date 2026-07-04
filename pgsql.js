import express from 'express';
import pkg from 'pg';

const { Pool } = pkg;
const app = express();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'store_db',
  password: 'ashish',
  port: 5432,
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM orders;');
  res.send(result.rows);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));