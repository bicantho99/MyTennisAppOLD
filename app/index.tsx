import { Link, Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { Button, View, Text, Pressable, TouchableOpacity } from "react-native";
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
    <View className="flex-1 bg-[#bae4fd] flex-col  items-center">
      <View className="mt-36">
        <LottieView
          style={{
            width: 330,
            height: 330,
          }}
          source={require("../assets/images/lottie1.json")}
          autoPlay
          loop
        />
      </View>
      <Text className="font-extrabold text-[35px] mx-9 mt-10 text-center p-3">
        Just Another Tennis App
      </Text>

      <View className="bg-[#1e294e] rounded-full scale-125 p-3 flex items-center justify-center shadow-lg mt-12">
        <TouchableOpacity onPress={() => router.push("/(root)")}>
          <AntDesign name="arrowright" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
