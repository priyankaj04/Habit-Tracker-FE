import { StyleSheet } from "react-native";

export const typography = StyleSheet.create({
  black:  (x) => {
    return {
      fontFamily: "PoppingsBlack",
      fontSize: x,
    };
  },
  extra: (x) => {
    return {
      fontFamily: "PoppingsExtrabold",
      fontSize: x,
    };
  },
  bold: (x) => {
    return {
      fontFamily: "PoppingsBold",
      fontSize: x,
    };
  },
  semi: (x) => {
    return {
      fontFamily: "PoppingsSemibold",
      fontSize: x,
    };
  },
  medium: (x) => {
    return {
      fontFamily: "PoppingsMedium",
      fontSize: x,
    };
  },
  regular: (x) => {
    return {
      fontFamily: "DMSansRegular",
      fontSize: x,
    };
  },
  light: (x) => {
    return {
      fontFamily: "PoppingsRegular",
      fontSize: x,
    };
  },
  extralight: (x) => {
    return {
      fontFamily: "PoppingsExtralight",
      fontSize: x,
    };
  },
});