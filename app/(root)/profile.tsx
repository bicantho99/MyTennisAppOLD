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
              Plays
            </Text>
            <View className="slide-group flex-row gap-2">
              <View className="slide bg-white w-[33%] h-[120px] rounded-[18px]">
                <Text className="text-center pt-2">Forehand</Text>
              </View>
              <View className="slide bg-white w-[33%] h-[120px] rounded-[18px]">
                <Text className="text-center pt-2">Backhand</Text>
              </View>
              <View className="slide bg-white w-[33%] h-[120px] rounded-[18px]">
                <Text className="text-center pt-2">Serve</Text>
              </View>
            </View>
          </View>

          <View className="secondsection mx-10">
            <Text className="text-textColor">Massive angler</Text>
            <Text className="text-textColor">The consistent</Text>
            <Text className="text-textColor">Forehand Net Rules</Text>
            <Text className="text-textColor">Heavy rallying without net</Text>
          </View>
          <View className="secondsection mx-10">
            <Text className="text-textColor">Massive angler</Text>
            <Text className="text-textColor">The consistent</Text>
            <Text className="text-textColor">Forehand Net Rules</Text>
            <Text className="text-textColor">Heavy rallying without net</Text>
          </View>
          <View className="secondsection mx-10">
            <Text className="text-textColor">Massive angler</Text>
            <Text className="text-textColor">The consistent</Text>
            <Text className="text-textColor">Forehand Net Rules</Text>
            <Text className="text-textColor">Heavy rallying without net</Text>
          </View>
          <View className="secondsection mx-10">
            <Text className="text-textColor">Massive angler</Text>
            <Text className="text-textColor">The consistent</Text>
          </View>
          <View className="secondsection mx-10">
            <Text className="text-textColor">Massive angler</Text>
            <Text className="text-textColor">The consistent</Text>
          </View>
          <View className="secondsection mx-10">
            <Text className="text-textColor">Massive angler</Text>
            <Text className="text-textColor">The consistent</Text>
          </View>
          <View className="secondsection mx-10">
            <Text className="text-textColor">Massive angler</Text>
            <Text className="text-textColor">The consistent</Text>
          </View>
          <TextInput
            placeholder="hey"
            placeholderTextColor="white"
            style={{
              marginBottom: 20,
              padding: 10,
              backgroundColor: "#333",
              color: "#fff",
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Profile;
