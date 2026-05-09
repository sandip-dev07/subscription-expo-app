import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Text } from "react-native";

export default function Onboarding() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-sans-bold text-success">
        Get started with Nativewind!
      </Text>
    </SafeAreaView>
  );
}
