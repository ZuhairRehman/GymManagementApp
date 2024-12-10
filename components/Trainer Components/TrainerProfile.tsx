import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import React from "react";

const TrainerProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{ color: "#323743", fontWeight: "700" }}>
          Profile View
        </Text>
        <Text style={{ fontSize: 10 }}>
          View detailed profiles of all gym trainers, including specialties and
          certifications.
        </Text>
        <Pressable onPress={() => {}}>
          <Text style={styles.btnText}>View Profiles</Text>
        </Pressable>
      </View>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn.visily.ai/text2design/images/b310581e0d29eee2e5d135db5a0274adb7fb70835576dd29de9804f2634c907a.png",
          }}
        />
      </View>
    </View>
  );
};

export default TrainerProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    width: 350,
    height: 150,
    backgroundColor: "#DDDDDDFF",
    marginHorizontal: "auto",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    width: 200,
  },
  btnText:{
    marginTop: 15,
    backgroundColor: "#"

  },
});
