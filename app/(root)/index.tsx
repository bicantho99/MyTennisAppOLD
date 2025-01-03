import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Progress from "react-native-progress";
import Checkbox from "expo-checkbox";
export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-bgColor">
      <View className="mx-6 my-6">
        <View className="Header mb-5 flex-row justify-between">
          <Text className="text-textColor font-semibold text-[25px]">
            Welcome
          </Text>
          <TouchableOpacity>
            <Text className="text-green-400 font-[500] text-[15px] p-2">
              Log In
            </Text>
          </TouchableOpacity>
        </View>

        <View className="box-view box-border bg-gray-800 pl-5 pr-3 pt-5  rounded-xl gap-[5px]   border-[0.4px]">
          <View className="text-view gap-2">
            <Text className="text-blue-300 font-bold text-[20px] mb-5">
              Weekly's Challenge
            </Text>
            <Progress.Bar progress={0} width={300} />
          </View>
          <TouchableOpacity>
            <View className="bg-blue-400 rounded-md gap-3 p-3 my-5">
              <View className="flex-row justify-between">
                <Text>Day 1</Text>
                <Checkbox color={"black"} />
              </View>
              <Text className="text-[15px] font-semibold">
                Approach the net 10 times
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="Header mt-5 flex-row justify-between mb-5">
          <Text className="text-textColor font-semibold text-[25px]">
            Welcome
          </Text>
          <TouchableOpacity>
            <Text className="text-green-400 font-[500] text-[15px] p-2">
              Log In
            </Text>
          </TouchableOpacity>
        </View>

        <View className="gap-2">
          <TouchableOpacity>
            <View className="box-view   bg-gray-800  rounded-xl    border-[0.4px] p-3 ">
              <View className="bg-blue-400 rounded-md gap-3 p-3 ">
                <View className="flex-row justify-between">
                  <Text className="text-lg font-semibold">Daily Challenge</Text>
                  <Text>Check</Text>
                </View>
                <Text>Make less than 10 net errors</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="box-view   bg-gray-800  rounded-xl    border-[0.4px] p-3">
              <View className="bg-blue-500 rounded-md gap-3 p-3 ">
                <View className="flex-row justify-between">
                  <Text className="text-lg font-semibold">Daily Challenge</Text>
                  <Text>Check</Text>
                </View>
                <Text>Make less than 10 net errors</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="box-view   bg-gray-800  rounded-xl    border-[0.4px] p-3">
              <View className="bg-blue-400 rounded-md gap-3 p-3 ">
                <View className="flex-row justify-between">
                  <Text className="text-lg font-semibold">Daily Challenge</Text>
                  <Text>Check</Text>
                </View>
                <Text>Make less than 10 net errors</Text>
              </View>
            </View>
          </TouchableOpacity>
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
