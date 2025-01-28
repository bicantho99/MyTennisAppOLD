import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";
import { usePlayerStore } from "@/assets/constants/playerdata/data";
export default function tourneypage() {
  const { playerID } = useLocalSearchParams();
  const {
    playerData,
    addPlayerInfo,
    loadPlayerInfos,
    clearStorage,
    deletePlayerInfo,
  } = usePlayerStore();
  const actualPlayer = playerData.find(
    (match: any) => match.playerId == playerID
  );

  return (
    <SafeAreaView className="bg-bgColor flex-1">
      <View className="mx-6">
        <View className="flex-row items-center ">
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-slate-300 text-center text-2xl font-medium mt-2 flex-1">
            {/* {actualPlayer.name} */}James Bui
          </Text>
          <Text className="text-slate-400 text-[15px] mt-3 font-medium">
            Edit
          </Text>
        </View>

        <View className="bg-slate-800 mt-8 p-3 rounded-lg border-blue-300 border">
          <Text className="text-slate-300 text-xl pl-3 font-semibold">
            Weakness
          </Text>
          <View className="flex-row gap-3 pl-3 mt-3">
            <Text className="text-slate-400 text-lg">
              Too much ball hogging
            </Text>
          </View>
        </View>
        <View className="bg-slate-800 mt-5 p-3 rounded-lg border-blue-300 border">
          <Text className="text-slate-300 text-xl pl-3 font-semibold">
            Strength
          </Text>
          <View className="flex-row gap-3 pl-3 mt-3">
            <Text className="text-slate-400 text-lg">
              Hit the ball with loud noises
            </Text>
          </View>
        </View>
        <View className="bg-slate-800 mt-5 gap-1 p-3 rounded-lg">
          <View className="flex-row justify-between">
            <Text className="text-blue-300 text-xl pl-3">Rating</Text>
            <Text className="text-slate-400 text-lg pr-2">5.0 USTA</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-blue-300 text-xl pl-3">Group</Text>
            <Text className="text-slate-400 text-lg pr-2">
              14's Under Girls
            </Text>
          </View>
        </View>
        <View className="bg-slate-800 mt-5 p-3 rounded-lg">
          <Text className="text-blue-300 text-xl pl-3 font-semibold">Note</Text>
          <View className="flex-row gap-3 pl-3 mt-3">
            <Text className="text-slate-400 text-lg">He's alright</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Text className="text-orange-400 mt-5 pl-1 font-semibold text-lg ">
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
