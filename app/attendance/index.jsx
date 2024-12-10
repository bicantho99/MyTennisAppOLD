import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
const lessonlist = () => {
  return (
    <SafeAreaView className="flex-1 bg-bgColor">
      <StatusBar style="light" />
      <View className="items-center mt-5  mx-10 justify-between flex-row">
        <Text className="color-textColor text-4xl font-semibold">
          My Attendance
        </Text>
        <AntDesign name="pluscircleo" size={24} color="white" />
      </View>
      <View className="mt-5 mx-10 flex-column gap-4 border-slate-100 border p-5">
        <View className="">
          <Text className="text-textColor text-center">Class: Green Dot</Text>
        </View>
      </View>
      <View>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Enter Date"
          keyboardType="numeric"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Enter Student"
          keyboardType="numeric"
          placeholderTextColor="black"
        />
        <Button title="Submit Attendance" />{" "}
      </View>
    </SafeAreaView>
  );
};

export default lessonlist;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    borderColor: "#ccc",
    aontSize: 16,
  },
});
