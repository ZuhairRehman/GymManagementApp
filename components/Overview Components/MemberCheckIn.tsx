import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const MemberCheckIn = () => {
  return (
    <View style={styles.container}>
      <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
        <View style={styles.rightContainer}>
          <Text style={{ color: "#323743", fontWeight: "700" }}>
            Member Check-in
          </Text>
          <Text style={styles.number}>Check-ins today:</Text>
          <Text style={styles.size}>55</Text>
          <Text style={styles.number}>Check-ins this week:</Text>
          <Text style={styles.size}>545</Text>
          <Text style={styles.number}>Monthly Check-ins:</Text>
          <Text style={styles.size}>1025</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MemberCheckIn;

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
    fontSize: 10,
  },
  size: {
    fontSize: 10,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
