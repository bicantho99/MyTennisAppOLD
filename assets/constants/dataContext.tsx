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
  time: string;
  focuses?: { focus: string }[] | null;
  warmUp?: string[];
  mainDrills?: string[];
  fitness?: string[];
  other?: string[];
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
      warmUp: [],
      mainDrills: [],
      fitness: [],
      other: [],
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
      warmUp: [],
      mainDrills: [],
      fitness: [],
      other: [],
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
      warmUp: [],
      mainDrills: [],
      fitness: [],
      other: [],
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
      warmUp: [],
      mainDrills: [],
      fitness: [],
      other: [],
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
      warmUp: [],
      mainDrills: [],
      fitness: [],
      other: [],
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
      warmUp: [],
      mainDrills: [],
      fitness: [],
      other: [],
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
