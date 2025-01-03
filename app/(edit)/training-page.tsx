import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Page() {
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      className="bg-bgColor"
      extraHeight={10}
    >
      {/* <SafeAreaView> */}
      <View className="mx-6 gap-5 pb-10 pt-3 ">
        <View className="Header-Section divided-y-4">
          <View className="Header-Section flex-row justify-between items-center">
            <Text className="text-textColor text-3xl font-bold mt-5">
              Training Name
            </Text>
            <Text className="mt-5 text-[15px] font-medium text-green-300">
              Edit
            </Text>
          </View>
          <View className="Description mt-6  border-t-[1px] border-cyan-300 ">
            <Text className="text-textColor font-medium leading-normal text-[17px] mt-4">
              This practice focuses on solid forehand and backhand along with
              endurance training to make sure techniques don't break down when
              it's tiring.
            </Text>
          </View>
        </View>

        <View className="Drill-Section gap-7 mt-2">
          <View className="Warm-Up">
            <Text className="mb-3 text-orange-600 font-bold text-xl">
              Warm Up
            </Text>
            <View className="gap-4">
              <View className=" bg-gray-700 py-3 px-4 rounded-md flex-row gap-4">
                <Ionicons name="fitness" size={20} color="#ea580c" />
                <Text className="text-textColor font-bold text-[18px]">
                  High Knee Side to Side
                </Text>
              </View>
              <View className=" bg-gray-700 py-3 px-4 rounded-md flex-row gap-4">
                <Ionicons name="fitness" size={20} color="#ea580c" />
                <Text className="text-textColor font-bold text-[18px]">
                  High Knee Side to Side
                </Text>
              </View>
            </View>
          </View>
          <View className="Main-Drill">
            <Text className="mb-3 text-cyan-300 font-bold text-xl">
              Main Drills
            </Text>
            <View className="gap-4">
              <View className=" bg-gray-700 py-3 px-4 rounded-md flex-row gap-4">
                <Ionicons name="fitness" size={20} color="#22d3ee" />
                <Text className="text-textColor font-bold text-[18px]">
                  High Knee Side to Side
                </Text>
              </View>
              <View className=" bg-gray-700 py-3 px-4 rounded-md flex-row gap-4">
                <Ionicons name="fitness" size={24} color="#22d3ee" />
                <Text className="text-textColor font-bold text-[18px]">
                  High Knee Side to Side
                </Text>
              </View>
            </View>
          </View>
          <View className="Fitness-Drill">
            <Text className="mb-3 text-emerald-300 font-bold text-xl">
              Fitness
            </Text>
            <View className="gap-4">
              <View className=" bg-gray-700 py-3 px-4 rounded-md flex-row gap-4">
                <Ionicons name="fitness" size={24} color="#6ee7b7" />
                <Text className="text-textColor font-bold text-[18px]">
                  High Knee Side to Side
                </Text>
              </View>
              <View className=" bg-gray-700 py-3 px-4 rounded-md flex-row gap-4">
                <Ionicons name="fitness" size={24} color="#6ee7b7" />
                <Text className="text-textColor font-bold text-[18px]">
                  High Knee Side to Side
                </Text>
              </View>
            </View>
          </View>
          <View className="WrapUp-Drill">
            <Text className="mb-3 text-yellow-300 font-bold text-xl">
              Wrap Up
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
