import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState, useRef } from "react";
import * as Progress from "react-native-progress";
import Checkbox from "expo-checkbox";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";

export default function Home() {
  type Challenge = {
    day: number;
    text: string;
    completed: boolean;
  };
  
  const challenges: Challenge[] = [
    { day: 1, text: "Approach the net 10 times", completed: false },
    { day: 2, text: "Hit 5 aces", completed: false },
    { day: 3, text: "Play a full match", completed: false },
    { day: 4, text: "Win 3 games in a row", completed: false },
    { day: 5, text: "Practice footwork for 20 mins", completed: false },
    { day: 6, text: "Serve consistently for 10 minutes", completed: false },
    { day: 7, text: "Play a full set", completed: false },
  ]
  
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentTask, setCurrentTask] = useState(0); 
  const [completedTasks, setCompletedTasks] = useState<number[]>([]); 
  const totalTasks = challenges.length;
  const progress = completedTasks.length / totalTasks;

  const handleTaskCompletion = (index: number) => {
    if (!completedTasks.includes(index)) {
      setCompletedTasks((prev) => [...prev, index]); 
      if (index < challenges.length - 1) {
        setCurrentTask(index + 1); 
      }
    }
  };

  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth * 0.8;
  
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-bgColor">
      <ScrollView>
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
          <View className="box-view box-border bg-gray-800 pl-4 pr-3 pt-5 rounded-xl gap-[5px] border-[0.4px]">
            <View className="text-view gap-2">
              <Text className="text-blue-300 font-bold text-[20px] mb-2">
                Weekly's Challenge
              </Text>
                <View style={{ alignItems: 'center', marginVertical: 10 }}>
                  <Progress.Bar
                    progress={progress}
                    width = {cardWidth}
                    animated={true}
                    useNativeDriver={true}
                    animationConfig={{ bounciness: 10 }}
                    animationType={"timing"}
                  />
                </View>
        </View>

        <View style={{ height: 125, marginVertical: 20 }}>
        
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            const pageIndex = Math.round(
              event.nativeEvent.contentOffset.x / cardWidth
            );
            setCurrentTask(pageIndex);
          }}
          scrollEventThrottle={50}
        >
            {challenges.map((challenge, index) => (
              <View
                key={index}
                style={{
                  width: cardWidth,
                  paddingHorizontal: 0,
                  marginRight: 0
                }}
              >
                <View className="bg-blue-400 rounded-md gap-3 p-3 my-3"
                      style={{marginHorizontal: 8}}
                >
                  <View className="flex-row justify-between">
                    <Text className="text-lg font-semibold">Day {challenge.day}</Text>
                    <Checkbox
                      value={completedTasks.includes(index)}
                      onValueChange={() =>  {
                        if (completedTasks.includes(index)) {
                          setCompletedTasks(completedTasks.filter((task) => task !== index)); // Uncheck logic
                        } else {
                          setCompletedTasks((prev) => [...prev, index]); // Check logic
                          if (index < challenges.length - 1) {
                            setTimeout(() => {
                              scrollViewRef.current?.scrollTo({
                                x: (index + 1) * cardWidth, // Move to the next card
                                animated: true,
                              });
                              setCurrentTask(index + 1);
                            }); // Delay to visually confirm the check
                          }
                        }
                      }}
                      color={completedTasks.includes(index) ? "#4ADE80" : "black"}
                    />
                  </View>
                  <Text className="text-[15px] font-semibold">{challenge.text}</Text>
                </View>
                
              </View>
            ))}
          </ScrollView>

          {/* Carousel indicators */}
          <View className="flex-row gap-1 justify-center items-center mt-2">
            {challenges.map((_, index) => (
              <View
                key={index}
                style={{
                  height: 4,
                  width: index === currentTask ? 14:14,
                  backgroundColor: index === currentTask ? "white" : "#60A5FA",
                  borderRadius: 2,
                  marginHorizontal: 3,
                }}
              />
            ))}
          </View>
        </View>

        <View className="Header mt-5 flex-row justify-between mb-5">
          <Text className="text-textColor font-semibold text-[25px]">
            Train
          </Text>
          <TouchableOpacity onPress={() => router.navigate("/training")}>
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

            <View className="bg-pink-400 rounded-md h-[90px]  flex-col gap-4 pl-3 pt-[12px] pr-4 min-w-[30%]">
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
              Train
            </Text>
            <TouchableOpacity>
              <Text className="text-green-400 font-[500] text-[15px] p-2">
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <View className="gap-2">
            <TouchableOpacity>
              <View className="box-view   bg-gray-800  rounded-xl    border-[0.4px] p-3 ">
                <View className="bg-blue-400 rounded-md gap-3 p-3 ">
                  <View className="flex-row justify-between">
                    <Text className="text-lg font-semibold">
                      Improve Baseline
                    </Text>
                  </View>
                  <Text>Training focusing on being solid on the baseline</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className="box-view   bg-gray-800  rounded-xl    border-[0.4px] p-3">
                <View className="bg-blue-500 rounded-md gap-3 p-3 ">
                  <View className="flex-row justify-between">
                    <Text className="text-lg font-semibold">
                      Improve Net Game
                    </Text>
                  </View>
                  <Text>Training focusing on the upper part of the court</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/*
          <View className="bg-blue-500 rounded-md gap-3 p-3 my-5">
            <View className="flex-row justify-between">
              <Text className="text-lg font-semibold">Forehand and Backhand</Text>
                <Checkbox color={"black"} />
            </View>
            <Text>Make less than 10 net errors</Text>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
