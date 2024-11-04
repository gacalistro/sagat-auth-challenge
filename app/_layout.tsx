import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import { AuthProvider } from "../contexts/auth-context";
import "../global.css";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          className="flex-1 px-4 android:pb-4"
          style={{
            paddingTop: StatusBar.currentHeight,
          }}
        >
          <StatusBar barStyle={"dark-content"} />

          <AuthProvider>
            <Slot />
          </AuthProvider>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
