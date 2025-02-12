const express = require("express");
const cors = require("cors");
require("dotenv").config(); 

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

console.log("🚀 Tennis App Backend is running...");

// Sample player stats and training logs
const playerStats = {
  name: "Natalie",
  wins: 23,
  losses: 5,
  trainingLogs: [
    { date: "2025-02-12", drill: "Forehand Drills", duration: "30 mins" },
    { date: "2025-02-10", drill: "Backhand Practice", duration: "45 mins" },
  ],
};

// Endpoint to fetch player stats
app.get("/api/stats", (req, res) => {
  console.log("📡 Fetching player stats...");
  res.json(playerStats);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
