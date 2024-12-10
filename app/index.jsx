import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import FormFields from "./FormFields";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function subLesson() {
  const [students, setStudents] = useState(0);
  const [courts, setCourts] = useState(0);

  const Calculation = (students, courts) => {
    const maxCapacity = 4;
    if (students > maxCapacity) {
      const odd = students % maxCapacity;
      const studentPerCourt = Math.floor(students / courts);

      return `${studentPerCourt} players per court and there are ${odd} odd players`;
    } else {
      const studentPerCourt = students / courts;
      return `Allocate ${studentPerCourt} per court`;
    }
  };

  return (
    <LinearGradient
      colors={["#1A2D45", "#10172A"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.3, y: 0.4 }}
      locations={[0.1, 1]}
    >
      <StatusBar style="light" />
      <SafeAreaView>
        <View className="mx-10">
          <Text className="color-textColor text-lg font-medium">
            Welcome, Khanh Nguyen!
          </Text>
        </View>
        <View className="items-center mx-10 rounded-md h-70">
          <Text className="color-textColor1 text-2xl font-medium mt-2"></Text>
          <TextInput
            className="w-full mt-4 p-3 border border-gray-300 rounded-md "
            placeholder="Enter details"
            placeholderTextColor={"white"}
          />

          <TextInput
            className="w-full mt-4 p-3 border border-gray-300 rounded-md"
            placeholder="Enter more details"
            placeholderTextColor={"white"}
          />
          <View className="flex-col w-full mt-5 gap-3 ">
            <Text className="text-textColor">
              4 players per court and 4 odd players
            </Text>
            <Link href="/lessonlist" className="text-textColor">
              Go to lesson list
            </Link>
            <Link href="/attendance" className="text-textColor">
              Go to student attendance
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
