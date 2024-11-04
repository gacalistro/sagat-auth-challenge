import { icons } from "lucide-react-native";
import { cssInterop } from "nativewind";
import { type ViewProps } from "react-native";

interface IconProps extends ViewProps {
  name: keyof typeof icons;
}

export const Icon = ({ name, ...rest }: IconProps) => {
  const LucideIcon = icons[name];

  cssInterop(LucideIcon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        height: true,
        width: true,
      },
    },
  });

  return <LucideIcon {...rest} />;
};
