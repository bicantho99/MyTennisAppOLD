import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

export default function Groundie() {
  const tasks = [
    "Hit with less than 5 net errors",
    "Hit with less Backhand errors",
    "Hit with less Forehand errors",
    "Hit with consistent topspin",
    "Hit with improved footwork",
  ];

  //React state to manage check boxes
  const [checkedItems, setCheckedItems] = useState (
    Array(tasks.length).fill(false)
  );

  //function for toggling box
  const toggleBox = (index: number) => {
    const updateCheckedItems = [...checkedItems];
    updateCheckedItems[index] = !updateCheckedItems[index];
    setCheckedItems(updateCheckedItems);
  };

  return (
    <SafeAreaView className="bg-bgColor flex-1 flex-col">
      <View className="mx-10 gap-10">
        <Text className="text-center text-textColor text-3xl">Groundies</Text>
          <View className="bg-boxColor p-5 gap-5 rounded-lg shadow-sm">
            {tasks.map((task, index) => (
              <View key={index} className="flex-row gap-5">
                <Checkbox
                  value = {checkedItems[index]}
                  onValueChange={() => toggleBox(index)}
                  color={checkedItems[index] ? "#34eb83" : "white"}
                  style={{
                    borderWidth: 1,
                    borderColor: "#34eb83",
                    borderRadius : 3,
                    backgroundColor: checkedItems[index] ? "#34eb83" : "white",
                  }}
                
                />
                <Text className="text-textColor">{task}</Text>
              </View>
            ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
