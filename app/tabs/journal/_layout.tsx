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

      <Stack.Screen name="matchExample" />
      <Stack.Screen name="playerpage" />
      <Stack.Screen name="matchpage" />
      <Stack.Screen name="playerExample" />
      <Stack.Screen
        name="addmatch"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="addplayer"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
