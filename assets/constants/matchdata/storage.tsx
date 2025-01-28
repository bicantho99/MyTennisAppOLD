import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Store = {
  matchInfos: any;
  addMatchInfo: (newMatchInfo: any) => void;
  loadMatchInfos: () => void;
  clearStorage: () => void;
  deleteMatchInfo: (matchId: string) => void;
  editMatchInfo: (updatedMatchInfo: any) => void;
};

export const useMatchStore = create<Store>((set) => ({
  matchInfos: [],
  addMatchInfo: async (newMatchInfo) => {
    set((state) => {
      const updatedMatchInfos = [newMatchInfo, ...state.matchInfos];
      AsyncStorage.setItem("matchInfos", JSON.stringify(updatedMatchInfos));
      return { matchInfos: updatedMatchInfos };
    });
  },
  loadMatchInfos: async () => {
    const storedMatchInfos = await AsyncStorage.getItem("matchInfos");
    if (storedMatchInfos) {
      set({ matchInfos: JSON.parse(storedMatchInfos) });
    }
  },
  deleteMatchInfo: async (matchId) => {
    set((state) => {
      const updatedMatchInfos = state.matchInfos.filter(
        (matchInfo: any) => matchInfo.matchId !== matchId
      );
      AsyncStorage.setItem("matchInfos", JSON.stringify(updatedMatchInfos));
      return { matchInfos: updatedMatchInfos };
    });
  },
  clearStorage: async () => {
    await AsyncStorage.clear();
    set({ matchInfos: null });
  },
  editMatchInfo: async (updatedMatch) => {
    set((state) => {
      const index = state.matchInfos.findIndex(
        (match: any) => match.matchId === updatedMatch.matchId
      );

      if (index !== -1) {
        // Replace the existing match at the found index
        const updatedMatchInfos = [...state.matchInfos];
        updatedMatchInfos.splice(index, 1, updatedMatch); // Replaces the match at that index
        AsyncStorage.setItem("matchInfos", JSON.stringify(updatedMatchInfos));
        return { matchInfos: updatedMatchInfos };
      } else {
        // If match not found, return the current state
        return { matchInfos: state.matchInfos };
      }
    });
  },
}));
