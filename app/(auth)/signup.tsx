import { zodResolver } from "@hookform/resolvers/zod";
import { isAxiosError } from "axios";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import { z } from "zod";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { api } from "../../lib/axios";

const signupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

type SignupType = z.infer<typeof signupSchema>;

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignupType>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async ({ name, email, password }: SignupType) => {
    try {
      await api.post("/auth/sign_up", {
        user: { email, password, username: name },
      });

      router.push({ pathname: "/confirmation", params: { email } });
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data.message);
      }
    }
  };

  return (
    <>
      <View>
        <Text className="font-medium text-3xl">Seja bem-vindo!</Text>
        <Text className="font-medium">Insira seus dados para se cadastrar</Text>
      </View>

      <Controller
        name="name"
        control={control}
        render={({ field: { onChange } }) => (
          <Input placeholder="Nome" onChangeText={onChange} />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field: { onChange } }) => (
          <Input
            placeholder="E-mail"
            inputMode="email"
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field: { onChange } }) => (
          <Input placeholder="Senha" secureTextEntry onChangeText={onChange} />
        )}
      />

      <View className="mt-5">
        <Button
          title="Cadastrar"
          onPress={handleSubmit(onSubmit)}
          loading={isSubmitting}
          disabled={isSubmitting}
        />
      </View>

      <View className="flex-row items-center justify-center mt-2">
        <Text className="font-medium">Possui uma conta?</Text>

        <Pressable
          onPress={() => router.push("/login")}
          className="p-1 rounded-lg"
        >
          <Text className="font-semibold">Entrar</Text>
        </Pressable>
      </View>
    </>
  );
}
