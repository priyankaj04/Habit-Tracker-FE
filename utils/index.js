import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const vw = (x) => {
    return (x / 100) * width;
};

export const vh = (x) => {
    return (x / 100) * height;
};
export { typography as T } from "./typography";
export { colors as C } from "./colors";