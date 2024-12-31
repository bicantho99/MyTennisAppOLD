import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { programData } from "@/assets/constants/programs";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function index() {
  return (
    <SafeAreaView className="bg-bgColor flex-1">
      <StatusBar style="light" />
      <ScrollView>
        <View className="mx-10 gap-5 pb-10 ">
          <View className="flex-row justify-between items-center">
            <Text className="text-textColor text-4xl font-bold mt-5">
              Trainings
            </Text>
            <TouchableOpacity onPress={() => router.push("/(edit)/addprogram")}>
              <AntDesign
                name="pluscircle"
                size={22}
                color="white"
                className="mt-2"
              />
            </TouchableOpacity>
          </View>
          <TextInput
            className="bg-gray-700 rounded-md h-[35px]  pl-3"
            placeholder="Search...."
            placeholderTextColor={"gray"}
          />

          {programData.map((item, index) => {
            return (
              <TouchableOpacity>
                <View key={index}>
                  <View className="box-view box-border bg-gray-800 px-5 py-4 rounded-lg gap-[5px]">
                    <View className="text-view gap-2">
                      <Text className="text-textColor font-bold">
                        {item.title}
                      </Text>
                      <View className="flex-row">
                        {item.focuses.map((focusItem, idx) => (
                          <Text
                            key={idx}
                            className="mr-2 p-1 bg-yellow-100 rounded-md text-[12px]"
                          >
                            {focusItem.focus}
                          </Text>
                        ))}
                      </View>
                      <Text className="text-gray-400">{item.description}</Text>
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
