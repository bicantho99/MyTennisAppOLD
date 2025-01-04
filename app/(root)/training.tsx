import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useProgramData } from "@/assets/constants/programs";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function index() {
  const { programData, setProgramData } = useProgramData();
  const newTraining = {
    title: "ForeHand Mastery",
    description:
      "Amazing Amazing Amazing Amazing Amazing Amazing Amazing Amazing ",
    numDrills: 4,
    time: 2,
    focuses: [],
    warmUp: ["Forehand short", "Forehand short", "Forehand short"],
    mainDrills: ["Forehand short", "Forehand short", "Forehand short"],
    fitness: ["Forehand short", "Forehand short", "Forehand short"],
    other: ["Forehand short", "Forehand short", "Forehand short"],
  };
  return (
    <SafeAreaView className="bg-bgColor flex-1">
      <StatusBar style="light" />
      <ScrollView>
        <View className="mx-7 gap-5 pb-10">
          <View className="flex-row justify-between items-center">
            <Text className="text-textColor text-4xl font-bold mt-5">
              Trainings
            </Text>
            <TouchableOpacity
              onPress={() => {
                router.push("/(edit)/addprogram");
                programData.push(newTraining);
                console.log(programData.length);
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
            className="bg-gray-800 rounded-md h-[35px]  pl-3 "
            placeholder="Search by name"
            placeholderTextColor={"gray"}
          />

          {programData.map((item, index) => {
            const borderColorClass =
              index % 2 === 0 ? "border-blue-200" : "border-blue-600";

            return (
              <TouchableOpacity
                key={item.title}
                onPress={() => router.push("/(edit)/training-page")}
              >
                <View key={index}>
                  <View
                    className={`box-view box-border bg-gray-800 pl-5 pr-3 py-5 rounded-xl gap-[5px]  ${borderColorClass} border-[0.4px] `}
                  >
                    <View className="text-view gap-2">
                      <Text className="text-blue-300 font-bold text-[17px] ">
                        {item.title}
                      </Text>
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
                      <Text className="text-gray-400 font-semibold">
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
