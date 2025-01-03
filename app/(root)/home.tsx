import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Progress from "react-native-progress";
export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-bgColor">
      <View className="mx-6 my-6">
        <View className="Header mb-5">
          <Text className="text-textColor font-semibold text-[25px]">
            Welcome
          </Text>
        </View>

        <TouchableOpacity>
          <View className="box-view box-border bg-gray-800 pl-5 pr-3 pt-5 rounded-xl gap-[5px]   border-[0.4px]">
            <View className="text-view gap-2">
              <Text className="text-blue-300 font-bold text-[20px] mb-5">
                Challenges Progress
              </Text>
              <Progress.Bar progress={0.3} width={300} />
            </View>

            <View className="bg-blue-500 rounded-md gap-3 p-3 my-5">
              <View className="flex-row justify-between">
                <Text className="text-lg font-semibold">Daily Challenge</Text>
                <Text>Check</Text>
              </View>
              <Text>Make less than 10 net errors</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View className="flex-row justify-between items-center">
          <Text className="text-textColor text-3xl font-bold mt-5">
            Trainings
          </Text>
          <Text className="mt-5 text-[15px] font-medium text-green-300">
            See All
          </Text>
        </View>
        {/*
        <View className="bg-blue-500 rounded-md gap-3 p-3 my-5">
          <View className="flex-row justify-between">
            <Text className="text-lg font-semibold">Forehand and Backhand</Text>
            <Text>Check</Text>
          </View>
          <Text>Make less than 10 net errors</Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
}
