import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
export default function tourneypage() {
  return (
    <SafeAreaView className="bg-bgColor flex-1">
      <View className="mx-6">
        <View className="flex-row items-center ">
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-slate-300 text-center text-2xl font-medium mt-2 flex-1">
            Tournament
          </Text>
          <Text className="text-slate-400 text-[15px] mt-3 font-medium">
            Edit
          </Text>
        </View>
        <View className="bg-slate-800 mt-5 p-3 rounded-lg">
          <Text className="text-slate-300 text-xl pl-3">
            Level 4 Austin 12's Under
          </Text>
          <View className="flex-row gap-3 pl-3 mt-3">
            <Text className="text-slate-400 text-lg">Houston</Text>
            <Text className="text-slate-400 text-lg">14/9</Text>
          </View>
        </View>

        <Text className="text-slate-300 mt-8 text-[15px] font-medium">
          Tournament Notes:
        </Text>
        <View className="mt-4 bg-slate-800 p-2 rounded-lg pl-4 py-5">
          <Text className="text-slate-300">
            My backhand was good, forehand was good but need to work on
            importants points... Note on techniques, mental, where you want to
            feel better, importants points. Decision making, adjustments, experiences
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
