import { styled } from "nativewind";
import type { PropsWithChildren } from "react";
import {
  SafeAreaView as AppSafeAreaView,
  type SafeAreaViewProps,
} from "react-native-safe-area-context";

const StyledSafeAreaView = styled(AppSafeAreaView);

type Props = PropsWithChildren<SafeAreaViewProps>;

export const SafeAreaView = ({ children, ...props }: Props) => {
  return <StyledSafeAreaView {...props}>{children}</StyledSafeAreaView>;
};
