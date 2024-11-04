import { Redirect, Slot } from "expo-router";
import { Image, View } from "react-native";
import { useAuthContext } from "../../contexts/auth-context";

export default function AuthLayout() {
  const { token } = useAuthContext();

  if (token) {
    return <Redirect href="/home" />;
  }

  return (
    <>
      <Image
        source={require("../../assets/logo.png")}
        resizeMode="contain"
        className="w-40 h-7 self-center"
      />

      <View className="flex-1 justify-center gap-3">
        <Slot />
      </View>
    </>
  );
}
