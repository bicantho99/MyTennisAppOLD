import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Progress from "react-native-progress";
import Checkbox from "expo-checkbox";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";

export default function Home() {
  const [completedTasks, setCompletedTasks] = useState(0);
  const totalTasks = 7;
  const progress = completedTasks / totalTasks;

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

        <View className="box-view box-border bg-gray-800 pl-5  pr-3 pt-5  rounded-xl gap-[5px]   border-[0.4px] ">
          <View className="text-view gap-2">
            <Text className="text-blue-300 font-bold text-[20px] mb-5">
              Weekly's Challenge
            </Text>
            <Progress.Bar
              progress={progress}
              width={320}
              animated={true}
              useNativeDriver={true}
              animationConfig={{ bounciness: 0 }}
              animationType={"timing"}
            />
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

          <View
            className="flex-row gap-2  justify-center items-center "
            style={{ transform: [{ translateY: -10 }] }}
          >
            <View
              className="h-[4px]  flex-row rounded-lg
                     bg-blue-400 w-[10px] transition duration-250 ease-in delay-100"
            />
            <View
              className="h-[4px]  flex-row rounded-lg
                     bg-white w-[10px] transition duration-250 ease-in delay-100"
            />
            <View
              className="h-[4px]  flex-row rounded-lg
                     bg-blue-400 w-[10px] transition duration-250 ease-in delay-100"
            />
            <View
              className="h-[4px]  flex-row rounded-lg
                     bg-blue-400 w-[10px] transition duration-250 ease-in delay-100"
            />
            <View
              className="h-[4px]  flex-row rounded-lg
                     bg-blue-400 w-[10px] transition duration-250 ease-in delay-100"
            />
            <View
              className="h-[4px]  flex-row rounded-lg
                     bg-blue-400 w-[10px] transition duration-250 ease-in delay-100"
            />
          </View>
        </View>

        <View className="Header mt-5 flex-row justify-between mb-5">
          <Text className="text-textColor font-semibold text-[25px]">
            Train
          </Text>
          <TouchableOpacity onPress={() => router.push("/training")}>
            <Text className="text-green-400 font-[500] text-[15px] p-2">
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-wrap flex-row gap-4">
          <View className="bg-cyan-400 rounded-md h-[90px]  flex-col gap-4 pl-3  pt-[12px]   min-w-[30%]">
            <FontAwesome5
              name="running"
              size={30}
              color="rgba(0, 0, 0, 0.5)"
              style={{ opacity: 0.6 }}
            />
            <Text className="text-white font-bold text-[16px]">Groundies</Text>
          </View>

          <View className="bg-teal-400 rounded-md h-[90px]  flex-col gap-4 pl-3 pt-[12px]  min-w-[30%]">
            <FontAwesome5
              name="running"
              size={30}
              color="rgba(0, 0, 0, 0.5)"
              style={{ opacity: 0.6 }}
            />
            <Text className="text-white font-bold text-[16px]">Net Game</Text>
          </View>

          <View className="bg-pink-400 rounded-md h-[90px]  flex-col gap-4 pl-3 pt-[12px] pr-4 min-w-[30%]">
            <FontAwesome5
              name="running"
              size={30}
              color="rgba(0, 0, 0, 0.5)"
              style={{ opacity: 0.6 }}
            />
            <Text className="text-white font-bold text-[16px]">Fitness</Text>
          </View>
        </View>

        <View className="Header mt-5 flex-row justify-between mb-4 ">
          <Text className="text-textColor font-semibold text-[25px]">
            Train
          </Text>
          <TouchableOpacity>
            <Text className="text-green-400 font-[500] text-[15px] p-2">
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View className="gap-2">
          <TouchableOpacity>
            <View className="box-view   bg-gray-800  rounded-xl    border-[0.4px] p-3 ">
              <View className="bg-blue-400 rounded-md gap-3 p-3 ">
                <View className="flex-row justify-between">
                  <Text className="text-lg font-semibold">
                    Improve Baseline
                  </Text>
                </View>
                <Text>Training focusing on being solid on the baseline</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="box-view   bg-gray-800  rounded-xl    border-[0.4px] p-3">
              <View className="bg-blue-500 rounded-md gap-3 p-3 ">
                <View className="flex-row justify-between">
                  <Text className="text-lg font-semibold">
                    Improve Net Game
                  </Text>
                </View>
                <Text>Training focusing on the upper part of the court</Text>
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
