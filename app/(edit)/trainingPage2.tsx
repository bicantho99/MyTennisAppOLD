import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useState } from "react";

export default function profile() {
  const [trainingData, setTrainingData] = useState<any>({
    singleServePattern: {
      warmUp: {
        drills: [
          "Mini Tennis - 30 balls totals",
          "Baseline cross court deuce side - 20 Ball in a row or 5 balls in a row (x4)",
          "Serve warm up deuce side x15",
        ],
        notes: [
          "Warm up with good rhythm and consistency, adjust to court, ball conditions, etc.",
        ],
      },
      mainDrills: {
        drills: [
          "Combine a serve and forehands to opponent's backhand on deuce side (x15)",
          "Serve and Volleys to Opponent's backhand (x10)",
          "2nd Serve to opponent's backhand or T on deuce side (x10)",
        ],
        notes: [
          "Focus on maximizing your strengths to your opponent's weakness",
        ],
      },
      wrapUp: {
        drills: [
          "Play points and apply the serving patterns above",
          "Play points with second serve only",
        ],
        notes: [
          "Focus on having a strong second serve physically and mentally",
        ],
      },
    },
  });
  const sections = trainingData.singleServePattern;
  return (
    <SafeAreaView className="bg-bgColor flex-1">
      <View className="mx-6 my-6">
        <View className="flex-row  pt-2 ">
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <View className="flex-1 items-center mr-5">
            <Text className="text-textColor font-medium text-2xl ">
              Baseline Flows
            </Text>
          </View>
        </View>

        {/* <View className="mt-5">
          <Text className="text-sky-500 text-[16px] font-medium ">
            The Serve
          </Text>
          <Text className="text-slate-400 mt-1 text-[14px]">
            Having the right intention when ask him....Read More
          </Text>
        </View> */}

        {Object.keys(sections).map((section, index) => (
          <View key={index} className="mt-5">
            {/* Section Title */}
            <Text className="text-sky-500 text-lg font-bold mb-2 capitalize">
              {section}
            </Text>

            {/* Drills */}
            {sections[section].drills.map((drill: any, idx: any) => (
              <Text key={idx} className="text-slate-400 text-sm mb-1">
                - {drill}
              </Text>
            ))}

            {/* Notes */}
            <Text className="text-sky-500 text-sm font-bold mt-3">Notes:</Text>
            {sections[section].notes.map((note: any, idx: any) => (
              <Text key={idx} className="text-slate-400 text-sm mb-1">
                - {note}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
