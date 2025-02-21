import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function PlayerStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/api/stats")
      .then((response) => response.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching stats:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#2563eb" />;
  if (!stats)
    return (
      <Text className="text-gray-400 text-lg text-center mt-10">
        ⚠️ Failed to load player stats.
      </Text>
    );

  return (
    <SafeAreaView className="bg-bgColor flex-1">
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mx-6">
          {/* Header */}
          <View className="flex-row justify-between items-center">
            <Text className="text-white text-[25px] font-semibold mt-4">
              Player Stats
            </Text>
            <AntDesign name="barschart" size={24} color="white" />
          </View>

          {/* Stats Box */}
          <View className="bg-slate-800 p-4 rounded-xl border-blue-400 border-[0.4px] shadow-sm shadow-blue-300 mt-5">
            <Text className="text-blue-300 font-bold text-lg">
              Player: {stats.name}
            </Text>
            <Text className="text-green-400 text-lg font-semibold">
              Wins: {stats.wins}
            </Text>
            <Text className="text-red-400 text-lg font-semibold">
              Losses: {stats.losses}
            </Text>
          </View>

          {/* Training Logs */}
          <Text className="text-blue-300 font-bold text-[19px] mt-6">
            Training Logs
          </Text>
          {stats.trainingLogs.length > 0 ? (
            stats.trainingLogs.map((log, index) => (
              <View
                key={index}
                className="bg-slate-800 p-3 rounded-xl border-blue-300 border-[0.3px] shadow-sm shadow-blue-300 mt-3"
              >
                <Text className="text-white text-lg font-semibold">
                  {log.date} - {log.drill}
                </Text>
                <Text className="text-gray-300 text-md">{log.duration}</Text>
              </View>
            ))
          ) : (
            <Text className="text-gray-400 text-lg mt-3">
              No training logs available.
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}