import {
  ActivityIndicator,
  Pressable,
  Text,
  type PressableProps,
} from "react-native";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "h-14 px-6 items-center justify-center rounded-xl",
  variants: {
    variant: {
      primary: "bg-black active:bg-zinc-800",
      neutral: "border-2 border-zinc-500 active:bg-zinc-100",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const textVariants = tv({
  base: "text-lg font-semibold",
  variants: {
    variant: {
      primary: "text-white",
      neutral: "text-zinc-500",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends PressableProps,
    VariantProps<typeof buttonVariants> {
  title: string;
  loading?: boolean;
}

export function Button({
  title,
  variant,
  loading = false,
  ...rest
}: ButtonProps) {
  return (
    <Pressable {...rest} className={buttonVariants({ variant })}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className={textVariants({ variant })}>{title}</Text>
      )}
    </Pressable>
  );
}
