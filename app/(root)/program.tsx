import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import * as Progress from "react-native-progress";
import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import RNSegmentedProgressBar, {
  RunAnimationHandler,
} from "@baby-journey/rn-segmented-progress-bar";
export default function program() {

  return (
    <SafeAreaView className="flex-1 bg-bgColor">
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="light" />
        <View className="mx-6 my-2 ">
          <Text className="text-textColor  text-[28px] font-bold mt-3  mb-6">
            Programs
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.push("/(edit)/program-page"); //app/(edit)/program-page.tsx
            }}
          >
            <View className="box-view  bg-slate-800 pl-5  pr-3 pt-5  border-blue-800 shadow shadow-blue-400  rounded-xl gap-[5px]    border-[0.4px]  h-[165px] mb-4">
              <View className="text-view flex-col justify-between h-full">
                <View className="gap-2 ">
                  <View className="flex-row justify-between">
                    <Text className="text-textColor font-medium">
                      Coach Cecile
                    </Text>
                    <Text className="text-gray-400 font-semibold">
                      Total Weeks: 3
                    </Text>
                  </View>

                  <Text className="text-blue-300 font-bold text-[21px] ">
                    Prep For Tournament
                  </Text>
                </View>

                <Text className="text-white">
                  Training focusing on the upper part of the court
                </Text>
                <View className="flex-row pb-5 ">
                  <Text className="mr-4 mt-[3.5px] px-2 py-1 bg-blue-200 rounded-md text-[14px] font-medium ">
                    Forehand
                  </Text>
                  <Text className="mr-4 mt-[3.5px] px-2 py-1 bg-blue-200 rounded-md text-[12px] font-medium ">
                    Serve
                  </Text>
                  <Text className="mr-4 mt-[3.5px] px-2 py-1 bg-blue-200 rounded-md text-[12px] font-medium ">
                    NetGame
                  </Text>
                  <Text className="mr-4 mt-[3.5px] px-2 py-1 bg-blue-200 rounded-md text-[12px] font-medium ">
                    Forehand
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <View className="mt-8 gap-2">

            {/* <View
              className="flex-row gap-2 justify-evenly"
              style={{ transform: [{ translateY: -10 }] }}
            >
              <View
                className={`h-[7px]  flex-row rounded-lg
                     ${
                       checkedValues.length >= 1
                         ? "bg-teal-400"
                         : "bg-slate-200"
                     } w-[57px] transition duration-250 ease-in delay-100`}
              />
              <View
                className={`h-[7px]  flex-row rounded-lg
                     ${
                       checkedValues.length >= 2
                         ? "bg-teal-400"
                         : "bg-slate-200"
                     } w-[57px] transition duration-250 ease-in delay-100`}
              />
              <View
                className={`h-[7px]  flex-row rounded-lg
                     ${
                       checkedValues.length >= 3
                         ? "bg-teal-400"
                         : "bg-slate-200"
                     } w-[57px] transition duration-250 ease-in delay-100`}
              />
              <View
                className={`h-[7px]  flex-row rounded-lg
                     ${
                       checkedValues.length >= 4
                         ? "bg-teal-400"
                         : "bg-slate-200"
                     } w-[57px] transition duration-250 ease-in delay-100`}
              />
            </View> */}
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


  // const [checkboxStates, setCheckboxStates] = useState<boolean[]>([
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);
  // const [checkedValues, setCheckedValues] = useState<number[]>([]);

  // const handleCheckboxChange = (index: number, value: boolean) => {
  //   // Update checkbox state
  //   const updatedStates = [...checkboxStates];
  //   updatedStates[index] = value;
  //   setCheckboxStates(updatedStates);

  //   // Update central array based on checkbox state
  //   if (value) {
  //     setCheckedValues((prevValues) => [...prevValues, 0]); // Add 0 if checked
  //   } else {
  //     setCheckedValues((prevValues) => prevValues.slice(0, -1)); // Remove the last 0 if unchecked
  //   }
  // };





  //


      // <View className="flex-row gap-4 pl-3">
      //   {checkboxStates.map((isChecked, index) => (
      //     <Checkbox
      //       key={index}
      //       value={isChecked}
      //       onValueChange={(value) => handleCheckboxChange(index, value)}
      //       color={isChecked ? "#4630EB" : undefined}
      //     />
      //   ))}
      // </View>;