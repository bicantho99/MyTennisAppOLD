import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Dimensions,
  Animated,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Progress from "react-native-progress";
import Checkbox from "expo-checkbox";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  type Challenge = {
    day: number;
    text: string;
    completed: boolean;
  };

  // hardcode the challenges here
  const challenges: Challenge[] = [
    { day: 1, text: "Approach the net 10 times", completed: false },
    { day: 2, text: "Hit 5 aces", completed: false },
    { day: 3, text: "Play a full match", completed: false },
    { day: 4, text: "Win 3 games in a row", completed: false },
    { day: 5, text: "Practice footwork for 20 mins", completed: false },
    { day: 6, text: "Serve consistently for 10 minutes", completed: false },
    { day: 7, text: "Play a full set", completed: false },
  ];

  const [currentChallenge, setCurrentChallenge] = useState(0); // Tracks current day's challenge
  const [completedTasks, setCompletedTasks] = React.useState<number[]>([]);
  const progress = completedTasks.length / challenges.length;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const scrollViewRef = React.useRef<FlatList>(null);
  const ITEM_SIZE = 90;
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth * 0.8;

  const handleCheckboxChange = (index: number) => {
    const isChecked = completedTasks.includes(index);

    if (isChecked) {
      // Uncheck the box, no scroll needed
      setCompletedTasks(completedTasks.filter((task) => task !== index));
    } else {
      // Check the box and scroll to the next task
      setCompletedTasks((prev) => [...prev, index]);
      setTimeout(() => {
        const nextIndex = index + 1;
        if (index < challenges.length - 1 && scrollViewRef.current) {
          // Ensure to scroll to the next item if it's within bounds
          scrollViewRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
        }
      }, 130);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-bgColor">
      <StatusBar style="light" />
      <View className="mx-6 my-6">
        <View className="Header mb-5 flex-row justify-between">
          <Text className="text-textColor font-semibold text-[25px]">
            Welcome
          </Text>
          <TouchableOpacity>
            <Text className="text-green-400 font-[500] text-[15px] p-2">
              Log In
            </Text>
          </TouchableOpacity>
        </View>

        <View className="box-view  bg-slate-800 pl-5  pr-3 pt-5  border-blue-800 rounded-xl gap-[5px]   border-[0.4px]  h-[190px] shadow-sm shadow-blue-400">
          <View className="text-view gap-2">
            <Text className="text-blue-300 font-bold text-[21px] mb-4">
              Weekly's Challenge
            </Text>
            <View className="mb-1">
              <Progress.Bar
                progress={progress}
                borderColor={""}
                //make width dynamic to user phone screen
                width={cardWidth}
                animated={true}
                useNativeDriver={true}
                animationConfig={{ bounciness: 0 }}
                animationType={"timing"}
              />
            </View>
            <View className="h-[90px] flex justify-between ">
              <Animated.FlatList
                ref={scrollViewRef} // Attach the FlatList reference
                onScroll={Animated.event([
                  { nativeEvent: { contentOffset: { y: scrollY } } },
                ])}
                data={challenges}
                keyExtractor={(item) => String(item.day)}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: 2 }}
                scrollEventThrottle={10} // Lower values will make scroll events fire more frequently
                decelerationRate={0.2}
                renderItem={({ item, index }) => {
                  const inputRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + 2),
                  ];
                  const opacityRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + 0.5),
                  ];

                  const scale = scrollY.interpolate({
                    inputRange,
                    outputRange: [1, 1, 1, 0],
                  });
                  const opacity = scrollY.interpolate({
                    inputRange: opacityRange,
                    outputRange: [1, 1, 1, 0],
                  });
                  const isChecked = completedTasks.includes(index);

                  return (
                    <Animated.View
                      //make width dynamic to user screen
                      className="w-[cardWidth]"
                      style={{ transform: [{ scale }], opacity }}
                    >
                      <View className="bg-blue-400 rounded-xl gap-3 p-[15px] mt-[8.3px] ">
                        <View className="flex-row justify-between">
                          <Text className="font-semibold opacity-[0.6px]">
                            Day {item.day}
                          </Text>
                          <Checkbox
                            value={isChecked}
                            onValueChange={() => handleCheckboxChange(index)}
                            color={isChecked ? "#2563eb" : "#334155"}
                          />
                        </View>
                        <Text className="text-[15px] font-semibold">
                          {item.text}
                        </Text>
                      </View>
                    </Animated.View>
                  );
                }}
              />
            </View>
          </View>
        </View>

        <View className="Header mt-5 flex-row justify-between mb-5">
          <Text className="text-textColor font-semibold text-[25px]">
            Explore Training
          </Text>
          <TouchableOpacity onPress={() => router.push("/training")}>
            <Text className="text-green-400 font-[500] text-[15px] p-2">
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-wrap flex-row gap-4">
          <View className="bg-cyan-400 rounded-md h-[90px]  flex-col gap-4 pl-3  pt-[12px]   min-w-[30%]">
            <FontAwesome5
              name="running"
              size={30}
              color="rgba(0, 0, 0, 0.5)"
              style={{ opacity: 0.6 }}
            />
            <Text className="text-white font-bold text-[16px]">Groundies</Text>
          </View>

          <View className="bg-teal-400 rounded-md h-[90px]  flex-col gap-4 pl-3 pt-[12px]  min-w-[30%]">
            <FontAwesome5
              name="running"
              size={30}
              color="rgba(0, 0, 0, 0.5)"
              style={{ opacity: 0.6 }}
            />
            <Text className="text-white font-bold text-[16px]">Net Game</Text>
          </View>

          <View className="bg-pink-400 rounded-md h-[90px]  flex-col gap-4 pl-3 pt-[12px] pr-4 min-w-[30%] border-[0.4px]">
            <FontAwesome5
              name="running"
              size={30}
              color="rgba(0, 0, 0, 0.5)"
              style={{ opacity: 0.6 }}
            />
            <Text className="text-white font-bold text-[16px]">Fitness</Text>
          </View>
        </View>

        <View className="Header mt-5 flex-row justify-between mb-4 ">
          <Text className="text-textColor font-semibold text-[25px]">
            Programs
          </Text>
          <TouchableOpacity onPress={() => router.push("/program")}>
            <Text className="text-green-400 font-[500] text-[15px] p-2">
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <View className="gap-2">
          <TouchableOpacity>
            <View className="box-view   bg-gray-800  rounded-xl  border-slate-600  border-[0.4px] p-3 ">
              <View className="bg-blue-400 rounded-md gap-3 p-3 ">
                <View className="flex-row justify-between">
                  <Text className="text-lg font-semibold">
                    Improve Baseline
                  </Text>
                  <Text className="text-[14px] font-bold mt-[4px] text-slate-800">
                    Coach Jakub
                  </Text>
                </View>
                <Text>Training focusing on being solid on the baseline</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="box-view  bg-gray-800  border-slate-600  rounded-xl  border-[0.4px]  p-3">
              <View className="bg-blue-500 rounded-md gap-3 p-3 ">
                <View className="flex-row justify-between">
                  <Text className="text-lg font-semibold">
                    Improve Net Game
                  </Text>
                  <Text className="text-[14px] font-bold mt-[4px] text-slate-800">
                    Coach Chris
                  </Text>
                </View>

                <Text>Training focusing on the upper part of the court</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
