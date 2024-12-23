import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";

const Profile = () => {
  return (
    <SafeAreaView className="bg-bgColor flex-1 flex-col gap-8">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // style={{ flex: 1 }}
      >
        <ScrollView>
          <View className="mx-10 gap-6">
            <Text className="text-start text-textColor text-3xl font-medium p-2">
              Fitness
            </Text>
            <View className="slide-group flex-row gap-2">
              <View className="slide bg-pink-500 w-[33%] h-[120px] rounded-[18px]">
                <Text className="text-center pt-2">Play Patterns</Text>
              </View>
              <View className="slide bg-white w-[33%] h-[120px] rounded-[18px]">
                <Text className="text-center pt-2">Backhand</Text>
              </View>
              <View className="slide bg-blue-400 w-[33%] h-[120px] rounded-[18px]">
                <Text className="text-center pt-2">Serve</Text>
              </View>
            </View>
          </View>
          <View className="main_content">
            <View className="text-group border-green-500 border">
              <Text className="text-textColor">
                Slice then look for a Forehand
              </Text>
              <Text className="text-textColor">
                The idea is to hit a good slice then opponent pick it up and the
                return ball in your strike range
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Profile;
