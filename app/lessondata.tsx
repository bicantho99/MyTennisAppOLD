import { View, Text } from "react-native";
import React from "react";

export default function Data({ length }: { length: number }) {
  return (
    <View>
      <Text>Number of Lesson: {length}</Text>
      <Text>Number of different students:</Text>
      <Text>Number of Hour worked: </Text>
      <Text>Number of Hour worked: </Text>
    </View>
  );
}
