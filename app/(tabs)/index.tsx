import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background p-2">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding">Next</Link>

      <Link href={{ pathname: "/subscriptions/[id]", params: { id: "hey" } }}>
        Subscriptions- Hey
      </Link>
    </SafeAreaView>
  );
}
