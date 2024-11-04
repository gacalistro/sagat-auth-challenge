import { Redirect, Slot } from "expo-router";
import { useAuthContext } from "../../contexts/auth-context";

export default function AppLayout() {
  const { token } = useAuthContext();

  if (!token) {
    return <Redirect href="/" />;
  }

  return <Slot />;
}
