import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
export default function program() {
  return (
    <SafeAreaView className="flex-1 bg-bgColor">
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="light" />
        <View className="mx-6 my-2 ">
          <Text className="text-textColor  text-[28px] font-bold mt-3  mb-6">
            Programs
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.push("/(edit)/program-page");  //app/(edit)/program-page.tsx
            }}
          >
            <View className="box-view  bg-slate-800 pl-5  pr-3 pt-5  border-blue-800 rounded-xl gap-[5px]   border-[0.4px]  h-[165px] mb-4">
              <View className="text-view flex-col justify-between h-full">
                <View className="gap-2 ">
                  <View className="flex-row justify-between">
                    <Text className="text-textColor">Coach Cecile</Text>
                    <Text className="text-textColor">Total Weeks: 3</Text>
                  </View>

                  <Text className="text-blue-300 font-bold text-[21px]">
                    Prep For Tournament
                  </Text>
                  {/* <Text className="text-textColor font-medium pl-6">Coach Cecile</Text> */}
                </View>
                <View className="mt-8 gap-2 m">
                  <View
                    className="flex-row gap-2"
                    style={{ transform: [{ translateY: -10 }] }}
                  >
                    <View
                      className="h-[7px]  flex-row rounded-lg
                     bg-slate-600 w-[57px] transition duration-250 ease-in delay-100"
                    />
                    <View
                      className="h-[7px]  flex-row rounded-lg
                     bg-slate-600 w-[57px] transition duration-250 ease-in delay-100"
                    />
                    <View
                      className="h-[7px]  flex-row rounded-lg
                     bg-slate-600 w-[57px] transition duration-250 ease-in delay-100"
                    />
                    <View
                      className="h-[7px]  flex-row rounded-lg
                     bg-slate-600 w-[57px] transition duration-250 ease-in delay-100"
                    />
                    <View
                      className="h-[7px]  flex-row rounded-lg
                     bg-slate-600 w-[57px] transition duration-250 ease-in delay-100"
                    />
                  </View>
                  <View className="flex-row justify-between">
                    {/* <Text className="text-textColor">
                    Training focusing on being solid on the baseline
                  </Text> */}
                  </View>
                </View>

                <View className="flex-row pb-5 ">
                  <Text className="mr-4 mt-[3.5px] px-2 py-1 bg-blue-200 rounded-md text-[14px] font-medium ">
                    Forehand
                  </Text>
                  <Text className="mr-4 mt-[3.5px] px-2 py-1 bg-blue-200 rounded-md text-[12px] font-medium ">
                    Serve
                  </Text>
                  <Text className="mr-4 mt-[3.5px] px-2 py-1 bg-blue-200 rounded-md text-[12px] font-medium ">
                    NetGame
                  </Text>
                  <Text className="mr-4 mt-[3.5px] px-2 py-1 bg-blue-200 rounded-md text-[12px] font-medium ">
                    Forehand
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
