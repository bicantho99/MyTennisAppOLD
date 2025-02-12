import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Foundation from "@expo/vector-icons/Foundation";
import Animated from "react-native-reanimated";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        lazy: true,
        tabBarStyle: {
          backgroundColor: "#10172A",
          borderTopWidth: 0,
          paddingBottom: 0,
          paddingTop: 0,
          height: 75,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="goal"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={24} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="program"
        options={{
          title: "Train",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="sports-tennis" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          title: "Journal",
          tabBarIcon: ({ color }) => (
            <Foundation name="clipboard-notes" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          tabBarIcon: ({ color }) => (
            <Foundation name="clipboard-notes" size={22} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        // Name of the route to hide.
        name="goal"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      /> */}
    </Tabs>
  );
}
