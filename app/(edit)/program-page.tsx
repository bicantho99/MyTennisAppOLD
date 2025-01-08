import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import Checkbox from "expo-checkbox";

export default function ProgramPage() {
  return (
    <SafeAreaView className="bg-bgColor flex-1">
      <View className="mx-6 ">
        <View className="flex-row gap-3 pt-2">
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>

          <Text className="text-textColor font-medium text-xl">
            Plan Overview
          </Text>
        </View>

        <View className="mid-view mt-5  pb-2 flex-row justify-between">
          <Text className="text-textColor text-xl text-center font-medium">
            Week 1
          </Text>
          <Text className="text-textColor text-xl text-center font-medium">
            Week 2
          </Text>
          <Text className="text-textColor text-xl text-center font-medium">
            Week 3
          </Text>
        </View>

        <View className="flex-row gap-2 mt-4 justify-evenly">
          <View
            className="h-[7px]  flex-row rounded-lg
                     bg-slate-600 w-[75px] transition duration-250 ease-in delay-100"
          />
          <View
            className="h-[7px]  flex-row rounded-lg
                     bg-slate-600 w-[75px] transition duration-250 ease-in delay-100"
          />
          <View
            className="h-[7px]  flex-row rounded-lg
                     bg-slate-600 w-[75px] transition duration-250 ease-in delay-100"
          />
          <View
            className="h-[7px]  flex-row rounded-lg
                     bg-slate-600 w-[75px] transition duration-250 ease-in delay-100"
          />
        </View>

        <View className="coach flex-row mt-5 gap-4">
          <Text className="h-16 w-16 bg-teal-400 rounded-[50px] text-center">
            Coach Cecile
          </Text>
          <Text className="text-textColor">
            "This practice focuses on solid forehand and backhand along with
            endurance training to make sure techniques don't break down when
            it's tiring."
          </Text>
        </View>
        <View className="mt-10">
          <TouchableOpacity>
            <View>
              <View
                className={`box-view box-border bg-gray-800 pl-5 pr-3 py-5 rounded-xl gap-[5px] border-l-[14px] border-teal-400 border-[0.4px] `}
              >
                <View className="text-view gap-2">
                  <View className="flex-row justify-between">
                    <Text className="text-textColor font-semibold">
                      45 Mins to 60 Mins
                    </Text>
                    <Checkbox />
                  </View>
                  <Text className="text-blue-300 font-bold text-[17px]">
                    Groundstrokes Practice
                  </Text>

                  <Text className="text-gray-400 font-semibold mt-2">
                    The Best BackHand in the world
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
