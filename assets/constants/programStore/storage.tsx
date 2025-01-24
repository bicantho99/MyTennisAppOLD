import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
type store = {
  programData: any;
  setProgramData: (program: any) => void;
  loadProgramData: () => void;
};
export const useProgramStore = create<store>((set) => ({
  programData: {
    0: {
      Week1: [
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Serving Patterns",
          description: "This training focus on serving patterns",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Returning Patterns",
          description: "This training focus on serving patterns",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Practice Sets",
          description:
            "This training focuses on applying your patterns into matches",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Baseline Patterns",
          description: "Discover the best baseline practices",
        },
      ],
      Week2: [
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Serving Patterns 2",
          description: "This training focus on serving patterns",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Returning Patterns 2",
          description: "This training focus on returning patterns",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Practice Sets 2",
          description:
            "This training focuses on applying your patterns into matches",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Baseline Patterns 2",
          description: "Discover the best baseline practices",
        },
      ],
      Week3: [
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Serving Patterns 3",
          description: "This training focus on serving patterns",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Returning Patterns 2",
          description: "This training focus on serving patterns",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Practice Sets 2",
          description:
            "This training focuses on applying your patterns into matches",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Baseline Patterns 3",
          description: "Discover the best baseline practices",
        },
      ],
    },
    1: {
      Week1: [
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Net Play Essentials",
          description: "This training focus on serving and returning",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Net Play Essentials 2",
          description:
            "This training focus on patterns to capilize short balls.",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Returning Strategies",
          description:
            "This training focuses on the mental and emotional aspects of your game",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Practice Sets",
          description: "Discover the best baseline practices",
        },
      ],
      Week2: [
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Net Play Essentials 3",
          description: "This training focus on serving and returning",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Serve Essential",
          description:
            "This training focus on patterns to capilize short balls.",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Returning Strategies",
          description:
            "This training focuses on the mental and emotional aspects of your game",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Practice Sets",
          description: "Discover the best baseline practices",
        },
      ],
      Week3: [
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Net Play Essentials 3",
          description: "This training focus on serving and returning",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Returning Patterns 3",
          description:
            "This training focus on patterns to capilize short balls.",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Planned Switch",
          description:
            "This training focuses on the mental and emotional aspects of your game",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Net Play Essentials",
          description: "Discover the best baseline practices",
        },
      ],
    },
  },
  loadProgramData: async () => {
    try {
      const savedData = await AsyncStorage.getItem("programData");
      if (savedData) {
        set({ programData: JSON.parse(savedData) });
      }
    } catch (error) {
      console.error("Error loading program data from AsyncStorage", error);
    }
  },
  setProgramData: async (newProgramData) => {
    try {
      // Save the new program data to AsyncStorage
      await AsyncStorage.setItem("programData", JSON.stringify(newProgramData));

      // Update the state with the new program data
      set({ programData: newProgramData });
    } catch (error) {
      console.error("Error saving program data to AsyncStorage", error);
    }
  },
}));
