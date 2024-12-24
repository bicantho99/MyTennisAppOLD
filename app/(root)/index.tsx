import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { SignedIn, useOAuth, useUser, useClerk } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

const Profile = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  useWarmUpBrowser();
  const [activeIndex, setActiveIndex] = useState(0);
  const [toggle, setToggle] = useState(true);

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
  const days = [
    { day: 16, label: "Thur" },
    { day: 17, label: "Fri" },
    { day: 18, label: "Sat" },
    { day: 19, label: "Sun" },
    { day: 20, label: "Mon" },
    { day: 21, label: "Tue" },
  ];

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/(root)", { scheme: "myapp" }),
        });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  return (
    <SafeAreaView className="bg-bgColor flex-1 flex-col gap-8 ">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <View className="mx-10 gap-6 pb-9">
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
            <View className="mt-4 flex-row gap-5">
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
            <View className="flex-row justify-between">
              <Text className="text-start text-textColor text-3xl font-medium p-2">
                Training
              </Text>
              <Link href="/(sub)/warmup" className="text-textColor" asChild>
                <TouchableOpacity>
                  <Text className="text-textColor mt-4">See More </Text>
                </TouchableOpacity>
              </Link>
            </View>
            {toggle ? (
              <View className="gap-6">
                <View className="practice-box bg-[#1d293b] rounded-lg gap-3 pt-2 ">
                  <View className="p-3 header border-b-2 border-cyan-400 flex-row  justify-between">
                    <Text className=" text-textColor font-bold ml-2">
                      GroundStroke
                    </Text>
                    <Text className="text-textColor mr-3">35 Minutes</Text>
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
              </View>
            ) : (
              <View className="NO justify-center flex items-center gap-2">
                <Link href="/(sub)/warmup" className="text-textColor" asChild>
                  <TouchableOpacity>
                    <FontAwesome6
                      name="notes-medical"
                      size={26}
                      color="white"
                    />
                  </TouchableOpacity>
                </Link>

                <Text className="text-textColor mt-3">No trainings</Text>
                <Text className="text-textColor">
                  Start adding training to see your list
                </Text>
              </View>
            )}
            <Text className="text-start text-textColor text-3xl font-medium p-2">
              Overall Stat
            </Text>
            <View>
              {/* <View className="flex justify-center items-center w-full h-full"> */}
                <Image
                  source={require("../../assets/images/stat.png")}
                  className="max-w-full max-h-full object-contain"
                />
              {/* </View> */}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Profile;
