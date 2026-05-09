import { SafeAreaView } from "@/components/ui/safe-area-view";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <SafeAreaView className="flex-1 bg-background">
      <Text>Subscription Details - {id}</Text>
    </SafeAreaView>
  );
};

export default SubscriptionDetails;
