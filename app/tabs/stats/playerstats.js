import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
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
  if (!stats) return <Text style={styles.text}>⚠️ Failed to load player stats.</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.content}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>🏆 Player Stats</Text>
          <AntDesign name="barschart" size={24} color="white" />
        </View>

        {/* Stats Box */}
        <View style={styles.statsBox}>
          <Text style={styles.playerName}>🎾 Player: {stats.name}</Text>
          <Text style={styles.wins}>✅ Wins: {stats.wins}</Text>
          <Text style={styles.losses}>❌ Losses: {stats.losses}</Text>
        </View>

        {/* Training Logs */}
        <Text style={styles.trainingHeader}>📅 Training Logs</Text>
        {stats.trainingLogs.length > 0 ? (
          stats.trainingLogs.map((log, index) => (
            <View key={index} style={styles.logBox}>
              <Text style={styles.logText}>{log.date} - {log.drill}</Text>
              <Text style={styles.logDuration}>{log.duration}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noLogs}>No training logs available.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#02102B", // Dark theme background
  },
  content: {
    marginHorizontal: 20,
    marginTop: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  statsBox: {
    backgroundColor: "#1E293B",
    padding: 15,
    borderRadius: 10,
    borderColor: "#3B82F6",
    borderWidth: 0.5,
    shadowColor: "#3B82F6",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  playerName: {
    color: "#60A5FA",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  wins: {
    color: "#22C55E",
    fontSize: 16,
    fontWeight: "600",
  },
  losses: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "600",
  },
  trainingHeader: {
    color: "#60A5FA",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  logBox: {
    backgroundColor: "#374151",
    padding: 12,
    borderRadius: 8,
    borderColor: "#3B82F6",
    borderWidth: 0.5,
    shadowColor: "#3B82F6",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 10,
  },
  logText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  logDuration: {
    color: "#CBD5E1",
    fontSize: 14,
  },
  noLogs: {
    color: "#9CA3AF",
    fontSize: 16,
  },
});
