import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
export default function matchpage() {
  
  return (

    <SafeAreaView className="bg-bgColor flex-1">
      <View className="mx-6">
        <View className="flex-row items-center ">
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-slate-300 text-center text-2xl font-medium mt-2 flex-1">
            Match Info
          </Text>
          <Text className="text-slate-400 text-[15px] mt-3 font-medium">
            Edit
          </Text>
        </View>

        <View className="mt-8 bg-slate-800 p-2 rounded-lg pl-4 py-5">
          <View className="gap-2">
            <View className="flex-row justify-between">
              <Text className="text-textColor text-[19px]">Steve Jobs</Text>
              <View className="flex-row gap-4 pr-4">
                <Text className="text-textColor text-[23px] ">6</Text>
                <Text className="text-textColor text-[23px]">6</Text>
              </View>
            </View>
            <View className="flex-row gap-4 justify-between">
              <Text className="text-textColor text-[19px]">Steve Jobs</Text>
              <View className="flex-row gap-4 pr-4">
                <Text className="text-textColor text-[23px]">2</Text>
                <Text className="text-textColor text-[23px]">2</Text>
              </View>
            </View>
          </View>
        </View>
        <Text className="text-slate-300 mt-8 text-[15px] font-medium">
          Match Notes:
        </Text>
        <View className="mt-4 bg-slate-800 p-2 rounded-lg pl-4 py-5">
          <Text className="text-slate-300">
            My backhand was good, forehand was good but need to work on
            importants points...
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
