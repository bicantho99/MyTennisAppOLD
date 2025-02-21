import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BarChart, PieChart } from "react-native-chart-kit";

export default function PlayerStats() {
  const [playerStats, setPlayerStats] = useState(null);
  const [matchStats, setMatchStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Player Stats
    fetch("http://localhost:5001/api/player-stats")
      .then((response) => response.json())
      .then((data) => {
        setPlayerStats(data);
      })
      .catch((error) => {
        console.error("❌ Error fetching player stats:", error);
      });

    // Fetch Match Stats
    fetch("http://localhost:5001/api/match-stats")
      .then((response) => response.json())
      .then((data) => {
        setMatchStats(data);
      })
      .catch((error) => {
        console.error("❌ Error fetching match stats:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return <ActivityIndicator size="large" color="#2563eb" />;

  if (!playerStats || !matchStats)
    return (
      <Text style={{ textAlign: "center", marginTop: 40, color: "#ccc", fontSize: 18 }}>
        ⚠️ Failed to load player stats or match data.
      </Text>
    );

  // Compute win rate and prepare chart data
  const wins = playerStats.wins;
  const losses = playerStats.losses;
  const totalMatches = wins + losses;
  const winRate = totalMatches > 0 ? (wins / totalMatches) * 100 : 0;
  const screenWidth = Dimensions.get("window").width;

  const barChartData = {
    labels: ["Wins", "Losses"],
    datasets: [
      {
        data: [wins, losses],
      },
    ],
  };

  const pieChartData = [
    { name: "Wins", population: wins, color: "green", legendFontColor: "#fff", legendFontSize: 14 },
    { name: "Losses", population: losses, color: "red", legendFontColor: "#fff", legendFontSize: 14 },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#02102B" }}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: 20 }}>
          {/* Header */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
            <Text style={{ color: "#fff", fontSize: 25, fontWeight: "600" }}>Player Stats</Text>
            <AntDesign name="barschart" size={24} color="white" />
          </View>

          {/* Player Stats Box */}
          <View style={{ backgroundColor: "#1E293B", padding: 16, borderRadius: 10, borderWidth: 0.4, borderColor: "#3B82F6", shadowColor: "#3B82F6", marginTop: 20 }}>
            <Text style={{ color: "#60A5FA", fontSize: 18, fontWeight: "bold" }}>Player: {playerStats.name}</Text>
            <Text style={{ color: "#22C55E", fontSize: 16, fontWeight: "600" }}>Wins: {wins}</Text>
            <Text style={{ color: "#EF4444", fontSize: 16, fontWeight: "600" }}>Losses: {losses}</Text>
          </View>

          {/* Win/Loss Bar Chart */}
          <Text style={{ color: "#60A5FA", fontSize: 19, fontWeight: "bold", marginTop: 20 }}>Win/Loss Statistics</Text>
          <BarChart
            data={barChartData}
            width={screenWidth - 40}
            height={220}
            yAxisLabel=""
            chartConfig={{
              backgroundColor: "#1e1e1e",
              backgroundGradientFrom: "#1e1e1e",
              backgroundGradientTo: "#1e1e1e",
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={{ marginVertical: 8, borderRadius: 8 }}
          />

          {/* Win Rate Pie Chart */}
          <Text style={{ color: "#60A5FA", fontSize: 19, fontWeight: "bold", marginTop: 20 }}>Win Rate</Text>
          <PieChart
            data={pieChartData}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: "#1e1e1e",
              backgroundGradientFrom: "#1e1e1e",
              backgroundGradientTo: "#1e1e1e",
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />

          {/* Match History */}
          <Text style={{ color: "#60A5FA", fontSize: 19, fontWeight: "bold", marginTop: 20 }}>
            Match History
          </Text>
          {matchStats.length > 0 ? (
            matchStats.map((match, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: match.result === "Win" ? "#065f46" : "#991b1b",
                  padding: 16,
                  borderRadius: 10,
                  borderWidth: 0.3,
                  borderColor: match.result === "Win" ? "#22C55E" : "#EF4444",
                  marginTop: 12,
                }}
              >
                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                  {match.opponent} - {match.result}
                </Text>
                <Text style={{ color: "#d1d5db", fontSize: 16 }}>{match.score}</Text>
              </View>
            ))
          ) : (
            <Text style={{ color: "#9ca3af", fontSize: 18, marginTop: 12 }}>
              No match history available.
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
