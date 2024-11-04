import { TextInput, type TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="bg-zinc-300 h-14 w-full rounded-xl px-4 placeholder:text-zinc-800 placeholder:font-medium"
      {...rest}
    />
  );
}
