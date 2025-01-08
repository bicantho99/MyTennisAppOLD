import { Stack } from "expo-router";
import "../global.css";
import { tokenCache } from "@/cache";

import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { TrainingDataProvider } from "@/assets/constants/dataContext";

export default function Layout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <TrainingDataProvider>
        <ClerkLoaded>
          <Stack
            screenOptions={{
              headerShown: false,
              headerShadowVisible: false,
            }}
          >
            <Stack.Screen name="(root)" />
            <Stack.Screen
              name="(edit)/addprogram"
              options={{
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="(edit)/training-page"
              options={{
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="(edit)/program-page"
            />
          </Stack>
        </ClerkLoaded>
      </TrainingDataProvider>
    </ClerkProvider>
  );
}
