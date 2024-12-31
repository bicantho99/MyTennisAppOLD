import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, {
  FadeInRight,
  LinearTransition,
} from "react-native-reanimated";
import { MotiView } from "moti";
export default function Drills() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <SafeAreaView className="flex-1 bg-[#10172a]">
      <Tabs
        data={[
          { icon: "tennisball-sharp", label: "Groundstrokes" },
          { icon: "trophy", label: "Serve" },
          { icon: "fitness", label: "Fitness" },
        ]}
        onChange={(index) => setSelectedIndex(index)}
        selectedIndex={selectedIndex}
      />
  </SafeAreaView>
  );
}

type TabsItem = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
};

type Tabsprops = {
  data: TabsItem[];
  selectedIndex: number;
  onChange: (index: number) => void;
  activeColor: string;
  inactiveColor: string;
  activeBackgroundColor: string;
  inactiveBackgroundColor: string;
};

function Tabs({
  data,
  selectedIndex,
  onChange,
  activeColor = "black",
  inactiveColor = "black",
  activeBackgroundColor = "#b5f36b",
  inactiveBackgroundColor = "#999",
}: Tabsprops) {
  return (
    <View className="flex-row mt-6 ml-2 gap-2">
      {data.map((item, index) => {
        const isSelected = selectedIndex === index;
        return (
          <View
            key={index}
          >
            <Pressable
              onPress={() => onChange(index)}
              className="p-3 px-4 ml-2 flex-row gap-2  items-center justify-center rounded-lg transition ease-in duration-500"
              style={{
                backgroundColor: isSelected
                  ? activeBackgroundColor
                  : inactiveBackgroundColor,
              }}
            >
              <Ionicons name={item.icon} size={13} color="black" />

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
  );
}
