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
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DrillForm from "@/hooks/drillForm";
import { useProgramData } from "@/assets/constants/programs";
import { router } from "expo-router";
import { useTrainingData } from "@/assets/constants/dataContext";
import { v4 as uuidv4 } from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTrainingStore } from "@/assets/constants/trainingsData/data";
export default function Adding() {
  const { addTraining, trainingData } = useTrainingStore();
  const [trainings, setTraining] = useState<any>([]);
  const trainingID = uuidv4();
  const { programData, setProgramData } = useTrainingData();

  const [selected, setSelected] = useState<number>(0);
  const activeBackgroundColor = "#b5f36b";
  const inactiveBackgroundColor = "#3b4451";

  const [title, setTitle] = useState<string>("");
  const [TDur, setTDur] = useState<string>("");
  const [TDef, setTDef] = useState<string>("");

  // the lower part
  const items = ["Warm Up", "Main Drills", "Fitness", "Recovery"];
  const [tabName, setTabName] = useState<keyof Drills>("Warm Up");
  const [drillName, setDrillName] = useState("");
  const [totalPlayer, setTotalPlayer] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState(false);
  const [drills, setDrills] = useState<Drills>({
    "Warm Up": [],
    "Main Drills": [],
    Fitness: [],
    Recovery: [],
  });

  interface Drills {
    "Warm Up": string[];
    "Main Drills": string[];
    Fitness: string[];
    Recovery: string[];
  }

  interface Program {
    title: string;
    description: string;
    numDrills?: number;
    time?: string;
    focuses?: { focus: string }[] | null;
    warmUp?: string[];
    mainDrills?: string[];
    fitness?: string[];
    Recovery?: string[];
  }

  const newProgram = {
    id: trainingID,
    title: title,
    totalPlayers: totalPlayer,
    description: TDef,
    time: TDur,
    warmUp: drills["Warm Up"] || [],
    mainDrills: drills["Main Drills"] || [],
    fitness: drills.Fitness || [],
    recovery: drills.Recovery || [],
  };
  const saveTraining = () => {
    addTraining(newProgram);
  };


  const handleSubmit = () => {
    if (!drillName) {
      setError(true);
      return;
    }

    setDrills((prev: any) => ({
      ...prev,
      [tabName]: [...prev[tabName], drillName],
    }));

    setDrillName("");
    setDescription("");
    setDuration("");
    setError(false);
  };

  const handleRemove = (index: number) => {
    setDrills((prev: any) => {
      prev[tabName].splice(index, 1);
      return {
        ...prev,
      };
    });
  };
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      className="bg-bgColor"
      extraHeight={10}
    >
      <View>
        {/* <SafeAreaView> */}
        <View className="mx-6 gap-5 pb-10 pt-3 ">
          <View className="flex-row justify-between items-center">
            <Text className="text-textColor text-3xl font-bold mt-5">
              New Training
            </Text>
            <TouchableOpacity
              onPress={() => {
                saveTraining();
                router.back();
              }}
            >
              <Text className="mt-5 text-[15px] font-medium text-green-300">
                Save
              </Text>
            </TouchableOpacity>
          </View>
          <View className="section-view gap-3">
            <Text className="text-teal-50">Description</Text>
            <TextInput
              className="bg-gray-800 py-5 px-4 mb-1 rounded-md text-white   border-teal-500 border-[0.4px]"
              placeholder="Write Your Practice Name"
              placeholderTextColor={"gray"}
              onChangeText={(text) => setTitle(text)}
              value={title}
            />
            <TextInput
              className="bg-gray-800 py-5 px-4 rounded-md   border-teal-500 border-[0.4px] text-textColor "
              placeholder="Time. Ex: 4:00 PM "
              placeholderTextColor={"gray"}
              onChangeText={(text) => setTDur(text)}
              value={TDur}
            />
            <TextInput
              className="bg-gray-800 py-5 px-4 rounded-md   border-teal-500 border-[0.4px] text-textColor "
              placeholder="Total Players. Ex: 2 Players"
              placeholderTextColor={"gray"}
              onChangeText={(text) => setTotalPlayer(text)}
              value={totalPlayer}
            />
            <TextInput
              className="bg-gray-800 px-3 pb-10 pt-5 rounded-lg   border-teal-500 border-[0.4px] text-white"
              placeholder="Write Your Practice Description"
              placeholderTextColor={"gray"}
              editable
              multiline
              onChangeText={(text) => setTDef(text)}
              value={TDef}
            />
          </View>
          <View className="section-view gap-3">
            <View className="flex-row justify-between items-center mt-[3px] mb-[5.5px]">
              {items.map((item, index) => {
                return (
                  <Pressable
                    key={index}
                    onPress={() => {
                      setSelected(index), setTabName(item as keyof Drills);
                    }}
                    className=""
                  >
                    <Text
                      className={`${
                        selected === index
                          ? " text-[15px] border border-teal-400 font-medium px-[6px] text-white rounded-md py-[9.5px]"
                          : "text-white text-[15px] px-[6px] py-[9.5px]"
                      } transition ease-in duration-900 `}
                    >
                      {item}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            <View className="NO  flex  gap-2  mb-3  min-h-[160px]  rounded border-b-2 border-gray-500 transition duration-500 ease-in pb-10">
              {drills[tabName]?.length === 0 ? (
                <Text className="text-gray-600 mt-3 font-medium text-[19px] text-center w-[200px] mb-2 transition ease-in duration-500">
                  Add {tabName} Below
                </Text>
              ) : (
                <View className="transition duration-700 ease-in-out">
                  {drills[tabName].map((items: any, index: any) => (
                    <View
                      className="tasks-view py-4  px-4 rounded-md  flex-row gap-2  mt-2 border border-dotted border-teal-300  bg-teal-900/20 transition duration-700 ease-in-out justify-between"
                      key={index}
                    >
                      <View className="flex-row gap-2 items-center">
                        <Text className="text-pink-400 font-medium text-[17px]">
                          {`${index + 1}.`}
                        </Text>
                        <Text className="text-white text-[17px] font-medium">
                          {items}
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          handleRemove(index);
                        }}
                      >
                        <Ionicons name="remove" size={24} color="white" />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}
            </View>

            <TextInput
              className="bg-gray-800 py-5 px-4 rounded-md text-white border-gray-400 border-[0.2px]"
              placeholder="Drill name"
              placeholderTextColor={"gray"}
              onChangeText={(text) => setDrillName(text)}
              value={drillName}
            />

            {error ? (
              <Text className="text-slate-400 text-lg">Please drill name</Text>
            ) : null}

            <TouchableOpacity
              onPress={() => {
                handleSubmit();
              }}
            >
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
