import { useState } from "react";

export function trainingData() {
  const [data, setData] = useState<any>({
    volleying: {
      name: "Volleying",
      warmUp: {
        drills: [
          "Mini Tennis - 30 balls totals",
          "Baseline cross court - 20 Ball in a row or 5 balls in a row (x4)",
          "Serve warm up each side x10",
        ],
        notes: [
          "Warm up with good rhythm and consistency, adjust to court, ball conditions, etc.",
        ],
      },
      mainDrills: {
        drills: [
          "Volleying down the line with partner baseline (10 minutes)",
          "Volley but start at half court and move forward work on low and half volleys (10 minutes)",
          "Hit top-spin lob from backhand then forehand (10 minutes)",
        ],
        notes: [
          "Focus on maximizing your strengths to your opponent's weakness",
        ],
      },
      wrapUp: {
        drills: [
          "Play points with serve and poach as much as possible",
          "Play approach volley overhead",
        ],
        notes: [
          "Focus on having a strong second serve physically and mentally",
        ],
      },
    },
    lobReturn: {
      name: "Lob Return",
      warmUp: {
        drills: [
          "Mini Tennis - 30 balls totals",
          "Baseline cross court - 20 Ball in a row or 5 balls in a row (x4)",
          "Serve warm up each side x10",
        ],
        notes: [
          "Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
        ],
      },
      mainDrills: {
        drills: [
          "Return deep pass the service line - focus on depth of the return (x15)",
          "Return far back behind the baseline - big swing and height - Rafa style (x10)",
          "Return early on the baseline (x10)",
          "Return slice (x10)",
        ],
        notes: [
          "Coach can serve from the opposite site on the service line",
          "Focus on depth of the return and aim middle",
        ],
      },
      wrapUp: {
        drills: [
          "Play points with emphasis on deep return",
          "Play points where you get extra points if return is pass the service line",
        ],
        notes: ["Focus on depth and height of the return"],
      },
    },
    betweenThePoints: {
      name: "Between the Points",
      warmUp: {
        drills: [
          "Mini Tennis - 30 balls totals",
          "Baseline middle - 20 Ball in a row or 5 balls in a row (x4)",
          "Serve warm up each side x10",
        ],
        notes: [
          "Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
        ],
      },
      mainDrills: {
        drills: [
          "Play practice sets or practice tie breakers",
          "Experiment with serving and return patterns in the two previous practice",
          "Take time in between points to adjust and take things into consideration",
        ],
        notes: [
          "Coach can serve from the opposite site on the service line",
          "Focus on depth of the return and aim middle",
        ],
      },
      wrapUp: {
        drills: [
          "Do an experiment. No negative body language for an entire set. See how good that feels",
          "Play points where you get extra points if return is pass the service line",
        ],
        notes: ["Focus on depth and height of the return"],
      },
    },
    baselinePatterns: {
      name: "Baseline Patterns",
      warmUp: {
        drills: [
          "Mini Tennis - 30 balls totals",
          "Baseline middle - 20 Ball in a row or 5 balls in a row (x4)",
          "Serve warm up each side x10",
        ],
        notes: [
          "Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
        ],
      },
      mainDrills: {
        drills: [
          "Hit run-around forehand on ad side cross court side 4 times a row 10 times (4x10)",
          "Hit run-around forehand on ad side down the line (4x10)",
          "Forehand 2-1 - two forehand cross court, one forehand down the line (3x10)",
        ],
        notes: [
          "Coach can serve from the opposite site on the service line",
          "Focus on depth of the return and aim middle",
        ],
      },
      wrapUp: {
        drills: [
          "Play points off the ground no serve with emphasis on hitting forehands",
          "Play points and look to hit more forehand than backhand when ball land on the ad side",
        ],
        notes: ["Focus on depth and height of the return"],
      },
    },
  });
}
