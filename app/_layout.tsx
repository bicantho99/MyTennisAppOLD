import { Stack } from "expo-router";
import "../global.css";
import { tokenCache } from "@/cache";

import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";

export default function Layout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(root)" />
          <Stack.Screen
            name="(auth)/sign-up"
            options={{
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="(sub)/warmup"
            options={{
              presentation: "modal",
            }}
          />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
