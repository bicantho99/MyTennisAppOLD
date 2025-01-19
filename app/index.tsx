import { Link, Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import {
  Button,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import LottieView from "lottie-react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Linking } from "react-native";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function GuestLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 600));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View
      className="flex-1  justify-center items-center bg-[#bae4fd]"
      onLayout={onLayoutRootView}
    >
      <LottieView
        style={{
          width: 250,
          height: 250,
        }}
        source={require("../assets/images/lottie1.json")}
        autoPlay
        loop
      />
      <View className="gap-4">
        <Text className="text-2xl font-bold">Welcome to My Tennis App</Text>
        <Text>Managing your trainings and exploring drills</Text>
        <TouchableOpacity onPress={() => router.push("/(root)")}>
          <Text className="text-center text-textColor p-2 bg-bgColor mt-2 rounded-md">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
