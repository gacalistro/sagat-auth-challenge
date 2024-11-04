import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import { z } from "zod";
import { Button } from "../../components/button";
import { Icon } from "../../components/icon";
import { Input } from "../../components/input";
import { api } from "../../lib/axios";

const recoverSchema = z.object({
  email: z.string().email(),
});

type RecoverType = z.infer<typeof recoverSchema>;

export default function RecoverPassword() {
  const { control, handleSubmit } = useForm<RecoverType>({
    resolver: zodResolver(recoverSchema),
  });

  const onSubmit = async ({ email }: RecoverType) => {
    try {
      await api.post("/auth/recover_password", {
        user: { email },
      });

      alert("Enviado!");
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data.message);
      }
    }
  };

  return (
    <>
      <Pressable
        className="flex-row items-center gap-1"
        onPress={() => router.back()}
      >
        <Icon name="ChevronLeft" className="size-6 text-zinc-500" />
        <Text className="font-medium text-zinc-500">Voltar</Text>
      </Pressable>

      <View>
        <Text className="font-medium text-3xl">Recuperar senha</Text>
        <Text className="font-medium">
          Enviaremos um e-mail com instruções para redefinir sua senha
        </Text>
      </View>

      <Controller
        name="email"
        control={control}
        render={({ field: { onChange } }) => (
          <Input
            placeholder="E-mail"
            inputMode="email"
            onChangeText={onChange}
            icon="Mail"
          />
        )}
      />

      <View className="mt-5">
        <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
      </View>
    </>
  );
}
