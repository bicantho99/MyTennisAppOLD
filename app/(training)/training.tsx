import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useProgramData } from "@/assets/constants/programs";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";
import Adding from "../(edit)/addprogram";
import { useTrainingData } from "@/assets/constants/dataContext";

export default function TrainingPage() {
  const { programData, setProgramData } = useTrainingData();
  const [searchTerm, setSearchTerm] = useState("");

  //filter program data based on user search term
  const filterPrograms = programData.filter((program) =>
    program.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-bgColor">
      <StatusBar style="auto" />
      <ScrollView>
        <View className="mx-6 gap-4 mt-3 ">
          <View className="flex-row justify-between items-center">
            <TouchableOpacity
              onPress={() => router.back()}
              className="flex items-center justify-center"
            >
              <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>

            <Text className="text-textColor  text-[25px] font-bold">
              Trainings
            </Text>
            <TouchableOpacity
              onPress={() => {
                router.push("/(edit)/addprogram");
              }}
            >
              <AntDesign
                name="pluscircle"
                size={22}
                color="white"
                className="mt-2"
              />
            </TouchableOpacity>
          </View>
          <TextInput
            className="bg-gray-800 rounded-md h-[35px]  pl-3  text-white"
            placeholder="Search by name"
            placeholderTextColor={"gray"}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />

          {filterPrograms.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  router.push({
                    pathname: "/(edit)/training-page",
                    params: { trainingId: index },
                  })
                }
              >
                <View key={index}>
                  <View
                    className={`box-view box-border bg-gray-800 pl-5 pr-3 py-5 rounded-xl gap-[5px]  border-blue-800 border-[0.4px] shadow-sm shadow-slate-500`}
                  >
                    <View className="text-view gap-2">
                      <View className="flex-row justify-between">
                        <Text className="text-blue-300 font-bold text-[17px] ">
                          {item.title}
                        </Text>
                        <Text className="text-slate-200 text-sm">
                          {item.time} minutes
                        </Text>
                      </View>
                      <View className="flex-row">
                        {item.focuses?.map((focusItem, idx) => (
                          <Text
                            key={idx}
                            className="mr-3 mt-[3.5px] px-2 py-1 bg-blue-200 rounded-md text-[12px] font-medium "
                          >
                            {focusItem.focus}
                          </Text>
                        ))}
                      </View>
                      <Text className="text-gray-400 font-semibold text-[14px]">
                        {item.description}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
