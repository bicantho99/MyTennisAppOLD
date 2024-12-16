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
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { SignedIn, useClerk, useUser, useOAuth } from "@clerk/clerk-expo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
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
  return (
    <View className="flex-1 bg-bgColor ">
      <SafeAreaView className="flex-col gap-8 mx-10 ">
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
            // <Link href="/(auth)/sign-up">Sign In</Link>
          )}
          <SignedIn>
            <TouchableOpacity onPress={handleSignOut}>
              <Text className="text-textColor mt-[20px]">Sign Out</Text>
            </TouchableOpacity>
          </SignedIn>
          {/* <TouchableOpacity>
            <FontAwesome
              name="user-circle-o"
              size={24}
              color="gray"
              className="mt-5"
            />
          </TouchableOpacity> */}
        </View>
        <View className="bg-boxColor p-5 gap-5 rounded-lg shadow-sm">
          <Link
            href={"/groundies/groundie"}
            className="text-center text-3xl font-semibold text-textColor"
          >
            Ground Strokes
          </Link>
          <ProgressBar progress={0.5} color={MD3Colors.error50} />
        </View>
        <View className="bg-boxColor p-5 gap-5 rounded-lg">
          <Text className="text-center text-3xl font-semibold text-textColor">
            Serves
          </Text>
          <ProgressBar progress={0.8} color={MD3Colors.error50} />
        </View>
        <View className="bg-boxColor p-5 gap-5 rounded-lg">
          <Text className="text-center text-3xl font-semibold text-textColor">
            Patterns
          </Text>
          <ProgressBar progress={0.2} color={MD3Colors.error50} />
        </View>
        <View className="bg-boxColor p-5 gap-5 rounded-lg ">
          <Text className="text-center text-3xl font-semibold text-textColor">
            Footworks
          </Text>
          <ProgressBar progress={0.2} color={MD3Colors.error50} />
        </View>
        <View className="bg-boxColor p-5 gap-5 rounded-lg border border-borderColor">
          <Text className="text-center text-3xl font-semibold text-textColor">
            Insane Mode
          </Text>
          <ProgressBar progress={0.2} color={MD3Colors.error50} />
        </View>
      </SafeAreaView>
    </View>
  );
}
