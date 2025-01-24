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
export default function Logs() {
  const categories = ["Matches", "Rivals"];
  const [selected, setSelected] = useState(0);
  const [toggle, setToggle] = useState(true);
  const { matchInfos } = useMatchStore();
  const { loadMatchInfos } = useMatchStore();
  useEffect(() => {
    loadMatchInfos();
    // AsyncStorage.clear();
  }, []);

  const switchComponent = () => {
    switch (selected) {
      case 1:
        return (
          <View className="gap-2">
            <TouchableOpacity
              onPress={() => router.push("/(journal)/tourneypage")}
            >
              <View className="bg-slate-800 pl-5 pr-3 pt-5 border-blue-800 border-dash rounded-xl gap-[9px] border-[0.4px] h-[150px] mb-4  shadow-sm shadow-slate-300">
                <View className="justify-between flex-row">
                  <Text className="text-slate-400 text-[15px]">
                    Upcoming Tournament:
                  </Text>
                  <Text className="text-slate-400">10/24</Text>
                </View>

                <Text className="text-slate-200 text-xl">
                  ATP Master 1000 Indian Wells
                </Text>
                <Text className="text-slate-400 text-[15px] mt-2">
                  Plan: Improve forehands and cross court...
                </Text>
                <Text
                  className="text-textColor"
                  style={{ transform: [{ translateY: 9 }] }}
                >
                  Location: Indian Wells
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      default:
        return (
          <View>
            {!matchInfos ? (
              <Text className="text-center">No Matches</Text>
            ) : (
              <FlatList
                data={matchInfos}
                keyExtractor={(item, index) => item.matchId.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      router.push({
                        pathname: "/(journal)/matchpage",
                        params: { matchId: item.matchId },
                      });
                    }}
                  >
                    <View className="bg-slate-800 pl-5 pr-3 pt-5 border-blue-800 border-dash rounded-xl gap-[9px] border-[0.4px] h-[150px] mb-4  shadow-sm shadow-slate-300 ">
                      <View className="">
                        <View className="flex-row justify-between items-center">
                          <View className="NAME_SECTION gap-3">
                            <Text className="text-textColor text-[19px] font-semi">
                              {item.player1}
                            </Text>
                            <Text className="text-textColor text-[19px] font-semi">
                              {item.player2}
                            </Text>
                          </View>
                          <View className="SCORE_SECTION gap-5 flex-row">
                            <View className="1 flex-col  gap-2">
                              <Text className="text-textColor text-[21px] text-center font-bold">
                                {item.player1_1s}
                              </Text>
                              <Text className="text-textColor text-[21px] text-center  font-bold">
                                {item.player2_1s}
                              </Text>
                            </View>
                            <View className="2 flex-col gap-2">
                              <Text className="text-textColor text-[21px] text-center font-bold">
                                {item.player1_2s}
                              </Text>
                              <Text className="text-textColor text-[21px] text-center font-bold">
                                {item.player2_2s}
                              </Text>
                            </View>
                            <View className="3 flex-col gap-2">
                              <Text className="text-textColor text-[21px] text-center font-bold">
                                {item.player1_3s}
                              </Text>
                              <Text className="text-textColor text-[21px] text-center font-bold">
                                {item.player2_3s}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View className="flex-row  justify-between items-center"></View>
                      </View>
                      <View className="gap-2 mt-2">
                        <Text className="text-slate-400 text-[14px]">
                          Match notes:
                        </Text>

                        <Text className="text-slate-300 text-[14px]">
                          {item.matchNote}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
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
            Notes
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
                  setSelected(index);
                  setToggle((prev) => !prev);
                }}
                key={index}
                className={`${
                  selected === index
                    ? "border  border-teal-300 px-4 py-2 font-semibold text-lg rounded-lg text-center flex-1 text-white bg-slate-800"
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
