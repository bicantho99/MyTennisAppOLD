import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Store = {
  playerData: any;
  addPlayerInfo: (newMatchInfo: any) => void;
  loadPlayerInfos: () => void;
  clearStorage: () => void;
  deletePlayerInfo: (matchId: string) => void;
};

export const usePlayerStore = create<Store>((set) => ({
  playerData: [],
  addPlayerInfo: async (playerInfo) => {
    set((state) => {
      const updatedPlayersInfos = [playerInfo, ...state.playerData];
      AsyncStorage.setItem("playerInfo", JSON.stringify(updatedPlayersInfos));
      return { playerData: updatedPlayersInfos };
    });
  },
  loadPlayerInfos: async () => {
    const updatedPlayersInfos = await AsyncStorage.getItem("playerInfo");
    if (updatedPlayersInfos) {
      set({ playerData: JSON.parse(updatedPlayersInfos) });
    }
  },
  deletePlayerInfo: async (matchId) => {
    set((state) => {
      const updatedPlayersInfos = state.playerData.filter(
        (matchInfo: any) => matchInfo.matchId !== matchId
      );
      AsyncStorage.setItem("playerInfo", JSON.stringify(updatedPlayersInfos));
      return { playerData: updatedPlayersInfos };
    });
  },
  clearStorage: async () => {
    await AsyncStorage.clear();
    set({ playerData: null });
  },
}));
