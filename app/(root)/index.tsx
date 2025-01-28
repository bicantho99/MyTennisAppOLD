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

// import * as WebBrowser from "expo-web-browser";
// import { SignedIn, useOAuth, useUser, useClerk } from "@clerk/clerk-expo";
// import * as Linking from "expo-linking";

// export const useWarmUpBrowser = () => {
//   React.useEffect(() => {
//     void WebBrowser.warmUpAsync();
//     return () => {
//       void WebBrowser.coolDownAsync();
//     };
//   }, []);
// };

// WebBrowser.maybeCompleteAuthSession();

export default function Home() {
  // const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  // useWarmUpBrowser();
  // const { user } = useUser();
  // const { signOut } = useClerk();
  // const handleSignOut = async () => {
  //   try {
  //     await signOut();
  //     Linking.openURL(Linking.createURL("/(root)"));
  //   } catch (err) {
  //     console.error(JSON.stringify(err, null, 2));
  //   }
  // };

  // const handleSignIn = React.useCallback(async () => {
  //   try {
  //     const { createdSessionId, signIn, signUp, setActive } =
  //       await startOAuthFlow({
  //         redirectUrl: Linking.createURL("/(root)", { scheme: "myapp" }),
  //       });

  //     if (createdSessionId) {
  //       setActive!({ session: createdSessionId });
  //     } else {
  //     }
  //   } catch (err) {
  //     console.error(JSON.stringify(err, null, 2));
  //   }
  // }, []);  
  const { challenges, toggleChallenge, loadChallenges } = useWeeklyStore();

  useEffect(() => {
    loadChallenges();
  }, []);
  
  const progress = challenges.filter((c) => c.completed).length / challenges.length;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const scrollViewRef = React.useRef<FlatList>(null);
  const ITEM_SIZE = 90;
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth * 0.8;

  const handleCheckboxChange = (day: number) => {
    toggleChallenge(day);
    setTimeout(() => {
      const nextIndex = day;
      if (nextIndex < challenges.length && scrollViewRef.current) {
        scrollViewRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
      }
    }, 130);
  };
  
  // const handleCheckboxChange = (index: number) => {
  //   const isChecked = completedTasks.includes(index);

  //   if (isChecked) {
  //     // Uncheck the box, no scroll needed
  //     setCompletedTasks(completedTasks.filter((task) => task !== index));
  //   } else {
  //     // Check the box and scroll to the next task
  //     setCompletedTasks((prev) => [...prev, index]);
  //     setTimeout(() => {
  //       const nextIndex = index + 1;
  //       if (index < challenges.length - 1 && scrollViewRef.current) {
  //         // Ensure to scroll to the next item if it's within bounds
  //         scrollViewRef.current.scrollToIndex({
  //           index: nextIndex,
  //           animated: true,
  //         });
  //       }
  //     }, 130);
  //   }
  // };
  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-bgColor">
      <KeyboardAwareScrollView>
      <StatusBar style="light" />
      <View className="mx-6 my-6">
        <View className="Header mb-5 flex-row justify-between">
          <Text className="text-textColor font-semibold text-[25px]">
            Welcome
          </Text>
          {/* {user ? (
            <Text className="text-sky-400 text-xl font-medium" onPress={()=> router.push("/(edit)/profile")}>
              {user.firstName}
            </Text>
          ) : (
            <TouchableOpacity onPress={handleSignIn}>
              <Text className="color-[#16bcfe] text-lg font-medium mt-5 ">
                Log In
              </Text>
            </TouchableOpacity>
          )} */}
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
                width={cardWidth}
                animated={true}
                useNativeDriver={true}
                animationConfig={{ bounciness: 0 }}
                animationType={"timing"}
              />
            </View>
            <View className="h-[90px] flex justify-between ">
              <Animated.FlatList
                data={challenges} // Use the challenges from the store
                keyExtractor={(item) => String(item.day)}
                renderItem={({ item }) => {
                  const isChecked = item.completed; // Check if the challenge is completed
                  return (
                    <Animated.View style={{ width: cardWidth }}>
                      <View className="bg-blue-400 rounded-xl gap-3 p-[15px] mt-[8.3px]">
                        <View className="flex-row justify-between">
                          <Text className="font-semibold opacity-[0.6px]">Day {item.day}</Text>
                          <Checkbox
                            value={isChecked}
                            onValueChange={() => handleCheckboxChange(item.day)}
                            color={isChecked ? "#2563eb" : "#334155"}
                          />
                        </View>
                        <Text className="text-[16px] font-semibold">{item.text}</Text>
                      </View>
                    </Animated.View>
                  );
                }}
              />

              {/* <Animated.FlatList
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
                scrollEventThrottle={10} // Lower values will make scroll events fire more frequently
                decelerationRate={0.2}
                getItemLayout={(data, index) => ({
                  length: ITEM_SIZE,
                  offset: ITEM_SIZE * index,
                  index,
                })}
                initialNumToRender={1} // Renders only 10 items initially
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
              /> */}
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

        <View className="gap-2 mb-2">
          <TouchableOpacity>
            <View className="box-view   bg-slate-900  rounded-xl  border-slate-500  border-[0.4px] p-3 ">
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
            <View className="box-view  bg-slate-900  border-slate-300  rounded-xl  border-[0.4px]  p-3">
              <View className="bg-blue-400 rounded-md gap-3 p-3 ">
                <View className="flex-row justify-between">
                  <Text className="text-lg font-semibold text-slate-900">
                    Improve Net Game
                  </Text>
                  <Text className="text-[14px] font-bold mt-[4px] text-slate-900">
                    Coach Chris
                  </Text>
                </View>

                <Text>Training focusing on the upper part of the court</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
