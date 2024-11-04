import { Redirect, router } from "expo-router";
import { Image, View } from "react-native";
import { Button } from "../components/button";
import { useAuthContext } from "../contexts/auth-context";

export default function App() {
  const { token } = useAuthContext();

  if (token) {
    return <Redirect href="/home" />;
  }

  return (
    <>
      <View className="flex-1" />

      <Image
        source={require("../assets/logo.png")}
        resizeMode="contain"
        className="w-64 self-center"
      />

      <View className="flex-1 self-stretch justify-end gap-3 p-2">
        <Button title="Entrar" onPress={() => router.push("/login")} />

        <Button
          title="Cadastrar"
          variant="neutral"
          onPress={() => router.push("/signup")}
        />
      </View>
    </>
  );
}
