import { TextInput, View, type TextInputProps } from "react-native";
import { Icon } from "./icon";
import { type icons } from "lucide-react-native";

interface InputProps extends TextInputProps {
  icon?: keyof typeof icons;
}

export function Input({ icon, ...rest }: InputProps) {
  return (
    <View className="bg-zinc-300 h-14 w-full rounded-xl px-4 flex-row items-center gap-2">
      {icon && <Icon name={icon} className="size-6 text-zinc-800" />}
      <TextInput
        className="flex-1 h-full placeholder:text-zinc-800 placeholder:font-medium"
        {...rest}
      />
    </View>
  );
}
