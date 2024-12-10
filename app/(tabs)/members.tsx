import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MembersHeader from "@/components/Member Components/MembersHeader";
import MembersList from "@/components/Member Components/MembersList";

const Members = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View>
      <MembersHeader />
      <MembersList />
    </View>
  );
};

export default Members;

const styles = StyleSheet.create({});
