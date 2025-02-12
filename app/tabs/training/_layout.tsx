import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="examplePage" />
      <Stack.Screen name="trainingPage" />
      <Stack.Screen name="program-page" />
      <Stack.Screen
        name="addprogram"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
