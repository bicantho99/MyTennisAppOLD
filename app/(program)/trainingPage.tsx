import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { singleDataWeek1 } from "@/assets/constants/singledata/data1";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTrainingStore } from "@/assets/constants/trainingsData/data";

export default function profile() {
  const { trainingIDX } = useLocalSearchParams();
  const { loadTrainings, trainingData, deleteTraining } = useTrainingStore();
  const actualTraining = trainingData.find(
    (item: any) => item.id == trainingIDX
  );

  // const newProgram = {
  //   id: trainingID,
  //   title: title,
  //   totalPlayers: totalPlayer,
  //   description: TDef,
  //   time: TDur,
  //   warmUp: drills["Warm Up"] || [],
  //   mainDrills: drills["Main Drills"] || [],
  //   fitness: drills.Fitness || [],
  //   recovery: drills.Recovery || [],
  // };
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      className="bg-bgColor"
      extraHeight={10}
    >
      <View className="mx-6 mt-11">
        <View className="flex-row items-center pt-2 justify-between">
          <TouchableOpacity onPress={() => router.back()} className=" mt-6">
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Text className="text-textColor text-xl font-bold mt-5">
              {actualTraining?.title}
            </Text>
          </View>
          <Text className="text-slate-500 text-md font-bold mt-5">Edit</Text>
        </View>
        <View className="Warm-up mt-7">
          <View className="flex-row items-center gap-4 mb-4">
            <Text className="text-textColor font-bold text-xl bg-slate-700 px-3 py-1 rounded-lg flex-shrink-0">
              1
            </Text>
            <Text className="text-blue-300 font-bold text-[16px]">Warm Up</Text>
          </View>
          <View className="drills mb-4">
            {actualTraining.warmUp.length > 0 &&
              actualTraining.warmUp.map((drill: any, index: any) => (
                <Text
                  key={index}
                  className="text-slate-300 text-[15px] mb-2 leading-5 bg-gray-800 p-4 rounded-md"
                >
                  - {drill}
                </Text>
              ))}
          </View>
        </View>
        <View className="Main Drills">
          <View className="flex-row items-center gap-4 mb-4">
            <Text className="text-textColor font-bold text-xl bg-slate-700 px-3 py-1 rounded-lg flex-shrink-0">
              2
            </Text>
            <Text className="text-blue-300 font-bold text-[16px]">
              Main Drills
            </Text>
          </View>
          <View className="drills mb-4">
            {actualTraining.mainDrills.length > 0 &&
              actualTraining.mainDrills.map((drill: any, index: any) => (
                <Text
                  key={index}
                  className="text-slate-300 text-[15px] mb-2 leading-5 bg-gray-800 p-4 rounded-md"
                >
                  - {drill}
                </Text>
              ))}
          </View>
        </View>
        <View className="Fitness">
          <View className="flex-row items-center gap-4 mb-4">
            <Text className="text-textColor font-bold text-xl bg-slate-700 px-3 py-1 rounded-lg flex-shrink-0">
              3
            </Text>
            <Text className="text-blue-300 font-bold text-[16px]">Fitness</Text>
          </View>
          <View className="drills mb-4">
            {actualTraining.fitness.length > 0 &&
              actualTraining.fitness.map((drill: any, index: any) => (
                <Text
                  key={index}
                  className="text-slate-300 text-[15px] mb-2 leading-5 bg-gray-800 p-4 rounded-md"
                >
                  - {drill}
                </Text>
              ))}
          </View>
        </View>
        <View className="Fitness">
          <View className="flex-row items-center gap-4 mb-4">
            <Text className="text-textColor font-bold text-xl bg-slate-700 px-3 py-1 rounded-lg flex-shrink-0">
              4
            </Text>
            <Text className="text-blue-300 font-bold text-[16px]">
              Recovery
            </Text>
            {actualTraining.recovery.length > 0 &&
              actualTraining.recovery.map((drill: any, index: any) => (
                <Text
                  key={index}
                  className="text-slate-300 text-[15px] mb-2 leading-5 bg-gray-800 p-4 rounded-md"
                >
                  - {drill}
                </Text>
              ))}
          </View>

          <View className="drills mb-4">
            <Text
              className="text-red-400"
              onPress={() => {
                deleteTraining(actualTraining.id);
                router.back();
              }}
            >
              Delete
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
