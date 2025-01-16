import { useState } from "react";

export function trainingData() {
  const [data, setData] = useState<any>({
    backhandDrills: {
      name: "Backhand Drills",
      warmUp: {
        drills: [
          "Mini Tennis - 30 balls totals",
          "Baseline cross court - 20 Ball in a row or 5 balls in a row (x4)",
          "Serve warm up each side x10",
        ],
        notes: [
          "Focus on proper grip and follow-through for a consistent backhand.",
        ],
      },
      mainDrills: {
        drills: [
          "Backhand cross-court rally with partner (10 minutes)",
          "Backhand down the line, focusing on power and precision (10 minutes)",
          "Backhand slice practice, focusing on spin and control (10 minutes)",
        ],
        notes: ["Focus on keeping the backhand consistent with good footwork."],
      },
      wrapUp: {
        drills: [
          "Play points where you need to use your backhand to win the point",
          "Play points with emphasis on hitting backhands with depth and placement",
        ],
        notes: ["Focus on timing and accuracy with the backhand."],
      },
    },
    defensiveDrills: {
      name: "Defensive Drills",
      warmUp: {
        drills: [
          "Mini Tennis - 30 balls totals",
          "Baseline middle - 20 Ball in a row or 5 balls in a row (x4)",
          "Serve warm up each side x10",
        ],
        notes: [
          "Warm up with good rhythm, staying balanced and alert to anticipate the opponent's shots.",
        ],
      },
      mainDrills: {
        drills: [
          "Defensive baseline rally with partner, focus on deep returns and maintaining position (10 minutes)",
          "Defensive slice forehand and backhand practice (10 minutes)",
          "Work on defending against hard-hitting shots and getting back into position (10 minutes)",
        ],
        notes: [
          "Focus on being able to absorb power and redirect shots with control.",
        ],
      },
      wrapUp: {
        drills: [
          "Play points with an emphasis on defending from the baseline",
          "Play points with focus on returning deep balls to neutralize attacks",
        ],
        notes: ["Focus on patience and strategic shot selection in defense."],
      },
    },
    approachShots: {
      name: "Approach Shots",
      warmUp: {
        drills: [
          "Mini Tennis - 30 balls totals",
          "Baseline cross court - 20 Ball in a row or 5 balls in a row (x4)",
          "Serve warm up each side x10",
        ],
        notes: [
          "Warm up by focusing on balance and good body positioning for approach shots.",
        ],
      },
      mainDrills: {
        drills: [
          "Practice hitting approach shots and moving to the net (10 minutes)",
          "Forehand approach shot followed by volley (10 minutes)",
          "Backhand approach shot and follow with overhead smash (10 minutes)",
        ],
        notes: [
          "Work on getting low to the ball and anticipating your opponent's return.",
        ],
      },
      wrapUp: {
        drills: [
          "Play points with emphasis on attacking with approach shots",
          "Play points where you aim for an approach shot to open up the court",
        ],
        notes: [
          "Focus on the ability to set up points with aggressive approach shots.",
        ],
      },
    },
    returnOfServe: {
      name: "Return of Serve",
      warmUp: {
        drills: [
          "Mini Tennis - 30 balls totals",
          "Baseline cross court - 20 Ball in a row or 5 balls in a row (x4)",
          "Serve warm up each side x10",
        ],
        notes: [
          "Warm up with focus on reading the opponent's serve and reacting quickly.",
        ],
      },
      mainDrills: {
        drills: [
          "Return of serve with focus on depth and placement (10 minutes)",
          "Practice returning fast serves with slice and power (10 minutes)",
          "Practice chip returns with focus on getting the ball deep (10 minutes)",
        ],
        notes: [
          "Focus on getting your returns deep and aiming for the middle of the court.",
        ],
      },
      wrapUp: {
        drills: [
          "Play points with emphasis on returning serves aggressively",
          "Play points with focus on making the return as deep and neutral as possible",
        ],
        notes: [
          "Ensure your return is deep and forces your opponent to play on the back foot.",
        ],
      },
    },
  });
}
