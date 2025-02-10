import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useWeeklyStore } from "../../../tennis-backend/useWeeklyStore";

export default function Adding() {
  const { challenges } = useWeeklyStore();
  const [name, setName] = useState("");
  const [descr, setDescr] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-bgColor">
      <View className="mx-6 gap-5 pb-10 pt-3">
        <View className="flex-row justify-between items-center">
          <Text className="text-textColor text-3xl font-semi mt-5">
            I'm Working On:
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <Text className="mt-5 text-[15px] font-medium text-green-300">
              Close
            </Text>
          </TouchableOpacity>
        </View>

        <View className="gap-3 flex-col">
          <TextInput
            className="text-white p-5 bg-slate-800 rounded-lg"
            placeholder="Serve and Volley"
          />
          <View className="flex-row gap-4 items-center">
            <TextInput
              className="text-white p-5 bg-slate-800 rounded-lg"
              placeholder="a great way to surprise your opponent"
            />
            <Text className="text-slate-300 font-bold text-lg bg-slate-800 p-4 rounded-xl">
              Add
            </Text>
          </View>
        </View>
        <View className="">
          <FlatList
            data={challenges}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View className="rounded-xl gap-3 p-2  mt-[8.3px]">
                <View className="flex-row justify-between items-center">
                  <Text className="text-[16px] text-slate-200 font-semibold">
                    {item.text}
                  </Text>
                  <Text className="text-slate-400">Delete</Text>
                </View>
                <Text className="font-semibold opacity-[0.5px] text-white">
                  {item.descr}
                </Text>
              </View>
            )}
            ItemSeparatorComponent={() => (
              <View className="h-[1px] bg-gray-500 mx-2" />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
