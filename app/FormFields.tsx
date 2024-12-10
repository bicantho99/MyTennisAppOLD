import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function FormFields() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Jane Smith"
          placeholderTextColor="#A0A0A0"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Job title</Text>
        <TextInput
          style={styles.input}
          placeholder="Head of Tomfoolery"
          placeholderTextColor="#A0A0A0"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    color: "#000000",
  },
});
