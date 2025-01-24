import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { singleDataWeek1 } from "@/assets/constants/singledata/data1";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { doubleData } from "@/assets/constants/doubledata/data1";
export default function profile() {
  useEffect(() => {
    console.log(id);
  }, []);
  const { title, id } = useLocalSearchParams();
  let sections;
  if (Number(id) == 0) {
    sections = singleDataWeek1[title as keyof typeof singleDataWeek1];
  }
  if (Number(id) == 1) {
    sections = doubleData[title as keyof typeof doubleData];
  }
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      className="bg-bgColor"
      extraHeight={10}
    >
      <View className="mx-6 mt-11">
        <View className="flex-row items-center pt-2 justify-between">
          <TouchableOpacity onPress={() => router.back()} className=" mt-6">
            <AntDesign name="arrowleft" size={26} color="white" />
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Text className="text-textColor text-2xl font-bold mt-5">
              {title}
            </Text>
          </View>
        </View>
        <View className="Warm-up mt-7">
          <View className="flex-row items-center gap-4 mb-4">
            <Text className="text-textColor font-bold text-xl bg-slate-700 px-3 py-1 rounded-lg flex-shrink-0">
              1
            </Text>
            <Text className="text-blue-300 font-bold text-[16px]">Warm Up</Text>
          </View>
          <View className="drills mb-4">
            {sections["Warm Up"].drills.map((drill: any, index: any) => (
              <Text
                key={index}
                className="text-slate-300 text-[15px] mb-2 leading-5 bg-gray-800 py-5 px-4 rounded-md"
              >
                - {drill}
              </Text>
            ))}
            {sections["Warm Up"].notes.map((drill: any, index: any) => (
              <Text
                key={index}
                className="text-slate-400 text-[13px] mb-2 leading-5  py-4 px-4 rounded-md"
              >
                Note: {drill}
              </Text>
            ))}
          </View>
        </View>
        <View className="Warm-up">
          <View className="flex-row items-center gap-4 mb-4">
            <Text className="text-textColor font-bold text-xl bg-slate-700 px-3 py-1 rounded-lg flex-shrink-0">
              2
            </Text>
            <Text className="text-blue-300 font-bold text-[16px]">
              Main Drills
            </Text>
          </View>
          <View className="drills mb-4">
            {sections["Main Drills"].drills.map((drill: any, index: any) => (
              <Text
                key={index}
                className="text-slate-300 text-[15px] mb-2 leading-5 bg-slate-800 py-5 px-4 rounded-md"
              >
                - {drill}
              </Text>
            ))}
            {sections["Main Drills"].notes.map((drill: any, index: any) => (
              <Text
                key={index}
                className="text-slate-400 text-[13px] mb-2 leading-5  py-4 px-4 rounded-md"
              >
                Note: {drill}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
