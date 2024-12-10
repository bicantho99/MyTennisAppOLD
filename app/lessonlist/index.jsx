import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";

const lessonlist = () => {
  return (
    <SafeAreaView className="flex-1 bg-bgColor">
      <StatusBar style="light" />
      <View className="items-center mt-5  mx-10 justify-between flex-row">
        <Text className="color-textColor text-4xl font-semibold">
          My Lessons
        </Text>
        <AntDesign name="pluscircleo" size={24} color="white" />
      </View>
      <View className="mt-5 mx-10 flex-column gap-4 border-slate-100 border p-5">
        <View className="flex-row gap-2 justify-between">
          <Text className="text-start text-textColor">Khanh Nguyen</Text>
          <Text className="text-start text-textColor">4:00 PM - 6:00 PM</Text>
        </View>
        <View className="flex-row gap-2 justify-between">
          <Text className="text-start text-textColor">
            Location: Chancellors
          </Text>
          <Text className="text-textColor">Edit</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default lessonlist;
