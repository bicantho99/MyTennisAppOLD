import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { singleDataWeek1 } from "@/assets/constants/singledata/data1";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTrainingStore } from "@/assets/constants/trainingsData/data";
import Checkbox from "expo-checkbox";

export default function Profile() {
  const [warmCheck, setWarmCheck] = useState(false);
  const [mainCheck, setMainCheck] = useState(false);
  const [noteCheck, setNoteCheck] = useState(false);
  const { trainingIDX } = useLocalSearchParams();
  const { loadTrainings, trainingData, deleteTraining } = useTrainingStore();
  const actualTraining = trainingData.find(
    (item: any) => item.id == trainingIDX
  );

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      className="bg-bgColor"
      extraHeight={10}
    >
      <View className="mx-6 mt-11 gap-4">
        <View className="flex-row items-center pt-2 justify-between mb-5">
          <TouchableOpacity onPress={() => router.back()} className="mt-6">
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Text className="text-textColor text-xl font-bold mt-5">
              {actualTraining?.title}
            </Text>
          </View>
          <Text className="text-slate-500 text-md font-bold mt-5">Edit</Text>
        </View>

        {/* Warm-up */}
        {actualTraining?.warmUp.length > 0 && (
          <View className="p-3 rounded-xl border border-slate-500">
            <View className="gap-4 mb-4">
              <View className="flex-row justify-between">
                <Text className="text-blue-300 text-xl pl-3 font-semibold">
                  Warm Up
                </Text>
                <Checkbox
                  value={warmCheck}
                  onValueChange={() => setWarmCheck((prev) => !prev)}
                  color={warmCheck ? "#4630EB" : undefined}
                />
              </View>
            </View>
            <View className="drills mb-4 gap-2">
              {actualTraining?.warmUp.map((drill: any, index: any) => (
                <Text
                  key={index}
                  className="text-slate-300 text-lg font-medium pl-2"
                >
                  {index + 1}. {drill}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Main Drills */}
        {actualTraining?.mainDrills.length > 0 && (
          <View className="p-3 rounded-xl border border-slate-500">
            <View className="gap-4 mb-4">
              <View className="flex-row justify-between">
                <Text className="text-teal-300 text-xl pl-3 font-semibold">
                  Main Drills
                </Text>
                <Checkbox
                  value={mainCheck}
                  onValueChange={() => setMainCheck((prev) => !prev)}
                  color={mainCheck ? "#4630EB" : undefined}
                />
              </View>
            </View>
            <View className="drills mb-4 pl-2">
              {actualTraining?.mainDrills.map((drill: any, index: any) => (
                <Text
                  key={index}
                  className="text-slate-300 text-lg font-medium"
                >
                  - {drill}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Notes */}
        {actualTraining?.Notes.length > 0 && (
          <View className="p-3 rounded-xl border border-slate-700">
            <View className="flex-row items-center gap-4 mb-4 pt-2">
              <Text className="text-textColor font-bold text-xl bg-slate-700 px-3 py-1 rounded-lg flex-shrink-0">
                3
              </Text>
              <Text className="text-blue-300 font-bold text-[16px]">Notes</Text>
            </View>
            <View className="drills mb-4 pl-2">
              {actualTraining?.Notes.map((drill: any, index: any) => (
                <Text
                  key={index}
                  className="text-slate-300 text-lg font-medium"
                >
                  - {drill}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Delete Training */}
        <View className="drills mb-4">
          <View className="flex-row justify-between">
            <Text
              onPress={() => router.back()}
              className="text-center bg-teal-600 rounded-xl p-3 mt-6 text-white font-bold text-xl flex-1 mx-2"
            >
              Complete
            </Text>
            <Text
              className="text-center bg-orange-700 rounded-xl p-3 mt-6 text-white font-bold text-xl flex-1 mx-2"
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
