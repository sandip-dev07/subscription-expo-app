import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>SignIn</Text>
      <Link href="/sign-up">Sign Up</Link>
      <Link href="/">Home</Link>
    </SafeAreaView>
  );
};

export default SignIn;
