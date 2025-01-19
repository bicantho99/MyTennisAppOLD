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
import { TextInput } from "react-native-paper";
export default function Page() {
  const [toggle, setToggle] = useState(false);
  const { programData, setProgramData } = useTrainingData();
  const { trainingId } = useLocalSearchParams();
  const [edit, setEdit] = React.useState(false);

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
            <TouchableOpacity onPress={() => setEdit((prev) => !prev)}>
              <Text className="mt-5 text-[15px] font-medium text-green-300">
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <View className="Description mt-6  border-t-[1px] border-cyan-300 ">
            <Text className="text-textColor font-medium leading-normal text-[17px] mt-4">
              {selectedTraining.description}
            </Text>
          </View>
        </View>

        <View className="Drill-Section gap-7 mt-2">
          <View className="Warm-Up ">
            <View className="flex-row items-center gap-4 mb-4">
              <Text className="text-textColor font-bold text-xl bg-slate-600 px-3 py-1 rounded-lg flex-shrink-0">
                1
              </Text>
              <Text className="text-slate-300 font-bold text-[16px]">
                Warm Up
              </Text>
            </View>

            {selectedTraining.warmUp?.map((item, index) => {
              return (
                <View className="gap-2" key={index}>
                  <View className="bg-gray-800 py-3 px-4 rounded-md flex-row mb-3 gap-4 justify-between">
                    <View className="flex-row items-center">
                      {/* <Text className="text-white font-medium text-[18px] text-center ">
                        {`${index + 1}.`}
                      </Text> */}
                      <Text className="text-slate-400 font-medium text-[15px]  pl-3 py-1">
                        {item}
                      </Text>
                    </View>
                    {edit ? (
                      <Ionicons name="remove" size={24} color="#f4f4f5" />
                    ) : (
                      ""
                    )}
                  </View>
                </View>
              );
            })}
          </View>

          <View className="Main-Drill">
            <View className="flex-row items-center gap-4 mb-4">
              <Text className="text-textColor font-bold text-xl bg-slate-600 px-3 py-1 rounded-lg flex-shrink-0">
                2
              </Text>
              <Text className="text-slate-300 font-bold text-[16px]">
                Main Drills
              </Text>
            </View>

            {selectedTraining.mainDrills?.map((item, index) => {
              return (
                <View className="gap-2" key={index}>
                  <View className=" bg-gray-800 py-3 px-4 rounded-md flex-row mb-3 gap-4 justify-between ">
                    <View className="flex-row items-center">
                      <Text className="text-slate-400 font-medium text-[15px]  pl-3 py-1">
                        {item}
                      </Text>
                    </View>
                    {edit ? (
                      <View>
                        <Ionicons name="remove" size={24} color="#f4f4f5" />
                      </View>
                    ) : (
                      ""
                    )}
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
                <View className="gap-2" key={index}>
                  <View className=" bg-gray-800 py-3 px-4 rounded-md flex-row mb-3 gap-4 justify-between ">
                    <View className="flex-row items-center">
                      <Text className="text-slate-400 font-medium text-[15px]  pl-3 py-1">
                        {item}
                      </Text>
                    </View>
                    {edit ? (
                      <Ionicons name="remove" size={24} color="#f4f4f5" />
                    ) : (
                      ""
                    )}
                  </View>
                </View>
              );
            })}
          </View>
{/*
          <View className="Fitness-Drill">
            <Text className="mb-3 text-blue-400 font-bold text-xl">
              Recover
            </Text>
            {selectedTraining.recovery?.map((item, index) => {
              return (
                <View className="gap-2" key={index}>
                  <View className=" bg-gray-700 py-3 px-4 rounded-md flex-row mb-3 gap-4 justify-between ">
                    <View className="flex-row items-center">
                      <Text className="text-white font-medium text-[18px] text-center ">
                        {`${index + 1}.`}
                      </Text>
                      <Text className="text-textColor font-bold text-[18px]  pl-3 py-1">
                        {item}
                      </Text>
                    </View>
                    {edit ? (
                      <Ionicons name="remove" size={24} color="#f4f4f5" />
                    ) : (
                      ""
                    )}
                  </View>
                </View>
              );
            })}
          </View> */}

          <View className="WrapUp-Drill ml-1">
            {!toggle ? (
              <TouchableOpacity onPress={() => setToggle(true)}>
                <Text className="mb-3 text-red-500 font-bold text-[20px]">
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
