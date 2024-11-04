import { Pressable, Text, View } from "react-native";
import { Button } from "../../components/button";
import { useAuthContext } from "../../contexts/auth-context";
import { isAxiosError } from "axios";
import { api } from "../../lib/axios";

export default function Home() {
  const { logout, token } = useAuthContext();

  const accessPrivateRoute = async () => {
    try {
      const response = await api.get("/users/infos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(response.data.message);
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data.error);
        logout();
      }
    }
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-semibold text-lg mb-6">Bem-vindo!</Text>
      <Button title="Acessar rota privada" onPress={accessPrivateRoute} />

      <Pressable className="mt-6" onPress={logout}>
        <Text className="font-semibold text-lg">Sair</Text>
      </Pressable>
    </View>
  );
}
