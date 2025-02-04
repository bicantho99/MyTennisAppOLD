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
import Ionicons from "@expo/vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DrillForm from "@/hooks/drillForm";
import { useProgramData } from "@/assets/constants/programs";
import { router } from "expo-router";
import { useTrainingData } from "@/assets/constants/dataContext";
import { usePlayerStore } from "@/assets/constants/playerdata/data";
import { v4 as uuidv4 } from "uuid";
export default function Adding() {
  const [name, setName] = useState("");

  const [strength, setStrength] = useState("");
  const [weaknesses, setWeaknesses] = useState("");
  const [group, setGroup] = useState("");
  const [rating, setRating] = useState("");
  const [notes, setNotes] = useState("");
  const { playerData, addPlayerInfo, loadPlayerInfos, deletePlayerInfo } =
    usePlayerStore();
  const playerId = uuidv4();

  const newPlayer = {
    playerId,
    name,
    strength,
    weaknesses,
    group,
    rating,
    notes,
  };
  const handleSubmit = () => {
    addPlayerInfo(newPlayer);
    router.back();
  };
  return (
    <KeyboardAwareScrollView style={{ flex: 1 }} className="bg-bgColor">
      <View>
        {/* <SafeAreaView> */}
        <View className="mx-6  pb-10 pt-3 ">
          <View className="flex-row justify-between items-center">
            <Text className="text-textColor text-3xl font-bold mt-5">
              Add Player
            </Text>
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              {/* <Text className="mt-5 text-[15px] font-medium text-green-300">
                Save
              </Text> */}
            </TouchableOpacity>
          </View>
          <View className="section-view mt-2 ">
            <TextInput
              className="bg-gray-900 mt-3 p-4 py-5 rounded-xl text-white border-[0.8px] border-slate-400"
              placeholder="Enter player name..."
              placeholderTextColor={"gray"}
              value={name}
              onChangeText={(text) => setName(text)}
            />

            <View className="bg-slate-900 mt-5 p-3 rounded-xl border border-slate-500">
              <Text className="text-blue-300 text-xl pl-2 font-semibold">
                Group and Rating
              </Text>
              <TextInput
                className="bg-gray-800 mt-3 p-4 py-5 rounded-xl text-white"
                placeholder="Team or Age Group..."
                placeholderTextColor={"gray"}
                value={group}
                onChangeText={(text) => setGroup(text)}
              />
              <TextInput
                className="bg-gray-800 mt-3 p-4 py-5 rounded-xl text-white"
                placeholder="Enter Rating UTR or USTA"
                placeholderTextColor={"gray"}
                value={rating}
                onChangeText={(text) => setRating(text)}
              />
            </View>

            <View className="bg-slate-900 mt-5 p-3 rounded-xl border border-slate-500">
              <Text className="text-blue-300 text-xl pl-2 font-semibold">
                Strengths / Weaknesses
              </Text>
              <TextInput
                className="bg-gray-800 mt-3 p-4 py-5 rounded-xl text-white"
                placeholder="Strengths..."
                placeholderTextColor={"gray"}
                value={strength}
                onChangeText={(text) => setStrength(text)}
              />
              <TextInput
                className="bg-gray-800 mt-3 p-4 py-5 rounded-xl text-white "
                placeholder="Weaknesses..."
                placeholderTextColor={"gray"}
                value={weaknesses}
                onChangeText={(text) => setWeaknesses(text)}
              />
            </View>

            <View className="bg-slate-900 mt-5 p-3 rounded-xl border border-slate-500">
              <Text className="text-blue-300 text-xl pl-2 font-semibold">
                Note
              </Text>
              <TextInput
                className=" bg-slate-800 mt-3 px-3 pb-10 pt-4 rounded-lg text-white "
                placeholder="Good to know..."
                placeholderTextColor={"gray"}
                value={notes}
                onChangeText={(text) => setNotes(text)}
              />
            </View>
          </View>
          <View className="section-view gap-3 items-center ">
            <TouchableOpacity
              onPress={() => {
                handleSubmit();
              }}
            >
              <Text className="mt-5  text-green-300 text-center text-[18px] bg-slate-800 p-5 rounded-xl font-semibold">
                Add Player
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </SafeAreaView> */}
      </View>
    </KeyboardAwareScrollView>
  );
}
