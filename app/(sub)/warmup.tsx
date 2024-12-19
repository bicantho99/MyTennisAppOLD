import { View, Text } from "react-native";
import React from "react";

export default function WarmUp() {
  return (
    <View className="container bg-bgColor flex-1">
      <View className="header">
        <Text className="font-bold text-2xl mt-5 text-center text-textColor">
          Warm Up
        </Text>
        <Text className="font-semibold text-textColor text-xl">
          Current warm up
        </Text>
        <View className="currentwarmup">
          <Text className="text-text-c">Mini Tennis</Text>
          <Text>25 balls in a row</Text>
        </View>
        <Text className="font-semibold text-textColor text-xl">
          Suggested warm up
        </Text>
      </View>
    </View>
  );
}
