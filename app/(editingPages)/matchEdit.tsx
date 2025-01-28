import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useMatchStore } from "@/assets/constants/matchdata/storage";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Rating } from "@kolking/react-native-rating";
export default function matchEdit() {
  const [date, setDate] = useState("");

  const {
    matchInfos,
    addMatchInfo,
    loadMatchInfos,
    deleteMatchInfo,
    editMatchInfo,
  } = useMatchStore();

  const handleAddMatchInfo = () => {
    const newMatchInfo = {
      player1,
      player2,
      player1_1s,
      player1_2s,
      player1_3s,
      player2_1s,
      player2_2s,
      player2_3s,
      matchNote,
      techni,
      mental,
      strate,
      physical,
    };

    addMatchInfo(newMatchInfo);
    router.back();
  };
  const { editingMatchID } = useLocalSearchParams();

  const editingMatch = matchInfos.find(
    (match: any) => match.matchId == editingMatchID
  );
  const [player1, setPlayer1] = useState(editingMatch?.player1 || "");
  const [player2, setPlayer2] = useState(editingMatch?.player2 || "");
  const [player1_1s, setPlayer1_1s] = useState(editingMatch?.player1_1s || "");
  const [player1_2s, setPlayer1_2s] = useState(editingMatch?.player1_2s || "");
  const [player1_3s, setPlayer1_3s] = useState(editingMatch?.player1_3s || "");
  const [player2_1s, setPlayer2_1s] = useState(editingMatch?.player2_1s || "");
  const [player2_2s, setPlayer2_2s] = useState(editingMatch?.player2_2s || "");
  const [player2_3s, setPlayer2_3s] = useState(editingMatch?.player2_3s || "");
  const [matchNote, setmatchNote] = useState(editingMatch?.matchNote || "");
  const [techni, setTechni] = useState(editingMatch?.techni || "");
  const [mental, setMental] = useState(editingMatch?.mental || "");
  const [strate, setStrate] = useState(editingMatch?.strate || "");
  const [physical, setPhysical] = useState(editingMatch?.physical || "");
  const handleEditMatchInfo = () => {
    const updatedMatchInfo = {
      editingMatchID,
      player1,
      player2,
      player1_1s,
      player1_2s,
      player1_3s,
      player2_1s,
      player2_2s,
      player2_3s,
      matchNote,
      techni,
      mental,
      strate,
      physical,
    };

    editMatchInfo(updatedMatchInfo);
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-bgColor">
      <View>
        {/* <SafeAreaView> */}
        <View className="mx-6 gap-5 pb-10 ">
          <View className="flex-row justify-between items-center">
            <Text className="text-textColor text-3xl font-bold mt-5">
              New Match
            </Text>
          </View>
          <View className="section-view gap-3">
            <View className="flex-row justify-between">
              <TextInput
                className="bg-slate- p-4 py-5 mb-1 rounded-xl   text-white   border-blue-300 border-[0.9px] shadow-sm shadow-slate-700 w-[55%]"
                placeholder={"Enter Player Name"}
                placeholderTextColor={"gray"}
                value={player1}
                onChangeText={setPlayer1}
              />
              <View className="flex-row gap-2">
                <TextInput
                  className="bg-gray- w-[39px] rounded-lg pl-4 text-xl text-white border-blue-300 border-[0.9px]"
                  placeholder="0"
                  placeholderTextColor={"gray"}
                  keyboardType="numeric"
                  inputMode="numeric"
                  value={player1_1s}
                  onChangeText={setPlayer1_1s}
                />
                <TextInput
                  className="bg-gray- w-[39px] rounded-lg pl-4 text-xl text-white border-blue-300 border-[0.9px]"
                  placeholder="0"
                  placeholderTextColor={"gray"}
                  keyboardType="numeric"
                  inputMode="numeric"
                  value={player1_2s}
                  onChangeText={setPlayer1_2s}
                />
                <TextInput
                  className="bg-gray- w-[39px] rounded-lg pl-4 text-xl text-white border-blue-300 border-[0.9px]"
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
                className=" p-4 py-5 mb-1 rounded-xl   text-white   border-blue-300 border-[0.9px] shadow-sm shadow-slate-700 w-[55%]"
                placeholder="Player's Name"
                placeholderTextColor={"gray"}
                value={player2}
                onChangeText={setPlayer2}
              />
              <View className="flex-row gap-2">
                <TextInput
                  className=" w-[39px] rounded-lg pl-4 text-xl text-white  border-blue-300 border-[0.9px]"
                  placeholder="0"
                  placeholderTextColor={"gray"}
                  keyboardType="numeric"
                  inputMode="numeric"
                  value={player2_1s}
                  onChangeText={setPlayer2_1s}
                />
                <TextInput
                  className=" w-[39px] rounded-lg pl-4 text-xl text-white border-blue-300 border-[0.9px]"
                  placeholder="0"
                  placeholderTextColor={"gray"}
                  keyboardType="numeric"
                  inputMode="numeric"
                  value={player2_2s}
                  onChangeText={setPlayer2_2s}
                />
                <TextInput
                  className=" w-[39px] rounded-lg pl-4 text-xl text-white border-blue-300 border-[0.9px]"
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
              className="bg-gray-800 px-3 pb-10 pt-4 rounded-lg  border border-slate-400 text-white  shadow-sm shadow-slate-700 mt-2"
              placeholder="Note..."
              placeholderTextColor={"gray"}
              editable
              multiline
              value={matchNote}
              onChangeText={setmatchNote}
            />
          </View>

          <View className="bg-slate-800 mt-1 p-3 rounded-xl border-slate-400 border">
            <View className="p-2 gap-4">
              <View className="flex-row items-center">
                <Text className="text-blue-300 text-[16px] font-medium w-[140px]">
                  Strategies
                </Text>
                <View className="ml-4">
                  <Rating
                    size={13}
                    rating={strate}
                    onChange={setStrate}
                    scale={1}
                    spacing={11}
                    baseColor={"#C7C7CC"}
                    fillColor="gold"
                    touchColor="gold"
                  />
                </View>
              </View>
              <View className="flex-row items-center ">
                <Text className="text-blue-300  text-[16px] font-medium w-[140px]">
                  Physical
                </Text>
                <View className="ml-4">
                  <Rating
                    size={13}
                    rating={physical}
                    onChange={setPhysical}
                    scale={1}
                    spacing={11}
                    baseColor={"#C7C7CC"}
                    fillColor="gold"
                    touchColor="gold"
                  />
                </View>
              </View>
              <View className="flex-row items-center ">
                <Text className="text-blue-300 text-[16px] font-medium w-[140px]">
                  Mental
                </Text>
                <View className="ml-4 ">
                  <Rating
                    size={13}
                    rating={mental}
                    onChange={setMental}
                    scale={1}
                    spacing={11}
                    baseColor={"#C7C7CC"}
                    fillColor="gold"
                    touchColor="gold"
                  />
                </View>
              </View>
              <View className="flex-row items-center">
                <Text className="text-blue-300 text-[16px] font-medium w-[140px]">
                  Techniques
                </Text>
                <View className="ml-4">
                  <Rating
                    size={13}
                    rating={techni}
                    onChange={setTechni}
                    scale={1}
                    spacing={11}
                    baseColor={"#C7C7CC"}
                    fillColor="gold"
                    touchColor="gold"
                  />
                </View>
              </View>
            </View>
          </View>

          <View className="section-view gap-3 items-center ">
            <TouchableOpacity
              onPress={() => {
                // handleSaveRating();
                handleAddMatchInfo();
              }}
            >
              <Text className="mt-5  text-green-300 text-center text-[18px] bg-slate-800 p-5 rounded-xl font-semibold">
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </SafeAreaView> */}
      </View>
    </SafeAreaView>
  );
}
