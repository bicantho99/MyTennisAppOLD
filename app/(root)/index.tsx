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
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Progress from "react-native-progress";
import Checkbox from "expo-checkbox";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useWeeklyStore } from "../../tennis-backend/useWeeklyStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function Home() {
  type Challenge = {
    day: number;
    text: string;
    completed: boolean;
  };
  const { challenges, toggleChallenge, loadChallenges } = useWeeklyStore();

  const [completedTasks, setCompletedTasks] = React.useState<number[]>([]);

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const scrollViewRef = React.useRef<FlatList>(null);
  const ITEM_SIZE = 90;
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth * 0.8;
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const loadProgress = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem("completedTasks");
        if (savedTasks) {
          const parsedTasks = JSON.parse(savedTasks);
          setCompletedTasks(parsedTasks);
        }
      } catch (error) {
        console.error("Error loading progress:", error);
      }
    };

    loadProgress();
    loadChallenges();
  }, []);

  useEffect(() => {
    if (challenges.length > 0) {
      setProgress(completedTasks.length / challenges.length);
    }
  }, [completedTasks, challenges]);

  useEffect(() => {
    const saveProgress = async () => {
      try {
        await AsyncStorage.setItem(
          "completedTasks",
          JSON.stringify(completedTasks)
        );
      } catch (error) {
        console.error("Error saving progress:", error);
      }
    };

    saveProgress();
  }, [completedTasks]);

  const handleCheckboxChange = (index: number) => {
    setCompletedTasks((prev) => {
      const isChecked = prev.includes(index);
      const updatedTasks = isChecked
        ? prev.filter((task) => task !== index)
        : [...prev, index];

      setTimeout(() => {
        if (!isChecked) {
          const nextIndex = index + 1;
          if (nextIndex < challenges.length && scrollViewRef.current) {
            scrollViewRef.current.scrollToIndex({
              index: nextIndex,
              animated: true,
            });
          }
        }
      }, 130);

      return updatedTasks;
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-bgColor">
      <StatusBar style="light" />
      <View className="mx-6 my-6">
        <View className="Header mb-5 flex-row justify-between">
          <Text className="text-textColor font-semibold text-[25px]">
            My Tennis App
          </Text>
        </View>

        <View className="box-view  bg-slate-800 pl-5  pr-3 pt-5  border-blue-800 rounded-xl gap-[5px]   border-[0.4px]  h-[190px] shadow-sm shadow-blue-400">
          <View className="text-view gap-2">
            <Text className="text-blue-300 font-bold text-[21px] mb-4">
              Weekly's Challenges
            </Text>
            <View className="mb-1">
              <Progress.Bar
                progress={progress}
                borderColor={""}
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
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                  { useNativeDriver: true }
                )}
                data={challenges}
                keyExtractor={(item) => String(item.day)}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: 2 }}
                scrollEventThrottle={10}
                decelerationRate={0.2}
                getItemLayout={(data, index) => ({
                  length: ITEM_SIZE,
                  offset: ITEM_SIZE * index,
                  index,
                })}
                initialNumToRender={1}
                maxToRenderPerBatch={1}
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
                      className="w-[320px]"
                      style={{ transform: [{ scale }], opacity }}
                    >
                      <View
                        className="bg-blue-400 rounded-xl gap-3 p-[15px] mt-[8.3px] "
                        style={{}}
                      >
                        <View className="flex-row justify-between ">
                          <Text className="font-semibold opacity-[0.6px]">
                            Day {item.day}
                          </Text>
                          <Checkbox
                            value={isChecked}
                            onValueChange={() => handleCheckboxChange(index)}
                            color={isChecked ? "#2563eb" : "#334155"}
                          />
                        </View>
                        <Text className="text-[16px] font-semibold">
                          Approach the net 10 times
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
            Explore Features
          </Text>
        </View>

        <View className="flex-wrap flex-row gap-4">
          <TouchableOpacity
            className="bg-yellow-100 rounded-md h-[90px]  flex-col gap-4 pl-3  pt-[12px] flex-1 "
            onPress={() => router.push("/prep")}
          >
            <Ionicons
              name="journal"
              size={30}
              color="rgba(0, 0, 0, 1)"
              style={{ opacity: 0.6 }}
            />
            <Text className="text-slate-800 font-bold text-[16px]">
              Journal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-teal-300 rounded-md h-[90px]  flex-col gap-4 pl-3 pt-[12px]  flex-1"
            onPress={() => router.push("/program")}
          >
            <Ionicons
              name="tennisball"
              size={30}
              color="rgba(0, 0, 0, 0.9)"
              style={{ opacity: 0.6 }}
            />
            <Text className="text-slate-800 font-bold text-[16px]">Train</Text>
          </TouchableOpacity>
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

        <View className="gap-2 mb-2">
          <TouchableOpacity onPress={() => router.push("/program")}>
            <View className="box-view   bg-slate-800  rounded-xl  border-slate-700  border-[0.4px] p-3 ">
              <View className="bg-blue-400 rounded-md gap-3 p-3 ">
                <View className="flex-row justify-between">
                  <Text className="text-lg font-semibold ">
                    Single Strategies
                  </Text>
                  <Text className="text-[14px] font-bold mt-[4px] text-slate-800">
                    Coach Cecile
                  </Text>
                </View>
                <Text>Training focusing on solid single strategies</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/program")}>
            <View className="box-view  bg-slate-800  border-slate-700  rounded-xl  border-[0.4px]  p-3">
              <View className="bg-blue-400 rounded-md gap-3 p-3 ">
                <View className="flex-row justify-between">
                  <Text className="text-lg font-semibold text-slate-900">
                    Double Wizard-ry
                  </Text>
                  <Text className="text-[14px] font-bold mt-[4px] text-slate-900">
                    Coach Jakub
                  </Text>
                </View>

                <Text>Training focusing on solid double strategies</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
