import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Progress from "react-native-progress";
import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useProgramStore } from "@/assets/constants/programStore/storage";
import { useCheckedValuesStore } from "@/assets/constants/progressData";
import { useTrainingStore } from "@/assets/constants/trainingsData/data";
export default function program() {
  const { loadProgramData } = useProgramStore();
  const { loadCheckedValues } = useCheckedValuesStore();
  const { loadTrainings, trainingData, deleteTraining } = useTrainingStore();
  const programs = [
    {
      id: 0,
      coach: "Coach Cecile",
      totalWeeks: 3,
      title: "Match Play Strategies",
      description: "Trainings focusing on match play's importants",
      tags: ["Serve", "Return", "Net Game", "Mental"],
    },
    {
      id: 1,
      coach: "Coach Cecile",
      totalWeeks: 3,
      title: "Double The Trouble",
      description: "Trainings focusing on double wizard-ry",
      tags: ["Serve", "Return", "Net Game", "Mental"],
    },
  ];
  const createProgram = [
    {
      id: 3,
      coach: "Coach Cecile",
      totalWeeks: 3,
      title: "Request a Custom Plan",
      description: "Training customize to your game",
      tags: ["Serve", "Return", "Net Game", "Mental"],
    },
  ];
  const [message, setMessage] = useState("");

  const handleClick = (id: number) => {
    if (id === 3) {
      setMessage("This feature is under construction :)");
    } else {
      setMessage("");
      router.push({
        pathname: "/(edit)/program-page",
        params: { trainingId: id },
      });
    }
  };

  // useEffect(() => {}, [loadTrainings()]);
  return (
    <SafeAreaView className="flex-1 bg-bgColor">
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="light" />
        <View className="mx-6 my-2 ">
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-textColor  text-[25px]  font-semibold mt-3  mb-1">
              Programs
            </Text>
            <TouchableOpacity
              onPress={() => {
                router.push("/(edit)/addprogram");
              }}
            >
              <AntDesign
                name="pluscircle"
                size={22}
                color="white"
                className=""
              />
            </TouchableOpacity>
          </View>
          <View className="gap-5">
            {trainingData.length === 0 ? (
              <TouchableOpacity
                onPress={() => {
                  router.push({
                    pathname: "/(program)/examplePage",
                    // params: { trainingIDX: item.id },
                  });
                }}
              >
                <View
                  // key={index}
                  className="bg-slate-800 p-5 gap-4 rounded-xl border-blue-300 border-[0.4px] shadow-sm shadow-blue-300"
                >
                  <View className="flex-row justify-between">
                    <Text className="text-textColor text-md">
                      Time: 4:00 PM
                    </Text>
                    <Text className="text-gray-400 text-md">
                      Total Players: 2
                    </Text>
                  </View>
                  <Text className="text-blue-300 font-bold text-[20px]">
                    Backhand Training
                  </Text>
                  <Text className="text-white text-md">
                    Focus on aggressive backhand offense
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              trainingData.map((item: any, index: any) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                      router.push({
                        pathname: "/(program)/trainingPage",
                        params: { trainingIDX: item.id },
                      });
                    }}
                  >
                    <View className="bg-slate-800 p-5 gap-4 rounded-xl border-blue-300 border-[0.4px] shadow-sm shadow-blue-300">
                      <View className="flex-row justify-between">
                        <Text className="text-textColor text-md">
                          Time: {item.time}
                        </Text>
                        <Text className="text-gray-400 text-md">
                          Players: {item.totalPlayers}
                        </Text>
                      </View>
                      <Text className="text-blue-300 font-bold text-[20px]">
                        {item.title}
                      </Text>
                      <Text className="text-white text-md">
                        {item.description}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })
            )}
            {programs.map((program, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  handleClick(program.id);
                }}
              >
                <View className="box-view bg-slate-800 pl-5 pr-3 pt-5 border-blue-300  rounded-xl gap-[9px] border-[0.4px] h-[165px]   shadow-sm shadow-blue-300">
                  <View className="text-view flex-col justify-between h-full">
                    <View className="gap-2">
                      <View className="flex-row justify-between">
                        <Text className="text-textColor font-medium">
                          {program.coach}
                        </Text>
                        <Text className="text-gray-400 font-semibold">
                          Total Weeks: {program.totalWeeks}
                        </Text>
                      </View>

                      <Text className="text-blue-300 font-bold text-[21px]">
                        {program.title}
                      </Text>
                    </View>

                    <Text className="text-white">{program.description}</Text>
                    <View className="flex-row pb-5">
                      {program.tags.map((tag, tagIndex) => (
                        <Text
                          key={tagIndex}
                          className="mr-4 mt-[3.5px] px-2 py-1 bg-blue-200 rounded-md text-[12px] font-medium"
                        >
                          {tag}
                        </Text>
                      ))}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={() => {
                router.push("/(edit)/addprogram");
              }}
            >
              <View className="box-view border-dotted border border-teal-300  bg-teal-900/20  rounded-xl gap-[15px]  h-[85px] mb-4   items-center justify-center">
                <Text className="text-slate-200 text-[17px] font-medium">
                  Create Your Own Trainings
                </Text>
                <AntDesign name="addfile" size={22} color="white" />
              </View>
            </TouchableOpacity>
          </View>

          <View className="mt-8 gap-2"></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
