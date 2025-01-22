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
  FlatList,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DrillForm from "@/hooks/drillForm";
import { useProgramData } from "@/assets/constants/programs";
import { router } from "expo-router";
import { useTrainingData } from "@/assets/constants/dataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";
import { useMatchStore } from "@/assets/constants/matchdata/storage";
export default function Adding() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player1_1s, setPlayer1_1s] = useState("");
  const [player1_2s, setPlayer1_2s] = useState("");
  const [player1_3s, setPlayer1_3s] = useState("");
  const matchId = uuidv4();
  //
  const [player2_1s, setPlayer2_1s] = useState("");
  const [player2_2s, setPlayer2_2s] = useState("");
  const [player2_3s, setPlayer2_3s] = useState("");
  const [matchNote, setmatchNote] = useState("");

  const { matchInfos, addMatchInfo, loadMatchInfos, deleteMatchInfo } =
    useMatchStore();
  useEffect(() => {
    loadMatchInfos();
  }, []);

  const handleAddMatchInfo = () => {
    const newMatchInfo = {
      matchId,
      player1,
      player2,
      player1_1s,
      player1_2s,
      player1_3s,
      player2_1s,
      player2_2s,
      player2_3s,
      matchNote,
    };
    addMatchInfo(newMatchInfo);
    router.back();
  };
  const handleDeleteMatchInfo = (matchId: string) => {
    deleteMatchInfo(matchId);
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-bgColor">
      <View>
        {/* <SafeAreaView> */}
        <View className="mx-6 gap-5 pb-10 pt-3 ">
          <View className="flex-row justify-between items-center">
            <Text className="text-textColor text-3xl font-bold mt-5">
              New Match
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
          <View className="section-view gap-3 mt-4">
            <View className="flex-row justify-between">
              <TextInput
                className="bg-gray-800 p-4 py-5 mb-1 rounded-xl   text-white   border-slate-400 border-[0.4px] shadow-sm shadow-slate-700 w-[55%]"
                placeholder="Player's Name"
                placeholderTextColor={"gray"}
                value={player1}
                onChangeText={setPlayer1}
              />
              <View className="flex-row gap-2">
                <TextInput
                  className="bg-gray-800 w-[39px] rounded-lg pl-4 text-xl text-white"
                  placeholder="0"
                  placeholderTextColor={"gray"}
                  keyboardType="numeric"
                  inputMode="numeric"
                  value={player1_1s}
                  onChangeText={setPlayer1_1s}
                />
                <TextInput
                  className="bg-gray-800 w-[39px] rounded-lg pl-4 text-xl text-white"
                  placeholder="0"
                  placeholderTextColor={"gray"}
                  keyboardType="numeric"
                  inputMode="numeric"
                  value={player1_2s}
                  onChangeText={setPlayer1_2s}
                />
                <TextInput
                  className="bg-gray-800 w-[39px] rounded-lg pl-4 text-xl text-white"
                  placeholder="0"
                  placeholderTextColor={"gray"}
                  keyboardType="numeric"
                  inputMode="numeric"
                  value={player1_3s}
                  onChangeText={setPlayer1_3s}
                />
              </View>
            </View>
            <View className="flex-row justify-between">
              <TextInput
                className="bg-gray-800 p-4 py-5 mb-1 rounded-xl   text-white   border-slate-400 border-[0.4px] shadow-sm shadow-slate-700 w-[55%]"
                placeholder="Player's Name"
                placeholderTextColor={"gray"}
                value={player2}
                onChangeText={setPlayer2}
              />
              <View className="flex-row gap-2">
                <TextInput
                  className="bg-gray-800 w-[39px] rounded-lg pl-4 text-xl text-white"
                  placeholder="0"
                  placeholderTextColor={"gray"}
                  keyboardType="numeric"
                  inputMode="numeric"
                  value={player2_1s}
                  onChangeText={setPlayer2_1s}
                />
                <TextInput
                  className="bg-gray-800 w-[39px] rounded-lg pl-4 text-xl text-white"
                  placeholder="0"
                  placeholderTextColor={"gray"}
                  keyboardType="numeric"
                  inputMode="numeric"
                  value={player2_2s}
                  onChangeText={setPlayer2_2s}
                />
                <TextInput
                  className="bg-gray-800 w-[39px] rounded-lg pl-4 text-xl text-white"
                  placeholder="0"
                  placeholderTextColor={"gray"}
                  keyboardType="numeric"
                  inputMode="numeric"
                  value={player2_3s}
                  onChangeText={setPlayer2_3s}
                />
              </View>
            </View>
            <TextInput
              className="bg-gray-800 px-3 pb-10 pt-4 rounded-lg   border-slate-400 border-[0.4px] text-white  shadow-sm shadow-slate-700"
              placeholder="Note..."
              placeholderTextColor={"gray"}
              editable
              multiline
              value={matchNote}
              onChangeText={setmatchNote}
            />
          </View>
          <View className="section-view gap-3 items-center ">
            <TouchableOpacity
              onPress={() => {
                handleAddMatchInfo();
              }}
            >
              <Text className="mt-5  text-green-300 text-center text-[18px] bg-slate-800 p-5 rounded-xl font-semibold">
                Add Match
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </SafeAreaView> */}
      </View>
    </SafeAreaView>
  );
}
