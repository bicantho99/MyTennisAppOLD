import * as Linking from "expo-linking";
import { useOAuth } from "@clerk/clerk-expo";
import React, { useCallback, useMemo, useRef, useState } from "react";

export const useGoogleAuth = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const startGoogleAuth = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL("/(root)", { scheme: "myapp" }),
      });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        console.warn("Further steps, such as MFA, are required.");
      }
    } catch (err) {
      console.error("OAuth Error:", JSON.stringify(err, null, 2));
    }
  };

  return startGoogleAuth;
};
