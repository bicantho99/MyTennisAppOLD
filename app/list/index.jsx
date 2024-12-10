import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Checkbox from "expo-checkbox";
import EvilIcons from "@expo/vector-icons/EvilIcons";
const YourComponent = () => {
  const [selected, setSelected] = useState(new Array(names).fill(false));
  const [isTextInputVisible, setTextInputVisible] = useState(false);
  const [newName, setNewName] = useState("");
  const [names, setNames] = useState([
    "Alex Gaskarth",
    "Khanh Nguyen",
    "Billie Joe",
    "Alex Gaskarth",
    "Khanh Nguyen",
    "Billie Joe",
  ]);

  const handleToggle = () => {
    setTextInputVisible((prev) => !prev);
  };
  const handleAddName = () => {
    if (newName.trim()) {
      setNames([...names, newName.trim()]);
      setNewName("");
    }
  };

  const toggleCheckbox = (index) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  const handleRemoveName = (index) => {
    setNames((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <SafeAreaView className="bg-bgColor flex-1">
      <TouchableOpacity onPress={handleToggle}>
        <AntDesign
          name="pluscircleo"
          size={24}
          color="white"
          className="self-end mr-10 mt-5"
        />
      </TouchableOpacity>

      {isTextInputVisible && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="black"
            value={newName}
            onChangeText={setNewName}
          />
          <TouchableOpacity onPress={handleAddName}>
            <Text className="text-textColor cursor-pointer text-center">
              Add Player
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View className="border-gray-300  mt-5 w-full p-5 px-14">
        {names.map((name, index) => (
          <View key={index} className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-1">
              <Checkbox
                value={selected[index]}
                color={"white"}
                onValueChange={() => toggleCheckbox(index)}
              />
              <Text className="text-textColor text-lg ml-2">{name}</Text>
            </View>

            <TouchableOpacity onPress={() => handleRemoveName(index)}>
              <EvilIcons
                name="minus"
                size={24}
                color="white"
                className="mb-1.5"
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default YourComponent;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    borderColor: "#ccc",
    aontSize: 16,
  },
});
