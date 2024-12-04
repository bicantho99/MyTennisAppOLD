import { View, Text, TextInput, Button } from "react-native";
import React from "react";

export default function subLesson() {
  return (
    <View>
      <Text className="text-center mt-5">How many students here today?</Text>
      <TextInput
        placeholder="add coaches here"
        className="p-8 rounded-sm border-pink-300 border-2"
      />
      <Text className="text-center mt-5">How many courts available today?</Text>
      <TextInput
        placeholder="add courts here"
        className="p-8 rounded-sm border-pink-300 border-2 mb-5"
      />
      <Button
        title="Learn More"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
