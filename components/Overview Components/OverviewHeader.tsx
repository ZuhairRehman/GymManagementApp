import { StyleSheet, Text, View, Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";

const OverViewHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "#f1f1f1",
      }}
    >
      <View style={{ paddingHorizontal: 10, paddingVertical: 20, gap: 5 }}>
        <Text style={{ fontSize: 12 }}>Welcome to your Gym,</Text>
        <Text style={{ fontSize: 20 }}>Mohammed Saleem</Text>
      </View>
      <Pressable
        style={{
          width: 60,
          height: 60,
          backgroundColor: "#DDDDDDFF",
          borderRadius: 10,
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={40}
          color="#e7ee55"
        />
      </Pressable>
    </View>
  );
};
export default OverViewHeader;

const styles = StyleSheet.create({});
