import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <SafeAreaView className="bg-bgColor flex-1 flex-col">
      <View className="mx-10 gap-10">
        <Text className="text-center text-textColor text-3xl">Profile & Achievements</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

