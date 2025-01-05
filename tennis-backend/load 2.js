require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  ssl: {
    ca: fs.readFileSync(process.env.DB_SSL_CA), // Load the CA certificate
  },
});

(async () => {
  try {
    const db = await connection;
    console.log('Connected to the database!');
    // Run your queries here
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
})();
