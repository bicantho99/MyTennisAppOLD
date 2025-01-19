type DrillData = {
  drills: string[];
  notes: string[];
};

type WeekData = {
  [key: string]: {
    [key: string]: DrillData;
  };
};

export const doubleData: any = {
  "Poaching Scenarios": {
    "Warm Up": {
      drills: [
        "Mini Tennis - 30 balls in a row",
        "Baseline cross court - 20 Ball in a row",
        "Serve warm up each side x10",
      ],
      notes: [
        "Note: Warm up with good rhythm and consistency, adjust to court, ball conditions, etc.",
      ],
    },
    "Main Drills": {
      drills: [
        "Baseliner hit deep groundstrokes to set up volleyers ",
        "Serving and switching - baseliner and volleyr switch side after serve",
      ],
      notes: [
        "Note: Baseliner should focus on hitting solid groundstrokes and serve to set up volleyers",
        "Note: Volleyers look for every opportunities to poach",
      ],
    },
    "Point Play": {
      drills: [
        "Play points and apply the serving patterns above",
        "Play points with only one serve!!",
      ],
      notes: [
        "Focus on making consistent first serve and placement when playing double",
      ],
    },
  },
  "Serving Formations": {
    "Warm Up": {
      drills: [
        "Mini Tennis",
        "Baseline cross court",
        "Serve warm up each side x10",
      ],
      notes: [
        "Note: Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
      ],
    },
    "Main Drills": {
      drills: [
        "Practice Australian and I formation on both deuce and ad side",
        "Volleyers encouraged to be poaching for extra points if poached",
      ],
      notes: [
        "Focus on the quality of serve and volleyers aggressive prow the nets",
      ],
    },
    "Point Play": {
      drills: [
        "Play points with emphasis on trying different formations",
        "Play points where you get extra points if you try out I formation or australian formation",
      ],
      notes: ["Focus on depth and height of the return"],
    },
  },
  "Practice Sets": {
    "Warm Up": {
      drills: ["Mini Tennis", "Baseline middle", "Serve warm up each side"],
      notes: [
        "Note: Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
      ],
    },
    "Main Drills": {
      drills: ["Play practice sets", "Play practice tie breakers"],
      notes: [
        "Try out different serving and poaching patterns in past 2 practices",
      ],
    },
    "Point Play": {
      drills: [
        "Do an experiment. No negative body language for an entire set. See how good that feels",
      ],
    },
  },
  "Baseline Patterns": {
    "Warm Up": {
      drills: [
        "Mini Tennis",
        "Baseline middle - 20 Ball in a row or 5 balls in a row",
        "Serve warm up each side",
      ],
      notes: [
        "Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
      ],
    },
    "Main Drills": {
      drills: [
        "Returner Lob Cross Court",
        "Returner Lob Down The Line",
        "Return Deep Lob and approach the net",
      ],
      notes: ["Return Lob is surprising very high in pro tournament"],
    },
    "Point Play": {
      drills: [
        "Play points off the ground no serve with emphasis on hitting forehands",
        "Play points and look to hit more forehand than backhand when ball land on the ad side",
      ],
      notes: ["Focus on depth and height of the return"],
    },
  },
  "Net Wizard": {
    "Warm Up": {
      drills: [
        "Mini Tennis - 30 balls in a row",
        "Baseline middle - 20 Ball in a row",
        "Serve warm up each side x10",
      ],
      notes: [
        "Note: Warm up with good rhythm and consistency, adjust to court, ball conditions, etc.",
      ],
    },
    "Main Drills": {
      drills: [
        "Baseliner Volleyer practice - volley past the baseline 30 balls",
        "Serve and Volleys - first volley cross and deep",
        "Serve and HALF volleys",
      ],
      notes: [
        "Note: as you moving up to the net from baseline, you will do lots of half volley and volley half court - work on those",
      ],
    },
    "Point Play": {
      drills: [
        "Play points 2 at net and 2 baseline",
        "Play approach volley overhead",
      ],
      notes: ["Focus on having a strong second serve physically and mentally"],
    },
  },
  "Top-spin lob": {
    "Warm Up": {
      drills: [
        "Mini Tennis",
        "Baseline cross court",
        "Serve warm up each side x10",
      ],
      notes: [
        "Note: Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
      ],
    },
    "Main Drills": {
      drills: [
        "Drill top spin forehand and backhand lob",
        "Drill slice forehand backhand lob",
      ],
      notes: [
        "Coach can serve from the opposite site on the service line",
        "Focus on depth of the return and aim middle",
      ],
    },
    "Point Play": {
      drills: ["Play points with emphasis on lobbing"],
      notes: [
        "This is a serious strategies that is being underplayed by juniors",
      ],
    },
  },
  "Practice Sets 2": {
    "Warm Up": {
      drills: ["Mini Tennis", "Baseline middle", "Serve warm up each side"],
      notes: [
        "Note: Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
      ],
    },
    "Main Drills": {
      drills: [
        "Play practice sets or practice tie breakers",
        "Play with more weapons such as topspin and slice lobs",
      ],
      notes: ["Focus on depth of the return and aim middle"],
    },
    "Point Play": {
      drills: [
        "Do an experiment. No negative body language for an entire set. See how good that feels",
        "Play points where you get extra points if return is pass the service line",
      ],
      notes: ["Focus on depth and height of the return"],
    },
  },
  "Baseline Patterns 2": {
    "Warm Up": {
      drills: [
        "Mini Tennis",
        "Baseline middle - 20 Ball in a row or 5 balls in a row",
        "Serve warm up each side",
      ],
      notes: [
        "Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
      ],
    },
    "Main Drills": {
      drills: [
        "Baseliner - hit 2 cross court top spin and 1 lob top spin down the line - Deuce side",
        "Baseliner - hit 2 cross court top spin and 1 lob top spin down the line - Ad side",
        "Baseliner - slice and approach - Deuce side",
        "Baseliner - slice and approach - Ad side",
      ],
      notes: [
        "Coach can serve from the opposite site on the service line",
        "Focus on depth of the return and aim middle",
      ],
    },
    "Point Play": {
      drills: [
        "Play points with emphasis on approaching the net",
        "Play points and look to hit more forehand than backhand when ball land on the ad side",
      ],
      notes: ["Focus on depth and height of the return"],
    },
  },
  "Serving Patterns 3": {
    "Warm Up": {
      drills: [
        "Mini Tennis - 30 balls in a row",
        "Baseline cross-court middle - 15 balls in a row to develop rhythm.",
        "Serve warm-up each side x10, targeting wide and T serves.",
      ],
      notes: [
        "Note: Warm up with good rhythm and consistency, adjust to court, ball conditions, etc.",
      ],
    },
    "Main Drills": {
      drills: [
        "Serve wide on the deuce side, partner poaches (practice volleying at the net).",
        "Serve T on the ad side, partner covers the middle for the return.",
        "Mix serves (wide, body, T), and practice coordinated movement with your partner",
      ],
      notes: ["Note: Work on communication with partner"],
    },
    "Point Play": {
      drills: [
        "Play points where the server’s team gets an extra point for winning points off a poach or volley",
        "Serve and volley practice: The server must approach the net after every serve",
      ],
      notes: ["Focus on having a strong second serve physically and mentally"],
    },
  },
  "Returning Patterns 3": {
    "Warm Up": {
      drills: [
        "Mini Tennis",
        "Baseline cross court",
        "Serve warm up each side x10",
      ],
      notes: [
        "Note: Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
      ],
    },
    "Main Drills": {
      drills: [
        "Cross-court deep returns to neutralize the server’s advantage",
        "Cross-court spin return to opponent's feet",
        "Chip or slice returns to the feet of the net player.",
        "Lob returns over the net player’s head to force them back.",
      ],
      notes: [
        "Focus on communication with your parnter on your return strategies",
      ],
    },
    "Point Play": {
      drills: [
        "Return points where you aim for the net player’s feet or lob over them.",
        "Play points where you get extra points if return is pass the service line",
      ],
      notes: [
        "Focus on keeping returns low or forcing the opposing net player into tough positions.",
      ],
    },
  },
  "Practice Sets 3": {
    "Warm Up": {
      drills: ["Mini Tennis", "Baseline middle", "Serve warm up each side"],
      notes: [
        "Note: Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
      ],
    },
    "Main Drills": {
      drills: [
        "play practice sets, alternating between different serve formations",
        "Experiment with playing two back or two net",
      ],
      notes: [
        "Focus on maintaining consistent communication and adapting strategies based on opponents’ weaknesses.",
      ],
    },
    "Point Play": {
      drills: [
        "Do an experiment. No negative body language for an entire set. See how good that feels",
      ],
      notes: ["Focus on depth and height of the return"],
    },
  },
  "Net Play": {
    "Warm Up": {
      drills: [
        "Mini Tennis",
        "Baseline middle - 20 Ball in a row or 5 balls in a row",
        "Serve warm up each side",
      ],
      notes: [
        "Warm up with good rhythm, height and consistency, adjust to each opponent's ball.",
      ],
    },
    "Main Drills": {
      drills: [
        "Volley-to-volley drills at the net (simulate fast exchanges).",
        "Overhead practice: one player lobs, the other practices overhead smashes.",
        "Baseline drills: one player at the net while the other practices passing shots.",
      ],
      notes: ["Practice recognizing opportunities to poach."],
    },
    "Point Play": {
      drills: [
        "Play points where one player starts at the net, and the other at the baseline.",
        "Play points emphasizing aggressive net play, with extra points for poaches or forced errors.",
      ],
      notes: ["Focus on depth and height of the return"],
    },
  },
};
