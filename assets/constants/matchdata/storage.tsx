import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Store = {
  matchInfos: any;
  addMatchInfo: (newMatchInfo: any) => void;
  loadMatchInfos: () => void;
  clearStorage: () => void;
  deleteMatchInfo: (matchId: string) => void;
};

export const useMatchStore = create<Store>((set) => ({
  matchInfos: [],
  addMatchInfo: async (newMatchInfo) => {
    set((state) => {
      const updatedMatchInfos = [...state.matchInfos, newMatchInfo];
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
}));
