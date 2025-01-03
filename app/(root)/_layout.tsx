import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false,  }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarStyle: { backgroundColor: "#10172A" },
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
          tabBarLabelStyle: {
            marginTop: 8, // Adjusts space between icon and title

          },
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarStyle: { backgroundColor: "#10172A" },
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
          tabBarLabelStyle: {
            marginTop: 8, // Adjusts space between icon and title
          },
        }}
      />
      
      <Tabs.Screen
        name="map"
        options={{
          tabBarStyle: { backgroundColor: "#10172A" },
          title: "Map",
          tabBarIcon: ({ color }) => (
            <Entypo name="rocket" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            marginTop: 8,
          },
        }}
      />
    </Tabs>
  );
}
