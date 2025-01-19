import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { singleDataWeek1 } from "@/assets/constants/singledata/data1";
export default function profile() {

  const { title } = useLocalSearchParams();
  const sections = singleDataWeek1[title as keyof typeof singleDataWeek1];

  return (
    <SafeAreaView className="bg-bgColor flex-1">
      <View className="mx-6 my-6">
        <View className="flex-row  pt-2 ">
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <View className="flex-1 items-center mr-5">
            <Text className="text-textColor font-medium text-2xl ">
              {title}
            </Text>
          </View>
        </View>

        {Object.keys(sections).map((section, index) => (
          <View key={index} className="mt-5">
            <Text className="text-sky-500 text-lg font-bold mb-2 capitalize">
              {section}
            </Text>

            {Object.keys(sections[section]).map(
              (subSection: any, index: any) => (
                <View className="gap-3">
                  {/* <Text key={index} className="text-textColor">
                    {subSection}
                  </Text> */}
                  {sections[section][subSection].map(
                    (drill: any, drillIndex: any) => (
                      <Text
                        key={drillIndex}
                        className="text-[14px] mb-1 text-textColor"
                      >
                        - {drill}
                      </Text>
                    )
                  )}
                </View>
              )
            )}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
