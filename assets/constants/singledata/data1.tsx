type DrillData = {
  drills: string[];
  notes: string[];
};

type WeekData = {
  [key: string]: {
    [key: string]: DrillData;
  };
};

export const singleDataWeek1: any = {
  "Serving Patterns": {
    "Warm Up": {
      drills: [
        "Mini Tennis - 30 balls totals",
        "Baseline cross court - 20 Ball in a row or 5 balls in a row (x4)",
        "Serve warm up each side x10",
      ],
      notes: [
        "Warm up with good rhythm and consistency, adjust to court, ball conditions, etc.",
      ],
    },
    "Main Drills": {
      drills: [
        "Combine a serve and forehands to opponent's backhand on deuce side (x15)",
        "Serve and Volleys to Opponent's backhand (x10)",
        "2nd Serve to opponent's backhand or T on deuce side (x10)",
      ],
      notes: ["Focus on maximizing your strengths to your opponent's weakness"],
    },
    "Point Play": {
      drills: [
        "Play points and apply the serving patterns above",
        "Play points with second serve only",
      ],
      notes: ["Focus on having a strong second serve physically and mentally"],
    },
  },
  "Returning Patterns": {
    "Warm Up": {
      drills: [
        "Mini Tennis - 30 balls totals",
        "Baseline cross court - 20 Ball in a row or 5 balls in a row (x4)",
        "Serve warm up each side x10",
      ],
      notes: [
        "Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
      ],
    },
    "Main Drills": {
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
    "Point Play": {
      drills: [
        "Play points with emphasis on deep return",
        "Play points where you get extra points if return is pass the service line",
      ],
      notes: ["Focus on depth and height of the return"],
    },
  },
  "Between The Points": {
    "Warm Up": {
      drills: [
        "Mini Tennis - 30 balls totals",
        "Baseline middle - 20 Ball in a row or 5 balls in a row (x4)",
        "Serve warm up each side x10",
      ],
      notes: [
        "Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
      ],
    },
    "Main Drills": {
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
    "Point Play": {
      drills: [
        "Do an experiment. No negative body language for an entire set. See how good that feels",
        "Play points where you get extra points if return is pass the service line",
      ],
      notes: ["Focus on depth and height of the return"],
    },
  },
  "Baseline Patterns": {
    "Warm Up": {
      drills: [
        "Mini Tennis - 30 balls totals",
        "Baseline middle - 20 Ball in a row or 5 balls in a row (x4)",
        "Serve warm up each side x10",
      ],
      notes: [
        "Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
      ],
    },
    "Main Drills": {
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
    "Point Play": {
      drills: [
        "Play points off the ground no serve with emphasis on hitting forehands",
        "Play points and look to hit more forehand than backhand when ball land on the ad side",
      ],
      notes: ["Focus on depth and height of the return"],
    },
  },
};
