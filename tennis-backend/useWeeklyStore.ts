import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Challenge = {
  id: number;
  descr: string;
  text: string;
};

export const useWeeklyStore = create<any>((set) => ({
  challenges: [
    {
      id: 1,
      text: "Slap Forehand Winner",
      descr: "A great way to show off your power",
    },

    {
      id: 2,
      text: "Drop Shot Winner",
      descr: "A great way to troll your opponent",
    },
    {
      id: 3,
      text: "Hitting More Tweener",
      descr: "A great way to get more attention",
    },
    {
      id: 4,
      text: "High Percentage Tennis",
      descr: "A great way to improve consistency",
    },
    {
      id: 5,
      text: "Improving My Footwork",
      descr: "A great way to improve your reaction",
    },
    {
      id: 6,
      text: "Groundstrokes Depth",
      descr: "A great way to win more points",
    },
    {
      id: 7,
      text: "Bigger Target Placement",
      descr: "A great way to improve consistency",
    },

    {
      id: 8,
      text: "Higher Net Clearance",
      descr: "A great way to improve depth",
    },
  ],
}));
