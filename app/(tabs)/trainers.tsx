import { Text, View } from "react-native";
import React from "react";
import MembersHeader from "@/components/Member Components/MembersHeader";
import TrainerProfile from "@/components/Trainer Components/TrainerProfile";

const Trainers = () => {
  return (
    <View>
      <MembersHeader />
      <Text
        style={{
          marginTop: 30,
          marginBottom: 30,
          fontSize: 20,
          paddingHorizontal: 20,
          color: "#686583",
          fontWeight: "bold",
        }}
      >
        Trainer Management
      </Text>
      <TrainerProfile />
    </View>
  );
};

export default Trainers;
