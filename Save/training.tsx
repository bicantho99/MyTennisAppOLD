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
  FlatList,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ProgressBar, MD3Colors, Checkbox } from "react-native-paper";
import { SignedIn, useClerk, useUser, useOAuth } from "@clerk/clerk-expo";
import Feather from "@expo/vector-icons/Feather";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

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
            {/* <View className="HEADER_SECTION flex-row justify-between">
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
            </View> */}

            <Text className="text-textColor font-extrabold text-[25px] mt-7">
              Discover Training
            </Text>
            <View className="flex-row gap-5 justify-between ">
              <View className="flex-col w-1/2 gap-3">
                <View className="bg-blue-300   rounded-md">
                  <Text className=" p-4 font-medium">Forehand</Text>
                </View>
                <View className="bg-blue-300  rounded-md ">
                  <Text className=" p-4 font-medium">Backhand</Text>
                </View>
              </View>
              <View className="flex-col w-1/2 gap-3">
                <View className="bg-blue-300  rounded-md ">
                  <Text className="p-4 font-medium">Serve</Text>
                </View>
                <View className="bg-blue-300 rounded-md flex-row justify-between">
                  <Text className="p-4 font-medium text-[14px]">Fitness</Text>
                  {/* <AntDesign
                    name="rightcircle"
                    size={19}
                    color="black"
                    className="p-4"
                  /> */}
                </View>
              </View>
            </View>
            <Text className="text-textColor font-extrabold text-[25px] ">
              Today's Training
            </Text>
            <View className="Edit_Group gap-5">
              {/* <Text className="text-textColor  mb-5">
                Configure your practice
              </Text> */}
              <View className="practice-box bg-[#1d293b] rounded-lg gap-3 pt-2 ">
                <View className="p-3 header border-b-2 border-cyan-400 flex-row justify-between">
                  <Text className=" text-textColor font-bold ml-2">
                    Fitness
                  </Text>
                  <Text className="text-textColor mr-3">Edit</Text>
                </View>
                <View className="p-3 flex-col gap-1">
                  <Text className="text-textColor">Mini tennis warm up</Text>
                  <Text className="text-textColor">
                    Forehand cross angle Deuce/Ads
                  </Text>
                  <Text className="text-textColor">Forehand Drop Shot</Text>
                  <Text className="text-textColor">Forehand winner</Text>
                </View>
              </View>
              <View className="practice-box bg-[#1d293b] rounded-lg gap-3 pt-2 ">
                <View className="p-3 header border-b-2 border-cyan-400 flex-row justify-between">
                  <Text className=" text-textColor font-bold ml-2">
                    GroundStrokes
                  </Text>
                  <Text className="text-textColor mr-3">Edit</Text>
                </View>
                <View className="p-3 flex-col gap-1">
                  <Text className="text-textColor">Mini tennis warm up</Text>
                  <Text className="text-textColor">
                    Forehand cross angle Deuce/Ads
                  </Text>
                  <Text className="text-textColor">Forehand Drop Shot</Text>
                  <Text className="text-textColor">Forehand winner</Text>
                  <Text className="text-textColor">Forehand down the line</Text>
                </View>
              </View>
            </View>
            {/* <View className="practice-box bg-[#1d293b] rounded-lg gap-3 pt-2 ">
              <View className="p-3 header border-b-2 border-cyan-400 flex-row justify-between">
                <Text className=" text-textColor font-bold ml-2">
                  Main Drills
                </Text>
                <Text className="text-textColor mr-3">Edit</Text>
              </View>
              <View className="p-3 flex-col gap-1"></View>
            </View>
            <View className="practice-box bg-[#1d293b] rounded-lg gap-3 pt-2 ">
              <View className="p-3 header border-b-2 border-cyan-400 flex-row justify-between">
                <Text className=" text-textColor font-bold ml-2">Fitness</Text>
                <Text className="text-textColor mr-3">Edit</Text>
              </View>
              <View className="p-3 flex-row gap-1">
                <Text className="text-pink-400">1.</Text>
                <Text className="text-textColor"> Mini Tennis</Text>
              </View>
            </View> */}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
