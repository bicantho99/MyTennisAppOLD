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
  deletePlayerInfo: async (playerId) => {
    set((state) => {
      const updatedPlayerData = state.playerData.filter(
        (playerInfo: any) => playerInfo.playerId !== playerId
      );
      AsyncStorage.setItem("playerInfo", JSON.stringify(updatedPlayerData));
      return { playerData: updatedPlayerData };
    });
  },
  clearStorage: async () => {
    await AsyncStorage.clear();
    set({ playerData: null });
  },
}));
