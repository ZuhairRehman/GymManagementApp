import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const MembersHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Search members.."
          scrollEnabled={false}
        />
      </View>

      <Pressable style={styles.iconContainer}>
        <MaterialIcons name="person-search" size={28} color="black" />
      </Pressable>
    </View>
  );
};

export default MembersHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 15,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  TextInput: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 12,
    fontWeight: "400",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#C1C0CCFF",
  },
  iconContainer: {
    backgroundColor: "#DDDDDDFF",
    height: 40,
    width: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
