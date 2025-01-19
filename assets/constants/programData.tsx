import { useState } from "react";
export function Data() {
  const [programData, setProgramData] = useState<any>({
    0: {
      Week1: [
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Serving Patterns",
          description: "This training focus on serving and returning",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Returning Patterns",
          description:
            "This training focus on patterns to capilize short balls.",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Baseline Patterns",
          description:
            "This training focuses on the mental and emotional aspects of your game",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Between The Points",
          description: "Discover the best baseline practices",
        },
      ],
      Week2: [
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Practice Set",
          description: "This training focus on serving and returning",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Serving + 1",
          description:
            "This training focus on patterns to capilize short balls.",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Return + 1",
          description:
            "This training focuses on the mental and emotional aspects of your game",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Slicing Pattern",
          description: "Discover the best baseline practices",
        },
      ],
      Week3: [
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Practice Set",
          description: "This training focus on serving and returning",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Serving + 2",
          description:
            "This training focus on patterns to capilize short balls.",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Return + 2",
          description:
            "This training focuses on the mental and emotional aspects of your game",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Defensive Pattern",
          description: "Discover the best baseline practices",
        },
      ],
    },
    1: {
      Week1: [
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Serving Patterns",
          description: "This training focus on serving and returning",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Returning Pattern",
          description:
            "This training focus on patterns to capilize short balls.",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "The Middle Tape",
          description:
            "This training focuses on the mental and emotional aspects of your game",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Practice Set",
          description: "Discover the best baseline practices",
        },
      ],
      Week2: [
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Return Lob",
          description: "This training focus on serving and returning",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Serving and Volleying",
          description:
            "This training focus on patterns to capilize short balls.",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Practice Set",
          description:
            "This training focuses on the mental and emotional aspects of your game",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "I formation",
          description: "Discover the best baseline practices",
        },
      ],
      Week3: [
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Moving at net",
          description: "This training focus on serving and returning",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Volley Lob Strategies",
          description:
            "This training focus on patterns to capilize short balls.",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "I-Formation",
          description:
            "This training focuses on the mental and emotional aspects of your game",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Baseline Strategies",
          description: "Discover the best baseline practices",
        },
      ],
    },
  });
  return { programData, setProgramData };
}
