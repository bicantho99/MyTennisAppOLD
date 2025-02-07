import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useMatchStore } from "@/assets/constants/matchdata/storage";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { usePlayerStore } from "@/assets/constants/playerdata/data";
export default function Logs() {
  const categories = ["Matches", "Rivals"];
  const { playerData, addPlayerInfo, loadPlayerInfos, deletePlayerInfo } =
    usePlayerStore();
  const [selected, setSelected] = useState(0);
  const [toggle, setToggle] = useState(true);
  const { matchInfos } = useMatchStore();
  const { loadMatchInfos } = useMatchStore();
  const handlePress = (index: any) => {
    setSelected(index);
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    loadMatchInfos();
    loadPlayerInfos();
  }, []);
  const switchComponent = () => {
    switch (selected) {
      case 1:
        return (
          <View>
            {!playerData || playerData.length === 0 ? (
              <View key="1">
                <View className="">
                  <TouchableOpacity
                    onPress={() =>
                      router.push({
                        pathname: "/tabs/journal/playerExample",
                      })
                    }
                  >
                    <View className=" bg-slate-800 pl-5 pr-3 pt-2 pb-4 border-blue-800 border-dash rounded-xl gap-[12px] border-[0.4px] mb-4 shadow-sm shadow-slate-300">
                      <View className="flex-row gap-2 justify-between items-center mt-2">
                        <Text className="text-slate-200 text-[19px]">
                          Jakub Novak
                        </Text>
                        <Text className="text-slate-400 text-[15px]">
                          14 UTR
                        </Text>
                      </View>

                      <View className="flex-col gap-2">
                        <View className="flex-row justify-between ">
                          <Text className="text-[14px] text-blue-300">
                            Notes:
                          </Text>
                          <Text className="text-[15px] text-sky-400">
                            Team Houston
                          </Text>
                        </View>

                        <Text className="text-[15px] text-slate-400 ">
                          this player is strong FH, target this BH more..
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              playerData.map((item: any, index: any) => (
                <View key={index}>
                  <View className="gap-1">
                    <TouchableOpacity
                      onPress={() =>
                        router.push({
                          pathname: "/tabs/journal/playerpage",
                          params: {
                            playerID: item.playerId,
                          },
                        })
                      }
                    >
                      <View className="bg-slate-800 pl-5 pr-3 pt-2 pb-4 border-blue-800 border-dash rounded-xl gap-[12px] border-[0.4px] mb-4 shadow-sm shadow-slate-300">
                        <View className="flex-row gap-2 justify-between items-center mt-2">
                          <Text className="text-slate-200 text-[19px]">
                            {item.name}
                          </Text>
                          <Text className="text-slate-400 text-[15px]">
                            {item.rating}
                          </Text>
                        </View>

                        <View className="flex-col gap-2">
                          <View className="flex-row justify-between ">
                            <Text className="text-[14px] text-blue-300">
                              Notes:
                            </Text>
                            <Text className="text-[15px] text-sky-400">
                              {item.group}
                            </Text>
                          </View>
                          <Text className="text-[15px] text-slate-400">
                            {item.notes}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </View>
        );

      default:
        return (
          <View>
            {!matchInfos || matchInfos.length === 0 ? (
              <TouchableOpacity
                // key={item.matchId}
                onPress={() => {
                  router.push("/tabs/journal/matchExample");
                }}
              >
                <View className="bg-slate-800 pl-5 pr-3 pt-4 pb-4 border-blue-800 border-dash rounded-xl gap-[9px] border-[0.4px]  mb-4 shadow-sm shadow-slate-300">
                  <View>
                    <View className="flex-row justify-between items-center">
                      <View className="NAME_SECTION gap-4">
                        <Text className="text-textColor text-[19px] font-semibold">
                          Khanh Nguyen
                        </Text>
                        <Text className="text-textColor text-[19px] font-semibold">
                          Jakub Novak
                        </Text>
                      </View>
                      <View className="SCORE_SECTION gap-4 flex-row pr-2">
                        <View className="1 flex-col gap-2">
                          <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                            6
                          </Text>
                          <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                            4
                          </Text>
                        </View>
                        <View className="2 flex-col gap-2">
                          <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                            6
                          </Text>
                          <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                            4
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View className="gap-2 mt-2">
                    <View className="flex-row justify-between">
                      <Text className="text-slate-400 text-[14px]">
                        Match notes:
                      </Text>
                      <Text className="text-slate-400 text-[13px] pr-3">
                        02/19
                      </Text>
                    </View>
                    <Text className="text-slate-300 text-[14px]">
                      My serve and forehand worked great today...
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
              matchInfos.map((item: any, index: any) => (
                <TouchableOpacity
                  key={item.matchId}
                  onPress={() => {
                    router.push({
                      pathname: "/tabs/journal/matchpage",
                      params: { matchId: item.matchId },
                    });
                  }}
                >
                  <View className="bg-slate-800 pl-5 pr-3 pt-4 pb-3 border-blue-800 border-dash rounded-xl gap-[9px] border-[0.4px] mb-4 shadow-sm shadow-slate-300">
                    <View>
                      <View className="flex-row justify-between items-center">
                        <View className="NAME_SECTION gap-4">
                          <Text className="text-textColor text-[19px] font-bold">
                            {item.player1}
                          </Text>
                          <Text className="text-textColor text-[19px] font-bold">
                            {item.player2}
                          </Text>
                        </View>
                        <View className="SCORE_SECTION gap-4 flex-row pr-2">
                          {!item.player1_1s && !item.player2_1s ? null : (
                            <View className="3 flex-col gap-2">
                              <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                                {item.player1_1s}
                              </Text>
                              <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                                {item.player2_1s}
                              </Text>
                            </View>
                          )}

                          {!item.player1_2s && !item.player2_2s ? null : (
                            <View className="3 flex-col gap-2">
                              <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                                {item.player1_2s}
                              </Text>
                              <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                                {item.player2_2s}
                              </Text>
                            </View>
                          )}

                          {!item.player1_3s && !item.player2_3s ? null : (
                            <View className="3 flex-col gap-2">
                              <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                                {item.player1_3s}
                              </Text>
                              <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                                {item.player2_3s}
                              </Text>
                            </View>
                          )}
                        </View>
                      </View>
                    </View>

                    <View className="gap-2 mt-1">
                      <Text className="text-slate-400 text-[14px]">
                        Match notes:
                      </Text>
                      <Text className="text-slate-300 text-[14px]">
                        {item.matchNote}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            )}
            <TouchableOpacity
              onPress={() => {
                router.push("/tabs/journal/addmatch");
              }}
            >
              <View className="box-view border-dotted border border-teal-300  bg-teal-900/20  rounded-xl gap-[15px]  h-[85px] mb-4   items-center justify-center mt-2">
                <Text className="text-slate-200 text-[17px] font-medium">
                  Create Your Own Matches
                </Text>
                <AntDesign name="addfile" size={22} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return (
    <View className="bg-bgColor flex-1">
      <ScrollView showsVerticalScrollIndicator={false} className="mt-[50px]">
        <View className="mx-6 ">
          <View className="flex-row justify-between items-center">
            <Text className="text-textColor text-[25px] font-semibold mt-4">
              Journal
            </Text>
            <TouchableOpacity
              onPress={() =>
                router.push(
                  toggle ? "/tabs/journal/addmatch" : "/tabs/journal/addplayer"
                )
              }
            >
              <AntDesign
                name="pluscircle"
                size={22}
                color="white"
                className="mt-6"
              />
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-evenly items-center mt-5  ">
            {categories.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    handlePress(index);
                  }}
                  key={index}
                  className={`${
                    selected === index
                      ? "border-2 border-teal-600 "
                      : "text-white "
                  }  py-3 items-center rounded-lg flex-1 justify-center`}
                >
                  <Text
                    className={`${
                      selected === index
                        ? "text-teal-300 text-lg font-bold"
                        : "text-slate-300 text-lg"
                    }   text-center`}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View className="mt-9 gap-2">{switchComponent()}</View>
        </View>
      </ScrollView>
    </View>
  );
}
