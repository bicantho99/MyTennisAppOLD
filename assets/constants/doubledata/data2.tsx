import { useState } from "react";

export function trainingData() {
  const [data, setData] = useState<any>({
    serveAndVolley: {
      name: "Serve and Volley",
      warmUp: {
        drills: [
          "Mini Tennis - 30 balls totals",
          "Baseline cross court - 20 Ball in a row or 5 balls in a row (x4)",
          "Serve warm up each side x10",
        ],
        notes: [
          "Warm up with good rhythm and consistency, focus on footwork and placement.",
        ],
      },
      mainDrills: {
        drills: [
          "Serve and volley drills with partner - focus on serve placement and quick approach to the net (10 minutes)",
          "Serve wide, then move to the net and intercept the return (10 minutes)",
          "Serve to the body, followed by a volley (10 minutes)",
        ],
        notes: ["Focus on positioning and anticipating the opponent's return."],
      },
      wrapUp: {
        drills: [
          "Play points with emphasis on serve and volley combination",
          "Work on attacking weak returns with volley",
        ],
        notes: [
          "Focus on transitioning from serve to net and attacking the first volley.",
        ],
      },
    },
    crossCourtForehand: {
      name: "Cross-Court Forehand",
      warmUp: {
        drills: [
          "Mini Tennis - 30 balls totals",
          "Baseline cross court - 20 Ball in a row or 5 balls in a row (x4)",
          "Serve warm up each side x10",
        ],
        notes: ["Focus on getting the ball deep and maintaining good rhythm."],
      },
      mainDrills: {
        drills: [
          "Hit cross-court forehands with partner, focusing on depth and consistency (10 minutes)",
          "Run-around forehand from the ad side and cross-court (10 minutes)",
          "Forehand cross-court with high spin (10 minutes)",
        ],
        notes: ["Work on hitting with more power while keeping consistency."],
      },
      wrapUp: {
        drills: [
          "Play points with focus on hitting cross-court forehands",
          "Play points with emphasis on making your forehand more effective",
        ],
        notes: ["Focus on maintaining control while hitting with power."],
      },
    },
    overheadSmash: {
      name: "Overhead Smash",
      warmUp: {
        drills: [
          "Mini Tennis - 30 balls totals",
          "Baseline cross court - 20 Ball in a row or 5 balls in a row (x4)",
          "Serve warm up each side x10",
        ],
        notes: [
          "Warm up with good rhythm, adjust to height and timing of the overheads.",
        ],
      },
      mainDrills: {
        drills: [
          "Practice overhead smashes from different angles (10 minutes)",
          "Simulate high lobs and smash them into the court (10 minutes)",
          "Perform overhead smashes while moving backward and forward (10 minutes)",
        ],
        notes: ["Focus on footwork, timing, and accuracy."],
      },
      wrapUp: {
        drills: [
          "Play points with emphasis on anticipating lobs and executing overhead smashes",
          "Play points and try to force your opponent into hitting lobs for smashes",
        ],
        notes: [
          "Ensure proper footwork and hitting with precision during overheads.",
        ],
      },
    },
    dropShot: {
      name: "Drop Shot",
      warmUp: {
        drills: [
          "Mini Tennis - 30 balls totals",
          "Baseline cross court - 20 Ball in a row or 5 balls in a row (x4)",
          "Serve warm up each side x10",
        ],
        notes: ["Focus on touch and feel for the drop shot."],
      },
      mainDrills: {
        drills: [
          "Practice drop shots from the baseline with partner (10 minutes)",
          "Try drop shots from the service line to test control and accuracy (10 minutes)",
          "Drop shots mixed with regular forehands, alternating during rally (10 minutes)",
        ],
        notes: ["Focus on disguise and making the drop shot unpredictable."],
      },
      wrapUp: {
        drills: [
          "Play points with emphasis on surprise drop shots",
          "Play points with focus on executing effective drop shots at key moments",
        ],
        notes: ["Focus on developing a deceptive and consistent drop shot."],
      },
    },
  });
}
