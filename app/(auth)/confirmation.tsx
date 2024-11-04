import { isAxiosError } from "axios";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Button } from "../../components/button";
import { api } from "../../lib/axios";

export default function Confirmation() {
  const { email } = useLocalSearchParams();

  const handleResendConfirmation = async () => {
    try {
      await api.post("/auth/resend_credential_email", {
        user: { email },
      });
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data.message);
      }
    }
  };

  return (
    <>
      <View>
        <Text className="font-medium text-3xl">Finalizar cadastro</Text>
        <Text className="font-medium">
          Confirme seu e-mail através da mensagem que enviamos para{" "}
          <Text className="font-semibold">{email}</Text>
        </Text>
      </View>

      <View className="flex-row items-center mt-2">
        <Text className="font-medium">Não recebeu o e-mail?</Text>

        <Pressable
          className="p-1 rounded-lg group"
          onPress={handleResendConfirmation}
        >
          <Text className="font-semibold group-disabled:text-zinc-400">
            Reenviar
          </Text>
        </Pressable>
      </View>

      <View className="mt-8">
        <Button
          title="Continuar"
          onPress={() => {
            router.push("/login");
          }}
        />
      </View>
    </>
  );
}
