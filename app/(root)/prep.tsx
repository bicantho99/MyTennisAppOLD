import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
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

  // const newPlayer = {
  //   playerId,
  //   name,
  //   strength,
  //   weaknesses,
  //   group,
  //   rating,
  //   notes,
  // };

  const switchComponent = () => {
    switch (selected) {
      case 1:
        return (
          <View className="gap-2">
            <TouchableOpacity
              onPress={() => router.push("/(journal)/tourneypage")}
            >
              <View className="bg-slate-800 pl-5 pr-3 pt-2 pb-4 border-blue-800 border-dash rounded-xl gap-[9px] border-[0.4px] mb-4  shadow-sm shadow-slate-300">
                <View className="flex-row gap-2 justify-between items-center mt-2">
                  <Text className="text-slate-200 text-[19px] ">
                    Khanh Nguyen
                  </Text>
                  <Text className="text-slate-400 text-[15px]">14 UTR</Text>
                </View>
                <View className="flex-col  gap-2 ">
                  <Text className="text-[16px] text-blue-300">
                    Team Houston
                  </Text>
                  <Text className="text-[15px] text-slate-400">
                    He loves to ball hogs a lot and prolonge the match He loves
                    to ball hogs a lot and prolonge the matchHe loves to ball
                    hogs a lot and prolonge the match
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View className="bg-slate-800 pl-5 pr-3 pt-2 pb-4 border-blue-800 border-dash rounded-xl gap-[9px] border-[0.4px] mb-4  shadow-sm shadow-slate-300">
              <View className="flex-row gap-2 justify-between items-center mt-2">
                <Text className="text-slate-200 text-[19px] ">James Bui</Text>
                <Text className="text-slate-400 text-[15px]">4.5 USTA</Text>
              </View>
              <View className="flex-col  gap-2 ">
                <Text className="text-[16px] text-blue-300">Team Houston</Text>
                <Text className="text-[15px] text-slate-400">
                  He plays great backhand and forehand, serve but he ball hogs a
                  lot
                </Text>
              </View>
            </View>
            {/* })} */}
            {/*
              <View className="">
                <View className="justify-between flex-row items-center">
                  <Text className="text-slate-500 text-[15px]">
                    Team or Age Group:
                  </Text>
                  <Text className="text-slate-900 bg-sky-300 p-1 rounded-lg font-bold px-2">
                    12's Under
                  </Text>
                </View>

                <View className="flex-row gap-2 justify-between items-center">
                  <Text className="text-slate-200 text-[20px] mt-2">
                    Novak Djokovic
                  </Text>
                  <Text className="text-slate-400 text-[15px] mt-2">4 UTR</Text>
                </View>
                <View className="flex-row mt-2 items-center">
                  <Text className="text-[15px] text-blue-300">Strengths: </Text>
                  <Text className="text-blue-300 text-[15px] ">
                    this is an example data
                  </Text>
                </View>
                <View className="flex-row mt-1 items-center">
                  <Text className="text-[15px] text-blue-300">Weaknesses:</Text>
                  <Text className="text-blue-300 text-[15px] ">
                    Add your rivals here
                  </Text>
                </View>
              </View>
            </TouchableOpacity> */}
          </View>
        );
      default:
        return (
          <View>
            {!matchInfos || matchInfos.length === 0 ? (
              <TouchableOpacity
                // key={item.matchId}
                onPress={() => {
                  router.push("/(journal)/addmatch");
                }}
              >
                <View className="bg-slate-800 pl-5 pr-3 pt-5 border-blue-800 border-dash rounded-xl gap-[9px] border-[0.4px] h-[165px] mb-4 shadow-sm shadow-slate-300">
                  <View>
                    <View className="flex-row justify-between items-center">
                      <View className="NAME_SECTION gap-4">
                        <Text className="text-textColor text-[19px] font-bold">
                          Novak Djokovic
                        </Text>
                        <Text className="text-textColor text-[19px] font-bold">
                          Khanh Nguyen
                        </Text>
                      </View>
                      <View className="SCORE_SECTION gap-4 flex-row pr-2">
                        <View className="1 flex-col gap-2">
                          <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                            2
                          </Text>
                          <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                            6
                          </Text>
                        </View>
                        <View className="2 flex-col gap-2">
                          <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                            2
                          </Text>
                          <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                            6
                          </Text>
                        </View>
                        {/* {!item.player1_3s && !item.player2_3s ? null : (
                          <View className="3 flex-col gap-2">
                            <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 rounded-xl">
                              {item.player1_3s}
                            </Text>
                            <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 rounded-xl">
                              {item.player2_3s}
                            </Text>
                          </View>
                        )} */}
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
                      This is an example match, add your own here...
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
                      pathname: "/(journal)/matchpage",
                      params: { matchId: item.matchId },
                    });
                  }}
                >
                  <View className="bg-slate-800 pl-5 pr-3 pt-5 border-blue-800 border-dash rounded-xl gap-[9px] border-[0.4px] h-[165px] mb-4 shadow-sm shadow-slate-300">
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
                          <View className="1 flex-col gap-2">
                            <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                              {item.player1_1s}
                            </Text>
                            <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                              {item.player2_1s}
                            </Text>
                          </View>
                          <View className="2 flex-col gap-2">
                            <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                              {item.player1_2s}
                            </Text>
                            <Text className="text-slate-900 text-[21px] text-center font-bold bg-sky-400 p-1 px-2 rounded-xl">
                              {item.player2_2s}
                            </Text>
                          </View>
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
          </View>
        );
    }
  };

  return (
    <SafeAreaView className="bg-bgColor flex-1">
      <View className="mx-6 ">
        <View className="flex-row justify-between items-center">
          <Text className="text-textColor text-[25px] font-semibold mt-4">
            Journal
          </Text>
          <TouchableOpacity
            onPress={() =>
              router.push(
                toggle ? "/(journal)/addmatch" : "/(journal)/addtourney"
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

        <View className="flex-row justify-evenly items-center mt-7 gap-5">
          {categories.map((item, index) => {
            return (
              <Text
                onPress={() => {
                  handlePress(index);
                }}
                key={index}
                className={`${
                  selected === index
                    ? "border  border-cyan-300 px-4 py-2 font-semibold text-lg rounded-lg text-center flex-1 text-white bg-slate-800"
                    : "px-4 py-2 font-semibold text-lg rounded-lg text-center flex-1 text-white"
                } transition ease-in duration-900`}
              >
                {item}
              </Text>
            );
          })}
        </View>
        <View className="mt-9 gap-4">{switchComponent()}</View>
      </View>
    </SafeAreaView>
  );
}
