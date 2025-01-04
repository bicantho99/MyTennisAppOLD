import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Foundation from "@expo/vector-icons/Foundation";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#10172A",
          borderTopWidth: 0,
          paddingBottom: 0, // Fine-tune bottom padding
          paddingTop: 0, // Fine-tune top padding
          height: 75, // Enforce smaller height
        },
        tabBarLabelStyle: {
          fontSize: 12, // Optional: Reduce label font size to fit smaller tab bar
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="training"
        options={{
          title: "Training",
          tabBarIcon: ({ color }) => (
            <Foundation name="clipboard-notes" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color }) => (
            <Entypo name="rocket" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
