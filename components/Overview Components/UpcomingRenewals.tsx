import { StyleSheet, Text, View, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "../../costants/COLORS";
import React from "react";
import CircleGraph from "./CircleGraph";

const UpcomingRenewals = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <Text style={{ color: "#323743", fontWeight: "700" }}>
          Upcoming Renewals
        </Text>
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
          <Text style={styles.number}>35</Text>
        </Pressable>
        <View style={styles.statsRow}>
          <AntDesign name="caretdown" size={16} color="green" />
          <Text>55%</Text>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
          <CircleGraph />
        </Pressable>
      </View>
    </View>
  );
};

export default UpcomingRenewals;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Set the main container to row to align children side by side
    width: 350,
    height: 150,
    backgroundColor: "#DDDDDDFF",
    padding: 10,
    marginVertical: 20,
    marginHorizontal: "auto",
    borderRadius: 10,
  },
  leftContainer: {
    flex: 1, // Take up 1 part of the container
    justifyContent: "center", // Center the Graph vertically
    alignItems: "center", // Center the Graph horizontally
  },
  rightContainer: {
    flex: 2, // Take up 2 parts of the container, giving more space to this section
    justifyContent: "center", // Center the content vertically
  },
  number: {
    fontSize: 32,
    color: COLORS.desc,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
