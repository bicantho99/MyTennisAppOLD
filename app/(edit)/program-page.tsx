import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import Checkbox from "expo-checkbox";
import * as Progress from "react-native-progress";
export default function ProgramPage() {
  const [color, setColor] = React.useState<number>(0);
  const [task, setTask] = React.useState<number[]>([]);
  const [checkedStates, setCheckedStates] = React.useState([
    false,
    false,
    false,
    false,
  ]);
  const handleCheckboxChange = (index: number) => {
    // Update the specific checkbox state based on its index
    const updatedCheckedStates = [...checkedStates];
    updatedCheckedStates[index] = !updatedCheckedStates[index];
    setCheckedStates(updatedCheckedStates);
  };

  const sessions = [
    {
      time: "45 Mins to 60 Mins",
      title: "Groundstrokes Practice",
      description: "The Best BackHand in the world",
      borderColor: "border-teal-400",
    },
    {
      time: "45 Mins to 60 Mins",
      title: "Groundstrokes Practice",
      description: "The Best BackHand in the world",
      borderColor: "border-blue-400",
    },
    {
      time: "45 Mins to 60 Mins",
      title: "Groundstrokes Practice",
      description: "The Best BackHand in the world",
      borderColor: "border-teal-400",
    },
    {
      time: "45 Mins to 60 Mins",
      title: "Groundstrokes Practice",
      description: "The Best BackHand in the world",
      borderColor: "border-blue-400",
    },
  ];
  return (
    <SafeAreaView className="bg-bgColor flex-1">
      <View className="mx-6 ">
        <View className="flex-row gap-3 pt-2">
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>

          <Text className="text-textColor font-medium text-xl">
            Plan Overview
          </Text>
        </View>
        <ScrollView>
          <View className="mid-view mt-5  pb-2 flex-row justify-between px-1">
            {["Week 1", "Week 2", "Week 3"].map((item, index) => (
              <TouchableOpacity onPress={() => setColor(index)}>
                <Text
                  key={index}
                  className={`text-xl text-center font-medium ${
                    index === color ? "text-teal-400" : "text-textColor"
                  }`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View className="coach flex-row mt-5 gap-4">
            <Text className="h-16 w-16 bg-teal-400 rounded-[50px] text-center">
              Coach Cecile
            </Text>
            <Text className="text-textColor">
              "This practice focuses on solid forehand and backhand along with
              endurance training to make sure techniques don't break down when
              it's tiring."
            </Text>
          </View>

          <View className="mt-10 gap-4">
            {sessions.map((session, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleCheckboxChange(index)}
              >
                <View>
                  <View
                    className={`box-view box-border bg-gray-800 pl-5 pr-3 py-5 rounded-xl gap-[5px] border-l-[14px] ${session.borderColor} border-[0.4px]`}
                  >
                    <View className="text-view gap-2">
                      <View className="flex-row justify-between">
                        <Text className="text-textColor font-semibold">
                          {session.time}
                        </Text>
                        <Checkbox
                          value={checkedStates[index]}
                          onValueChange={() => handleCheckboxChange(index)}
                          color={checkedStates[index] ? "green" : "#334155"} // Green when checked
                        />
                      </View>
                      <Text className="text-blue-300 font-bold text-[17px]">
                        {session.title}
                      </Text>
                      <Text className="text-gray-400 font-semibold mt-2">
                        {session.description}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
            <View className="flex-row gap-2 mt-4 justify-evenly">
              {/* {[...Array(4)].map((_, index) => (
              <View
                key={index}
                className="h-[7px] flex-row rounded-lg bg-slate-600 w-[75px] transition duration-250 ease-in delay-100"
              />
            ))} */}
              <Progress.Bar
                progress={0}
                width={350}
                animated={true}
                useNativeDriver={true}
                animationConfig={{ bounciness: 0 }}
                animationType={"timing"}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
