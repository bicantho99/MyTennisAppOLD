import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import React, { useState } from "react";
//
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DrillForm from "@/hooks/drillForm";
//

export default function Adding() {
  const items = ["Warm Up", "Main Drills", "Fitness", "Other"];
  const [selected, setSelected] = useState<number>(0);
  const activeBackgroundColor = "#b5f36b";
  const inactiveBackgroundColor = "#3b4451";
  const [tabName, setTabName] = useState<string>("Warm Up");
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      className="bg-bgColor"
      extraHeight={100}
    >
      <View>
        {/* <SafeAreaView> */}
        <View className="mx-10 gap-5 pb-10 mt-3 ">
          <View className="flex-row justify-between items-center">
            <Text className="text-textColor text-3xl font-bold mt-5">
              New Practice
            </Text>
            <Text className="mt-5 font-medium text-green-300">Save</Text>
          </View>
          <View className="section-view gap-3">
            <Text className="text-teal-50 ">Description</Text>
            <TextInput
              className="bg-gray-800 p-3 rounded-md text-white"
              placeholder="Write Your Practice Name"
              placeholderTextColor={"gray"}
            />
            <TextInput
              className="bg-gray-800 p-3 rounded-md"
              placeholder="Write Your Practice Description"
              placeholderTextColor={"gray"}
            />
          </View>
          <View className="section-view gap-3">
            <View className="flex-row justify-between items-center mt-[3px] mb-[5.5px]">
              {items.map((item, index) => {
                return (
                  <Pressable
                    key={index}
                    onPress={() => {
                      setSelected(index), setTabName(item);
                    }}
                    className=""
                  >
                    <Text
                      className={`${
                        selected === index
                          ? " text-[15px] bg-blue-400 font-medium px-[6px] text-black rounded-md py-[9.5px]"
                          : "text-white text-[15px] px-[6px] py-[9.5px]"
                      } transition ease-in duration-900 `}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            <View className="NO justify-center flex items-center gap-2 p-14 mb-3 relative border-dashed border border-gray-400">
              <Text className="text-gray-600 mt-3 font-medium text-[19px] text-center w-[200px] mb-2 transition ease-in duration-500">
                Add {tabName} Below
              </Text>
            </View>

            <TextInput
              className="bg-gray-800 p-4 rounded-md"
              placeholder="Drill name"
              placeholderTextColor={"gray"}
            />
            <TextInput
              className="bg-gray-800 p-4 rounded-md"
              placeholder="Description. Ex: high knee then butt kick"
              placeholderTextColor={"gray"}
            />
            <TextInput
              className="bg-gray-800 p-4 rounded-md"
              placeholder="Durration in minutes"
              placeholderTextColor={"gray"}
            />
            <TouchableOpacity>
              <Text className="mt-5 font-medium text-green-300 text-center text-[17px]">
                Add Drill
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </SafeAreaView> */}
      </View>
    </KeyboardAwareScrollView>
  );
}

//  <View className="section-view gap-3">
//           <View className="flex-row justify-between items-center mb-2">
//             <Text className="text-teal-50">Main Drills</Text>
//             <AntDesign name="pluscircle" size={16} color="beige" className="" />
//           </View>
//           <View className="bg-gray-800 p-3 rounded-md">
//             <Text className="text-gray-500">Add Drills</Text>
//           </View>
//         </View>
//         <View className="section-view gap-3">
//           <View className="flex-row justify-between items-center mb-2">
//             <Text className="text-teal-50">Fitness</Text>
//             <AntDesign name="pluscircle" size={16} color="beige" className="" />
//           </View>
//           <TextInput
//             className="bg-gray-800 p-3 rounded-md"
//             placeholder="Write Your Practice Description"
//             placeholderTextColor={"gray"}
//           />
//         </View>
//         <View className="section-view gap-3">
//           <View className="flex-row justify-between items-center mb-2">
//             <Text className="text-teal-50">Other</Text>
//             <AntDesign name="pluscircle" size={16} color="beige" className="" />
//           </View>
//           <TextInput
//             className="bg-gray-800 p-3 rounded-md"
//             placeholder="Write Your Practice Description"
//             placeholderTextColor={"gray"}
//           />
//         </View>
