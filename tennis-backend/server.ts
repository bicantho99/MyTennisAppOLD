import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Add a workout
app.post("/workouts", async (req, res) => {
  const { googleId, date, technique } = req.body;
  try {
    const [user] = await pool.query(`SELECT id FROM users WHERE google_id = ?`, [googleId]);
    let userId = user[0]?.id;
    if (!userId) {
      const [result] = await pool.query(
        `INSERT INTO users (google_id, email, name) VALUES (?, ?, ?)`,
        [googleId, req.body.email, req.body.name]
      );
      userId = result.insertId;
    }

    await pool.query(
      `INSERT INTO workouts (user_id, date, technique) VALUES (?, ?, ?)`,
      [userId, date, technique]
    );
    res.status(201).send("Workout added");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding workout");
  }
});

// Fetch daily challenges
app.get("/daily-challenges", async (req, res) => {
  const { googleId, date } = req.query;
  try {
    const [challenges] = await pool.query(
      `SELECT c.challenge, c.completed
       FROM daily_challenges c
       JOIN users u ON c.user_id = u.id
       WHERE u.google_id = ? AND c.date = ?`,
      [googleId, date]
    );
    res.json(challenges);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching daily challenges");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
