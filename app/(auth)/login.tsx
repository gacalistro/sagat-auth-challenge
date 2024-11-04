import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import { z } from "zod";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { useAuthContext } from "../../contexts/auth-context";
import { api } from "../../lib/axios";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginType = z.infer<typeof loginSchema>;

export default function Login() {
  const { login } = useAuthContext();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async ({ email, password }: LoginType) => {
    try {
      const response = await api.put("/auth/sign_in", {
        user: { email, password },
      });

      const token = response.data.token;

      login(token);
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data.message);
      }
    }
  };

  return (
    <>
      <View>
        <Text className="font-medium text-3xl">Bem-vindo de volta!</Text>
        <Text className="font-medium">Faça login para prosseguir</Text>
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

      <Controller
        name="password"
        control={control}
        render={({ field: { onChange } }) => (
          <Input
            placeholder="Senha"
            secureTextEntry
            onChangeText={onChange}
            icon="Lock"
          />
        )}
      />

      <Pressable className="self-end" onPress={() => router.push("/recover")}>
        <Text className="font-semibold">Recuperar senha</Text>
      </Pressable>

      <Button
        title="Entrar"
        onPress={handleSubmit(onSubmit)}
        loading={isSubmitting}
        disabled={isSubmitting}
      />

      <View className="flex-row items-center justify-center mt-2">
        <Text className="font-medium">Não possui uma conta?</Text>

        <Pressable
          onPress={() => router.push("/signup")}
          className="p-1 rounded-lg"
          disabled={isSubmitting}
        >
          <Text className="font-semibold">Cadastrar</Text>
        </Pressable>
      </View>
    </>
  );
}
