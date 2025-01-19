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
          title: "Practice Sets",
          description:
            "This training focuses on the mental and emotional aspects of your game",
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
          description: "This training focus on serving and returning",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Returning Patterns 2",
          description:
            "This training focus on patterns to capilize short balls.",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Practice Sets 2",
          description:
            "This training focuses on the mental and emotional aspects of your game",
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
          description: "This training focus on serving and returning",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Returning Patterns 3",
          description:
            "This training focus on patterns to capilize short balls.",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Practice Sets 3",
          description:
            "This training focuses on the mental and emotional aspects of your game",
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
          title: "Poaching Scenarios",
          description: "This training focus on serving and returning",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Serving Formations",
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
          title: "Poaching Scenarios 1",
          description: "This training focus on serving and returning",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Serving Formations 2",
          description:
            "This training focus on patterns to capilize short balls.",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Returning Strategies 2",
          description:
            "This training focuses on the mental and emotional aspects of your game",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Practice Sets 2",
          description: "Discover the best baseline practices",
        },
      ],
      Week3: [
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Poaching Scenarios 3",
          description: "This training focus on serving and returning",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins ",
          title: "Serving Formations 3",
          description:
            "This training focus on patterns to capilize short balls.",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Returning Strategies 3",
          description:
            "This training focuses on the mental and emotional aspects of your game",
        },
        {
          state: false,
          time: "45 Mins to 60 Mins",
          title: "Practice Sets 3",
          description: "Discover the best baseline practices",
        },
      ],
    },
  });
  return { programData, setProgramData };
}
