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
      title: "Single Strategies",
      description: "Training focusing on solid single strategies",
      tags: ["Serve", "Return", "Net Game", "Mental"],
    },
    {
      id: 1,
      coach: "Coach Jakub",
      totalWeeks: 3,
      title: "Double Strategies",
      description: "Training focusing on solid double strategies",
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
    router.push({
      pathname: "/tabs/training/program-page",
      params: { trainingId: id },
    });
  };

  useEffect(() => {
    loadTrainings();
  }, []);
  return (
    <View className="flex-1 bg-bgColor">
      <ScrollView showsVerticalScrollIndicator={false} className="mt-[50px]">
        <StatusBar style="light" />
        <View className="mx-6 my-2 ">
          <View className="flex-row items-center justify-between mb-6">
            <Text className="text-white  text-[25px]  font-semibold mt-3  mb-1">
              Trainings
            </Text>
            <TouchableOpacity
              onPress={() => {
                router.navigate("/tabs/training/addprogram");
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
            {trainingData.map((item: any, index: any) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    router.push({
                      pathname: "/tabs/training/trainingPage",
                      params: { trainingIDX: item.id },
                    });
                  }}
                >
                  <View className="bg-slate-800 p-4 gap-3 rounded-xl border-blue-300 border-[0.4px] shadow-sm shadow-blue-300">
                    <View className="flex-row justify-between items-center mb-1">
                      <Text className="text-blue-100 font-medium rounded-lg ">
                        {item.time}
                      </Text>
                      <Text className="text-blue-400 font-bold rounded-lg">
                        {item.datedate}
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
            })}

            <TouchableOpacity
              onPress={() => {
                router.push({
                  pathname: "/tabs/training/examplePage",
                });
              }}
            >
              <View
                // key={index}
                className="bg-slate-800 p-4 gap-3 rounded-xl border-blue-300 border-[0.4px] shadow-sm shadow-blue-300"
              >
                <View className="flex-row justify-between items-center mb-1">
                  <Text className="text-blue-100 font-medium rounded-lg ">
                    4:00 PM
                  </Text>
                  <Text className="text-blue-400 font-bold rounded-lg">
                    Wednesday, July 12
                  </Text>
                  {/* <AntDesign name="right" size={18} color="gray" /> */}
                </View>
                <Text className="text-blue-300 font-bold text-[20px]">
                  Baseline Pattern
                </Text>
                <Text className="text-slate-200 text-md">
                  This training focus on baseline patterns
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                router.push("/tabs/training/addprogram");
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
    </View>
  );
}
