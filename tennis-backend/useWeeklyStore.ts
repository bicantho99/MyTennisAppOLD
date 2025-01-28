import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Challenge = {
  day: number;
  text: string;
  completed: boolean;
};

type ChallengeState = {
  challenges: Challenge[];
  toggleChallenge: (day: number) => void;
  loadChallenges: () => Promise<void>;
};

const CHALLENGES_KEY = "weekly_challenges";

export const useWeeklyStore = create<ChallengeState>((set) => ({
  challenges: [], // Initially empty, loaded from AsyncStorage

  toggleChallenge: async (day) => {
    set((state) => {
      const updatedChallenges = state.challenges.map((challenge) =>
        challenge.day === day
          ? { ...challenge, completed: !challenge.completed }
          : challenge
      );
      AsyncStorage.setItem(CHALLENGES_KEY, JSON.stringify(updatedChallenges));
      return { challenges: updatedChallenges };
    });
  },

  loadChallenges: async () => {
    const storedChallenges = await AsyncStorage.getItem(CHALLENGES_KEY);
    if (storedChallenges) {
      set({ challenges: JSON.parse(storedChallenges) });
    } else {
      // Initialize default challenges if none exist
      const defaultChallenges: Challenge[] = [
        { day: 1, text: "Use Serve and Volley", completed: false },
        { day: 2, text: "Use Serve + Forehands", completed: false },
        { day: 3, text: "Win 3 points in a row", completed: false },
        { day: 4, text: "Hit Aces x4", completed: false },
        { day: 5, text: "Return Approach x4", completed: false },
        { day: 6, text: "Use Slice + Run Around Forehands", completed: false },
        { day: 7, text: "Use the 2-1 Pattern", completed: false },
      ];
      AsyncStorage.setItem(CHALLENGES_KEY, JSON.stringify(defaultChallenges));
      set({ challenges: defaultChallenges });
    }
  },
}));
