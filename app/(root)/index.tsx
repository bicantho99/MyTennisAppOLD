import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Modal,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import React, { useCallback, useMemo, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { SignedIn, useClerk, useUser, useOAuth } from "@clerk/clerk-expo";
import Feather from "@expo/vector-icons/Feather";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import AntDesign from "@expo/vector-icons/AntDesign";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function HomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);

  const days = [
    { day: 16, label: "Thur" },
    { day: 17, label: "Fri" },
    { day: 18, label: "Sat" },
    { day: 19, label: "Sun" },
    { day: 20, label: "Mon" },
    { day: 21, label: "Tue" },
  ];
  useWarmUpBrowser();
  const { user } = useUser();
  const { signOut } = useClerk();
  const handleSignOut = async () => {
    try {
      await signOut();
      Linking.openURL(Linking.createURL("/(root)"));
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/(root)", { scheme: "myapp" }),
        });

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp returned from startOAuthFlow
        // for next steps, such as MFA
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  const [testDATA, setTestDATA] = useState([
    "Mini Tennis",
    "25 Balls middle/cross FH/BH",
  ]);
  const [newWorkout, setNewWorkout] = useState("");
  const handleAddWorkout = () => {
    if (newWorkout.trim()) {
      setTestDATA([...testDATA, newWorkout]);
      setNewWorkout(""); // Clear the input field
    }
  };
  const handleRemove = (RIndex: number): void => {
    setTestDATA(testDATA.filter((_, index) => index !== RIndex));
  };

  const [editMode, setEditMode] = useState({
    warmup: false,
    maindrill: false,
    fitness: false,
  });
  type Section = "warmup" | "maindrill" | "fitness";
  const toggleEdit = (section: Section): void => {
    setEditMode((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <SafeAreaView className="flex-1 bg-bgColor">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <View className="flex-col gap-8 mx-10 ">
            <StatusBar style="light" />
            <View className="flex-row justify-between">
              {user ? (
                <Text className="color-textColor text-lg font-medium mt-5">
                  <Text style={{ color: "#16bcfe" }}>Welcome</Text>,{" "}
                  {user.firstName}!
                </Text>
              ) : (
                <TouchableOpacity onPress={onPress}>
                  <Text className="color-[#16bcfe] text-lg font-medium mt-5 ">
                    Log In
                  </Text>
                </TouchableOpacity>
              )}
              <SignedIn>
                <TouchableOpacity onPress={handleSignOut}>
                  <Text className="text-textColor mt-[20px]">Sign Out</Text>
                </TouchableOpacity>
              </SignedIn>
            </View>
            <View className="flex-row gap-5">
              {days.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveIndex(index)}
                  className={`w-11 flex items-center p-1 h-16 justify-center rounded-md gap-[3px] ${
                    activeIndex === index ? "bg-[#16bcfe]" : "bg-white"
                  }`}
                >
                  <Text>{item.day}</Text>
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View className="flex-col gap-6">
              <View className="activity-group flex-row  justify-between">
                <Text className="text-[#3683f9] font-semibold text-lg">
                  Today's Activity
                </Text>
              </View>
              <View className="drill-column">
                <View className="headerRow flex-row justify-between items-center w-full">
                  <View className="flex-row gap-4 items-center">
                    <View className="bg-gray-600 p-[4px] px-[9px] rounded-md w-8 h-8 justify-center items-center">
                      <Text className="text-textColor">1</Text>
                    </View>
                    <Text className="text-textColor font-medium text-[15px] ">
                      Warm Up
                    </Text>
                  </View>
                  <Feather
                    name="edit"
                    size={15}
                    color="white"
                    className="mb-2"
                  />
                </View>
                <View className="flex-col mt-2 gap-3">
                  <Text className="text-textColor ml-12  font-extralight">
                    Mini tennis
                  </Text>
                  <Text className="text-textColor ml-12  font-extralight">
                    25 balls middle/cross-court FH/BH
                  </Text>
                </View>
              </View>
              <View className="drill-column">
                <View className="flex-row gap-4">
                  <View className="bg-gray-600 p-[4px] px-[9px] rounded-md w-8 h-8 justify-center items-center">
                    <Text className="text-textColor">2</Text>
                  </View>
                  <Text className="text-textColor pt-[2px] font-medium text-[15px] mt-1">
                    Main Drills
                  </Text>
                </View>
                <View>
                  <Text className="text-textColor ml-12 mt-3.5 font-extralight">
                    25 balls{" "}
                    <Text className="text-white font-light">
                      middle/cross-court{" "}
                    </Text>
                    FH/BH
                  </Text>
                </View>
              </View>
              <View className="drill-column">
                <View className="headerRow flex-row justify-between items-center w-full">
                  <View className="flex-row gap-4 items-center">
                    <View className="bg-gray-600 p-[r4px] px-[9px] rounded-md w-8 h-8 justify-center items-center">
                      <Text className="text-textColor">1</Text>
                    </View>
                    <Text className="text-textColor font-medium text-[15px] ">
                      Fitness
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => toggleEdit("fitness")}>
                    <Feather
                      name="edit"
                      size={15}
                      color="white"
                      className="mb-2"
                    />
                  </TouchableOpacity>
                </View>
                <View className="fitnessContent">
                  {testDATA.map((item, index) => (
                    <View className="flex-row justify-between" key={index}>
                      <Text className="text-textColor ml-12 mt-3.5 font-extralight">
                        {item}
                      </Text>
                      {editMode.fitness ? (
                        <TouchableOpacity onPress={() => handleRemove(index)}>
                          <AntDesign name="minus" size={20} color="gray" />
                        </TouchableOpacity>
                      ) : (
                        ""
                      )}
                    </View>
                  ))}

                  {editMode.fitness ? (
                    <View className="AddingSection flex-row mt-5 justify-between">
                      <TextInput
                        placeholder="Add workout"
                        value={newWorkout}
                        onChangeText={setNewWorkout}
                        // keyboardType="default"
                        className="border w-[65%] border-white ml-12 p-[5px] text-textColor rounded-md"
                        placeholderTextColor={"white"}
                      />
                      <TouchableOpacity onPress={handleAddWorkout}>
                        <Text className="text-textColor mt-1 font-medium">
                          Add
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    ""
                  )}
                </View>
              </View>
              {/* end of first main */}
              <View className="activity-group flex-row  justify-between">
                <Text className="text-[#3683f9] font-semibold text-lg">
                  Add Practice
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
