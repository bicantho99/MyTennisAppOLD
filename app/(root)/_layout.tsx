import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#10172A",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          tabBarLabelStyle: {
            marginTop: 8, // Adjusts space between icon and title
          },
          tabBarStyle: {
            backgroundColor: "#10172A",
            borderTopWidth: 0, // Set border width
            borderTopColor: "red", // Set border color (e.g., red)
          },
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
          tabBarLabelStyle: {
            marginTop: 8, // Adjusts space between icon and title
          },
          tabBarStyle: {
            backgroundColor: "#10172A",
            borderTopWidth: 0,
            borderTopColor: "green", // Change border color
          },
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color }) => (
            <Entypo name="rocket" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            marginTop: 8,
          },
          tabBarStyle: {
            backgroundColor: "#10172A",
            borderTopWidth: 0,
            borderTopColor: "blue", // Change border color
          },
        }}
      />
    </Tabs>
  );
}
