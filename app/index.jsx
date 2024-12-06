import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function subLesson() {
  const [students, setStudents] = useState(0);
  const [courts, setCourts] = useState(0);

  const Calculation = (students, courts) => {
    const maxCapacity = 4;
    if (students > maxCapacity) {
      const odd = students % maxCapacity; // Calculate odd players
      const studentPerCourt = Math.floor(students / courts); // Players evenly distributed

      return `${studentPerCourt} players per court and there are ${odd} odd players`;
    } else {
      const studentPerCourt = students / courts;
      return `Allocate ${studentPerCourt} per court`;
    }
  };

  return (
    <LinearGradient
      colors={["#1A2D45", "#10172A"]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.3, y: 0.4 }}
      locations={[0.1, 1]}
    >
      <Text style={styles.text}>Hello, World!</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});
