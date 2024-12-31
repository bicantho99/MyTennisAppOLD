import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
type DrillFormProps = {
  name: string;
};

export default function DrillForm({ name }: DrillFormProps) {
  return (
    <View>
      <View className="NO justify-center flex items-center gap-2 p-10 mb-3 relative border-dashed border border-gray-400 ">
        <Text className="text-gray-600 mt-3 font-medium text-[19px] text-center w-[200px] mb-2">
          Add {name} Below
        </Text>
      </View>

      <View className="gap-3 ">
        <View className="h-[30%]">
          <TextInput
            className="bg-gray-800 p-3 hrounded-md"
            placeholder="Drill name"
            placeholderTextColor={"gray"}
          />
        </View>
        <TextInput
          className="bg-gray-800 p-3 rounded-md"
          placeholder="Drill description. Ex: high knee then butt kick..."
          placeholderTextColor={"gray"}
        />
        <TextInput
          className="bg-gray-800 p-3 rounded-md"
          placeholder="Durration in minutes"
          placeholderTextColor={"gray"}
        />
      </View>
      <TouchableOpacity>
        <Text className="mt-5 font-medium text-green-300 text-center text-[17px]">
          Add Drill
        </Text>
      </TouchableOpacity>
    </View>
  );
}
