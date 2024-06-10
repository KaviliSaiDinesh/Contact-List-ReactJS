const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.json());


const pool = new Pool({
  user: 'postgres', 
  host: 'db',
  database: 'postgres',
  password: 'saidinesh',
  port: 5432,
});


app.get('/contacts', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/contacts/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts WHERE id = $1', [req.params.id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/contacts', async (req, res) => {
  const { name, email, mobile, designation, company} = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO contacts (name, email, mobile, designation, company) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, mobile, designation, company]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/contacts/:id', async (req, res) => {
  const { name, email, mobile, designation, company } = req.body;
  try {
    const result = await pool.query(
      'UPDATE contacts SET name = $1, email = $2, mobile = $3, designation = $4, company = $5 WHERE id = $6 RETURNING *',
      [name, email, mobile, designation, company, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/contacts/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM contacts WHERE id = $1', [req.params.id]);
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
