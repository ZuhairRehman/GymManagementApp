import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { membersData } from "../../costants/data";
import React from "react";

const MembersList = () => {
  return (
    <View>
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
        Member Management
      </Text>
      <FlatList
        data={membersData}
        renderItem={(member) => (
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Text>First Name: {member.item.firstName}</Text>
              <Text>Last Name: {member.item.lastName}</Text>
              <Text>Phone no:{member.item.phoneNumber}</Text>
            </View>
            <View>
              <Image
                source={{ uri: member.item.imageUrl }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default MembersList;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#DDDDDDFF",
    borderRadius: 10,
    elevation: 2,
    width: 350,
    height: 150,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "auto",
  },
  card: {
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 5,
    borderRadius: 10,
  },
});
