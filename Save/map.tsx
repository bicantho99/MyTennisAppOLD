import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";

export default function Map() {
  const tasks = [
    "Hit with less than 5 net errors",
    "Hit with less Backhand errors",
    "Hit with less Forehand errors",
    "Hit with consistent topspin",
    "Hit with improved footwork",
  ];
  return (
    <SafeAreaView className="bg-bgColor flex-1 flex-col">
      <View className="mx-10 gap-10">
        <Text className="text-center text-textColor text-3xl">Groundies</Text>

        {tasks.map((task, index) => (
          <View key={index} className="flex-row gap-5">
            <Checkbox />
            <Text className="text-textColor">{task}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
