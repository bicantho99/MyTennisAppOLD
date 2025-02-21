const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5001;

app.use(cors({ origin: "*" }));
app.use(express.json());

console.log("🚀 Tennis App Backend is running...");

// **Sample Data for Player and Match Stats**
let playerData = {
  name: "Natalie",
  wins: 23,
  losses: 5,
  trainingLogs: [
    { date: "2025-02-12", drill: "Forehand Drills", duration: "30 mins" },
    { date: "2025-02-10", drill: "Backhand Practice", duration: "45 mins" },
    { date: "2025-02-08", drill: "Serve Accuracy", duration: "40 mins" },
  ],
};

let matchData = [
  { matchId: 1, opponent: "Serena", result: "Win", score: "6-3, 6-4" },
  { matchId: 2, opponent: "Venus", result: "Loss", score: "5-7, 6-3, 4-6" },
  { matchId: 3, opponent: "Osaka", result: "Win", score: "6-1, 6-2" },
];

// **Function to Compute Aggregated Stats**
const computeAggregatedStats = () => {
  const totalMatches = playerData.wins + playerData.losses;
  const winRate = totalMatches > 0 ? ((playerData.wins / totalMatches) * 100).toFixed(2) : "0";
  
  // Convert training durations to total minutes
  const totalTrainingMinutes = playerData.trainingLogs.reduce((sum, log) => {
    const minutes = parseInt(log.duration.split(" ")[0], 10);
    return sum + minutes;
  }, 0);

  return { totalMatches, winRate, totalTrainingMinutes };
};

// **API Endpoint: Fetch Player Stats + Aggregated Data**
app.get("/api/player-stats", (req, res) => {
  console.log("📡 Fetching player stats...");
  const aggregates = computeAggregatedStats();
  res.json({ ...playerData, ...aggregates });
});

// **API Endpoint: Fetch Match Stats**
app.get("/api/match-stats", (req, res) => {
  console.log("📡 Fetching match stats...");
  res.json(matchData);
});

// **Start Server**
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
