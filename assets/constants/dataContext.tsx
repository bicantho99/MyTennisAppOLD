/** auth-content.tsx */

// react
import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface TrainingData {
  title: string;
  description: string;
  numDrills?: number;
  time?: string;
  focuses?: { focus: string }[] | null;
  warmUp?: string[];
  mainDrills?: string[];
  fitness?: string[];
  recovery?: string[];
}

type TrainingDataType = {
  programData: TrainingData[];
  setProgramData: Dispatch<SetStateAction<TrainingData[]>>;
};

const TrainingDataContext = createContext<TrainingDataType | undefined>(
  undefined
);

function useTrainingData(): TrainingDataType {
  const context = useContext(TrainingDataContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

const TrainingDataProvider = (props: { children: ReactNode }): ReactElement => {
  const [programData, setProgramData] = useState<TrainingData[]>([
    {
      title: "Solid Groundstrokes",
      numDrills: 5,
      time: "54",
      focuses: [
        { focus: "Footwork" },
        { focus: "Forehand" },
        { focus: "Backhand" },
      ],
      description:
        "This practice focuses on solid forehand and backhand along with endurance training to make sure techniques don't break down when it's tiring.",
      warmUp: ["Jogging for 5 minutes", "Dynamic stretches", "Shadow swings"],
      mainDrills: [
        "Cross-court forehand drill",
        "Cross-court backhand drill",
        "Down-the-line forehand and backhand drill",
        "Rally with a partner focusing on consistency",
        "Target practice for depth and placement",
      ],
      fitness: ["Sprints", "Side-to-side shuffles", "Lunges"],
      recovery: ["Cooldown stretches", "Foam rolling"],
    },
    {
      title: "Serving with Precision",
      numDrills: 4,
      time: "45",
      focuses: [
        { focus: "Serve" },
        { focus: "Accuracy" },
        { focus: "Consistency" },
      ],
      description:
        "Designed to improve serve placement and accuracy under pressure, focusing on technique, toss consistency, and follow-through.",
      warmUp: [
        "Shoulder circles",
        "Serve motion practice without the ball",
        "Short serves to get the motion flowing",
      ],
      mainDrills: [
        "Serve to specific zones",
        "Flat serve practice",
        "Spin serve practice",
        "Simulated pressure serving (e.g., deuce point scenarios)",
      ],
      fitness: [
        "Medicine ball throws",
        "Core exercises (plank, Russian twists)",
      ],
      recovery: ["Stretching for shoulder and back muscles"],
    },
    {
      title: "Net Game Mastery",
      numDrills: 6,
      time: "50",
      focuses: [
        { focus: "Volley" },
        { focus: "Overhead" },
        { focus: "Quick Reflexes" },
      ],
      description:
        "This program emphasizes net play, teaching players how to execute clean volleys, strong overheads, and improve reflexes at the net.",
      warmUp: [
        "Short court rallying",
        "Footwork drills focusing on moving forward",
        "Overhead shadow swings",
      ],
      mainDrills: [
        "Forehand and backhand volley practice",
        "Reaction volleys with a partner",
        "Overhead smash drill",
        "Net approach drill with a partner",
        "2-on-1 net play scenario practice",
        "Quick reflex volley feeder drill",
      ],
      fitness: ["Jump rope", "Box jumps", "Lateral agility drills"],
      recovery: ["Stretching for legs and shoulders"],
    },
    {
      title: "Baseline Consistency",
      numDrills: 5,
      time: "48",
      focuses: [
        { focus: "Endurance" },
        { focus: "Forehand" },
        { focus: "Backhand" },
      ],
      description:
        "Focused on baseline play, this program improves shot consistency under prolonged rallies and tough conditions.",
      warmUp: ["Light jogging", "Dynamic stretches", "Short baseline rallies"],
      mainDrills: [
        "Cross-court rally drill",
        "Down-the-line rally drill",
        "Alternating forehand and backhand drill",
        "Consistency rally (target: 50 shots in a row)",
        "Heavy topspin practice",
      ],
      fitness: ["Endurance runs", "Interval sprints", "Core strengthening"],
      recovery: ["Mental visualization exercises", "Cooldown yoga"],
    },
    {
      title: "Match Strategy",
      numDrills: 3,
      time: "40",
      focuses: [
        { focus: "Tactics" },
        { focus: "Mental Toughness" },
        { focus: "Game Plan" },
      ],
      description:
        "Learn how to outsmart opponents through effective game planning, tactics, and mental focus during matches.",
      warmUp: [
        "Dynamic stretching",
        "Shadow drills",
        "Short rallies focusing on placement",
      ],
      mainDrills: [
        "Simulated match scenarios",
        "Playing with intentional shot patterns",
        "Practice breaking an opponent's pattern",
      ],
      fitness: ["Agility ladder", "Short sprints", "Reaction drills"],
      recovery: ["Meditation for focus", "Post-session analysis"],
    },
    {
      title: "Footwork Fundamentals",
      numDrills: 7,
      time: "60",
      focuses: [
        { focus: "Agility" },
        { focus: "Speed" },
        { focus: "Positioning" },
      ],
      description:
        "Dedicated to footwork improvement, this program builds speed, agility, and positioning skills to dominate the court.",
      warmUp: ["High knees", "Butt kicks", "Side-to-side shuffles"],
      mainDrills: [
        "Cone drills for direction changes",
        "Sprint-stop-sprint patterns",
        "Lateral movement drills",
        "Baseline to net footwork",
        "Recover to the middle after every shot drill",
        "Shadow swings with precise foot positioning",
        "Footwork under pressure drill",
      ],
      fitness: ["Squat jumps", "Lunges with rotation", "Plyometric drills"],
      recovery: ["Stretching for legs", "Balance exercises"],
    },
  ]);

  return (
    <TrainingDataContext.Provider
      {...props}
      value={{ programData, setProgramData }}
    />
  );
};

export { TrainingDataProvider, useTrainingData };

export const programName = {
  1: {
    coach: "Coach Cecile",
    totalWeeks: 3,
    title: "Prep For Tournament",
    description: "Training focusing on match play's importants",
    tags: ["Serve", "Return", "Net Game", "Mental"],
  },
  2: {
    coach: "Coach Jakub Novak",
    totalWeeks: 3,
    title: "Double Trouble Strategies",
    description: "Training for a strong serve and quick volleys",
    tags: ["Serve", "Volley", "Footwork", "Tactics"],
  },
};

export const programDatas = {
  1: [
    {
      state: false,
      time: "45 Mins to 60 Mins",
      title: "Short Ball Hunter",
      description: "Approaching the net has a wonderful winning percentage",
      borderColor: "border-teal-400",
    },

    {
      state: false,
      time: "45 Mins to 60 Mins",
      title: "Serving Patterns",
      description:
        "Combine the Serve & the first two-three shots after the serve into 1 unit.",
      borderColor: "border-blue-400",
    },
    {
      state: false,
      time: "45 Mins to 60 Mins",
      title: "Between The Points",
      description:
        "This area focuses on the mental and emotional aspects of your game",
      borderColor: "border-teal-400",
    },
    {
      state: false,
      time: "45 Mins to 60 Mins",
      title: "Baseline Patterns and Strategies",
      description: "Discover the best baseline practices",
      borderColor: "border-blue-400",
    },
  ],

  2: [
    {
      state: false,
      time: "45 Mins to 60 Mins",
      title: "Double Hunter",
      description: "Approaching the net has a wonderful winning percentage",
      borderColor: "border-teal-400",
    },
    {
      state: false,
      time: "45 Mins to 60 Mins",
      title: "Poaching Pattern",
      description:
        "Combine the Serve & the first two-three shots after the serve into 1 unit.",
      borderColor: "border-blue-400",
    },
    {
      state: false,
      time: "45 Mins to 60 Mins",
      title: "Serving Pattern",
      description:
        "This area focuses on the mental and emotional aspects of your game",
      borderColor: "border-teal-400",
    },
    {
      state: false,
      time: "45 Mins to 60 Mins",
      title: "The Lob Return",
      description: "Discover the best baseline practices",
      borderColor: "border-blue-400",
    },
  ],
};
