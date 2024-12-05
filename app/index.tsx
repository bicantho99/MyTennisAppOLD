import { View, Text, TextInput, Button, StyleSheet} from "react-native";
import React from "react";

export default function subLesson() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>How many students here today?</Text>
      <TextInput
        placeholder="add coaches here"
        style={styles.input}
      />
      <Text style={styles.text}>How many courts available today?</Text>
      <TextInput
        placeholder="add courts here"
        style={styles.input}
      />
      <Button
        title="Learn More"
        color="#6200ee"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 20,
  },
  text: {
    color: '#ffffff',
    marginBottom: 20,
  },
  input: {
    color: 'white',
    width: '90%',
    padding: 8,
    marginBottom: 20,
    borderColor: 'pink',
    borderWidth: 2,
    borderRadius: 5,
  }
});