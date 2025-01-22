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
  const categories = ["Matches", "Tournament"];
  const [selected, setSelected] = useState(0);
  const [toggle, setToggle] = useState(false);
  const { matchInfos } = useMatchStore();

  useEffect(() => {
    AsyncStorage.clear();
  }, []);

  const switchComponent = () => {
    switch (selected) {
      case 1:
        return (
          <View>
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
                  Level 4 Austin 12's Under
                </Text>
                <Text className="text-slate-400 text-[15px] mt-2">
                  Plan: Improve forehands and cross court...
                </Text>
                <Text
                  className="text-textColor"
                  style={{ transform: [{ translateY: 9 }] }}
                >
                  Location: Houston
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      default:
        return (
          <View>
            <FlatList
              data={matchInfos}
              keyExtractor={(item, index) => item.matchId.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => router.push("/(journal)/matchpage")}
                >
                  <View className="bg-slate-800 pl-5 pr-3 pt-5 border-blue-800 border-dash rounded-xl gap-[9px] border-[0.4px] h-[150px] mb-4  shadow-sm shadow-slate-300 ">
                    <View className="gap-2">
                      <View className="flex-row justify-between items-center">
                        <Text className="text-textColor text-[19px]">
                          {item.player1}
                        </Text>
                        <View className="flex-row gap-4 pr-4">
                          <Text className="text-textColor text-[23px] text-center">
                            {item.player1_1s}
                          </Text>
                          <Text className="text-textColor text-[23px] text-center">
                            {item.player1_2s}
                          </Text>
                          <Text className="text-textColor text-[23px] text-center">
                            {item.player1_3s}
                          </Text>
                        </View>
                      </View>
                      <View className="flex-row  justify-between items-center">
                        <Text className="text-textColor text-[19px]">
                          {item.player2}
                        </Text>
                        <View className="flex-row gap-4 pr-4">
                          <Text className="text-textColor text-[23px] text-center ">
                            {item.player2_1s}
                          </Text>
                          <Text className="text-textColor text-[23px] text-center">
                            {item.player2_2s}
                          </Text>
                          <Text className="text-textColor text-[23px] text-center">
                            {item.player2_3s}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View className="gap-2">
                      <Text className="text-slate-400 text-[14px]">
                        Match notes:
                      </Text>
                      <Text className="text-slate-300 text-[14px]">
                        Solid practice against Craig. Backhand felt good..
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
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
                !toggle ? "/(journal)/addmatch" : "/(journal)/addtourney"
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

        <View className="flex-row justify-evenly items-center mt-6 gap-5">
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
                    ? "border border-dashed border-teal-400 px-4 py-2 font-semibold text-lg rounded-lg text-center flex-1 text-white"
                    : "px-4 py-2 font-semibold text-lg rounded-lg text-center flex-1 text-white" // Default style for unselected
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
