import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import Checkbox from "expo-checkbox";
import * as Progress from "react-native-progress";
export default function ProgramPage() {
  const [color, setColor] = React.useState<number>(0);

  const [checkedValues, setCheckedValues] = useState<number[]>([]);

  const handleCheckboxChange = (index: number, value: boolean) => {
    const updatedSessions = [...sessions];
    updatedSessions[index].state = value;
    setSessions(updatedSessions); // Update the sessions state

    if (value) {
      setCheckedValues((prevValues) => [...prevValues, 0]);
    } else {
      setCheckedValues((prevValues) => prevValues.slice(0, -1));
    }
  };

  const [sessions, setSessions] = useState([
    {
      state: false,
      time: "45 Mins to 60 Mins",
      title: "Short Ball Hunter",
      description: "Approaching the net has a wonderful winning percentage",
      borderColor: "border-teal-400",
    },
    {
      state: false,
      time: "45 Mins to 60 Mins",
      title: "Serving Patterns",
      description:
        "Combine the Serve & the first two-three shots after the serve into 1 unit.",
      borderColor: "border-blue-400",
    },
    {
      state: false,
      time: "45 Mins to 60 Mins",
      title: "Between The Points",
      description:
        "This area focuses on the mental and emotional aspects of your game",
      borderColor: "border-teal-400",
    },
    {
      state: false,
      time: "45 Mins to 60 Mins",
      title: "Baseline Patterns and Strategies",
      description: "Discover the best baseline practices",
      borderColor: "border-blue-400",
    },
  ]);

  const progressBarArray = Array.from(checkedValues);

  const fullText =
    "This practice focuses on solid forehand and backhand along with endurance training to make sure techniques don't break down when it's tiring.";
  const truncatedText = "This practice focuses on solid...";
  const [showFullText, setShowFullText] = useState(false);
  return (
    <SafeAreaView className="bg-bgColor flex-1">
      <View className="mx-6 ">
        <View className="flex-row gap-3 pt-2">
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>

          <Text className="text-textColor font-medium text-xl">
            Program Overview
          </Text>
        </View>
        <ScrollView>
          <View className="mid-view mt-5  pb-2 flex-row justify-between px-1">
            {["Week 1", "Week 2", "Week 3"].map((item, index) => (
              <TouchableOpacity onPress={() => setColor(index)} key={index}>
                <Text
                  className={`text-xl text-center font-medium ${
                    index === color ? "text-teal-400" : "text-textColor"
                  }`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View className="flex-row gap-2 justify-evenly mt-3 ">
            {[0, 0, 0, 0].map((_, index) => (
              <View
                key={index}
                className={`h-[7px] flex-row rounded-lg  ${
                  checkedValues.length > index ? "bg-teal-400" : "bg-slate-700"
                }
                } w-[80px] transition duration-250 ease-in delay-100`}
              />
            ))}
          </View>

          <View className="coach flex-row mt-5 gap-4">
            <View className="flex items-center justify-center bg-teal-400 h-14 w-14 rounded-[19px]">
              <Text className=" rounded-[50px] text-center">Cecile</Text>
            </View>
            <View className="flex-col">
              <Text className="text-slate-100 font-medium">Coach Cecile</Text>
              <Pressable onPress={() => setShowFullText(!showFullText)}>
                <View className="flex-row mt-2 w-[290px]">
                  <Text className="text-textColor ">
                    {showFullText ? fullText : truncatedText}
                  </Text>
                  <Text className="text-slate-400 text-[14px] ml-2">
                    {showFullText ? "" : "See more"}
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>

          <View className="mt-6 gap-4">
            {sessions.map((session, index) => (
              <TouchableOpacity key={index}>
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
                          key={index}
                          value={session.state}
                          onValueChange={(value) =>
                            handleCheckboxChange(index, value)
                          }
                          color={session.state ? "#ec4899" : undefined}
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
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
