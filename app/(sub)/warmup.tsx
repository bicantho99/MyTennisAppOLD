import { View, Text } from "react-native";
import React from "react";

export default function WarmUp() {
  return (
    <View className="container bg-bgColor flex-1 ">
      <View className="header gap-5">
        <Text className="font-bold text-2xl mt-5 text-center text-textColor">
          Log Your Training
        </Text>
        <View className="gap-4">
          <Text className="font-semibold text-textColor text-xl">
            Ground Strokes
          </Text>
          <Text className="text-textColor">Forehand Down The Line</Text>
          <Text className="text-textColor">Forehand Cross Court</Text>
          <Text className="text-textColor">Backhand Down the Line</Text>
          <Text className="text-textColor">
            Time:15 minutes
          </Text>
          <Text className="font-semibold text-textColor text-xl">Serve</Text>
          <Text className="text-textColor">Forehand Down The Line</Text>
          <Text className="text-textColor">Forehand Cross Court</Text>
          <Text className="text-textColor">Backhand Down the Line</Text>
          <Text className="text-textColor">
            Time: 15 minutes
          </Text>
          <Text className="font-semibold text-textColor text-xl">Fitness</Text>
          <Text className="text-textColor">Forehand Down The Line</Text>
          <Text className="text-textColor">Forehand Cross Court</Text>
          <Text className="text-textColor">Backhand Down the Line</Text>
          <Text className="text-textColor">
            Time: 45 minutes
          </Text>
          <Text className="text-textColor text-center">Submit</Text>
        </View>
      </View>
    </View>
  );
}
