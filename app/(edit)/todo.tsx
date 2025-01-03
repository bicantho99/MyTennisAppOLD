import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Todo() {
  type TabsItem = {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
  };

  const data: TabsItem[] = [
    { icon: "tennisball-sharp", label: "Groundstrokes" },
    { icon: "trophy", label: "Serve" },
    { icon: "fitness", label: "Fitness" },
  ];

  const [selected, setSelected] = useState(0);
  const activeBackgroundColor = "#b5f36b";
  const inactiveBackgroundColor = "#3b4451";
  const activeColor = "black";
  const inactiveColor = "white";

  return (
    <View className="flex-1 bg-bgColor gap-4">
      <View className=" flex-row pt-5 pl-2">
        {data.map((item, index) => {
          const isSelected = selected === index;
          return (
            <View key={index}>
              <Pressable
                onPress={() => setSelected(index)}
                className="p-3 px-4 ml-2 flex-row gap-2  items-center justify-center rounded-lg transition ease-in duration-500"
                style={{
                  backgroundColor: isSelected
                    ? activeBackgroundColor
                    : inactiveBackgroundColor,
                }}
              >
                <Ionicons
                  name={item.icon}
                  size={13}
                  color={isSelected ? "black" : "white"}
                />

                <>
                  <Text
                    className="font-medium"
                    style={{
                      color: isSelected ? activeColor : inactiveColor,
                    }}
                  >
                    {item.label}
                  </Text>
                </>
              </Pressable>
            </View>
          );
        })}
      </View>
      <Text className="text-center text-textColor">Content</Text>
    </View>
  );
}
