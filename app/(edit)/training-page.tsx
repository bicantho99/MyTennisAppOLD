import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useTrainingData } from "@/assets/constants/dataContext";
import { router } from "expo-router";
export default function Page() {
  const [toggle, setToggle] = useState(false);
  const { programData, setProgramData } = useTrainingData();
  const { trainingId } = useLocalSearchParams();

  const selectedTraining = programData?.[parseInt(trainingId as string)];
  const handleDelete = (title: string) => {
    setProgramData((prev) => prev.filter((item) => item.title !== title));
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      className="bg-bgColor"
      extraHeight={10}
    >
      <View className="mx-6 gap-5 pb-10 pt-3 ">
        <View className="Header-Section divided-y-4">
          <View className="Header-Section flex-row justify-between items-center">
            <Text className="text-textColor text-3xl font-bold mt-5">
              {selectedTraining.title}
            </Text>
            <Text className="mt-5 text-[15px] font-medium text-green-300">
              Finish
            </Text>
          </View>
          <View className="Description mt-6  border-t-[1px] border-cyan-300 ">
            <Text className="text-textColor font-medium leading-normal text-[17px] mt-4">
              {selectedTraining.description}
            </Text>
          </View>
        </View>

        <View className="Drill-Section gap-7 mt-2">
          <View className="Warm-Up">
            <Text className="mb-3 text-cyan-300 font-bold text-xl">
              Warm Up
            </Text>

            {selectedTraining.warmUp?.map((item, index) => {
              return (
                <View className="gap-2" key={index}>
                  <View className=" bg-gray-700 py-3 px-4 rounded-md flex-row mb-3 gap-4">
                    <Text className="text-textColor font-bold text-[18px]  pl-3">
                      {item}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View className="Main-Drill">
            <Text className="mb-3 text-emerald-300 font-bold text-xl">
              Main Drills
            </Text>
            {selectedTraining.mainDrills?.map((item, index) => {
              return (
                <View className="gap-2">
                  <View className=" bg-gray-700 py-3 px-4 rounded-md flex-row mb-3 gap-4">
                    <Text className="text-textColor font-bold text-[18px] pl-3">
                      {item}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View className="Fitness-Drill">
            <Text className="mb-3 text-pink-400 font-bold text-xl">
              Fitness
            </Text>
            {selectedTraining.fitness?.map((item, index) => {
              return (
                <View className="gap-2">
                  <View className=" bg-gray-700 py-3 px-4 rounded-md flex-row mb-3 gap-4">
                    <Text className="text-textColor font-bold text-[18px] pl-3">
                      {item}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View className="WrapUp-Drill ml-1">
            {!toggle ? (
              <TouchableOpacity onPress={() => setToggle(true)}>
                <Text className="mb-3 text-red-500 font-bold text-xl">
                  Delete
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setToggle(false);
                  handleDelete(selectedTraining.title);
                  router.back();
                }}
              >
                <Text className="mb-3 text-red-500 font-bold text-xl">
                  Delete Confirmation
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
