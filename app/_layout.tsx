import { Stack } from "expo-router";
import "../global.css";

import { TrainingDataProvider } from "@/assets/constants/dataContext";

export default function Layout() {
  return (
    <TrainingDataProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="tabs" />
        <Stack.Screen name="trainingPage2" />
      </Stack>
    </TrainingDataProvider>
  );
}
