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
export default function GuestLayout() {
  // const { isSignedIn } = useAuth();

  // if (isSignedIn) {
  //   return <Redirect href="/(root)" />;
  // }
  // return <Redirect href="/(root)" />;

  return (
    <SafeAreaView className="flex-1 bg-[#bae4fd]">
      <View className="flex-1 mx-10 justify-center items-center">
        {/* <View className="mt-36">
          <LottieView
            style={{
              width: 250,
              height: 250,
            }}
            source={require("../assets/images/lottie1.json")}
            autoPlay
            loop
          />
        </View>
        <Text className="font-extrabold text-[35px] mx-9 mt-10  p-3">
          Welcome
        </Text>

        <View className="bg-[#1e294e] rounded-md w-[30%] p-3 shadow-lg mt-5">
          <TouchableOpacity onPress={() => router.push("/(root)")}>
            <Text className="text-textColor ">Get Started</Text>
          </TouchableOpacity>
        </View> */}
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
          <Text>Managing your practice and exploring drills </Text>
          <TouchableOpacity onPress={() => router.push("/(root)")}>
            <Text className="text-center text-textColor p-2 bg-bgColor mt-2 rounded-md">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
