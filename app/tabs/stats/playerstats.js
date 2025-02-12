import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, SafeAreaView} from "react-native";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function PlayerStats() {
  const defaultStats = {
    name: "Natalie",
    wins: 23,
    losses: 5,
    trainingLogs: [
      { date: "2025-02-12", drill: "Forehand Drills", duration: "30 mins" },
      { date: "2025-02-10", drill: "Backhand Practice", duration: "45 mins" },
    ],
  };

  const [stats, setStats] = useState(defaultStats);
  const [loading, setLoading] = useState(false);

  if (loading) return <ActivityIndicator size="large" color="#2563eb" />;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#02102B" }}>
      <StatusBar style="light" />
      <ScrollView className="mx-6 my-4">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-white text-[25px] font-semibold">Player Stats</Text>
          <AntDesign name="barschart" size={24} color="white" />
        </View>

        {/* Stats Box */}
        <View className="bg-slate-800 p-4 rounded-xl border-blue-400 border-[0.4px] shadow-sm shadow-blue-300">
          <Text className="text-blue-300 font-bold text-lg mb-2">🏆 Player: {stats.name}</Text>
          <Text className="text-green-400 text-md font-semibold">✅ Wins: {stats.wins}</Text>
          <Text className="text-red-400 text-md font-semibold">❌ Losses: {stats.losses}</Text>
        </View>

        {/* Training Logs */}
        <Text className="text-blue-300 font-bold text-lg mt-5 mb-2">📅 Training Logs</Text>
        {stats.trainingLogs.length > 0 ? (
          stats.trainingLogs.map((log, index) => (
            <View
              key={index}
              className="bg-slate-700 p-3 rounded-xl border-blue-300 border-[0.4px] shadow-sm shadow-blue-300 mb-3"
            >
              <Text className="text-white text-md font-semibold">{log.date} - {log.drill}</Text>
              <Text className="text-gray-300 text-sm">{log.duration}</Text>
            </View>
          ))
        ) : (
          <Text className="text-gray-400 text-md">No training logs available.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
