import { AnimationObject } from "lottie-react-native";

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require("../images/lottie1.json"),
    text: "Welcome to MyTennisApp",
    textColor: "#1e2169",
    backgroundColor: "#bae4fd",
  },
];

export default data;
