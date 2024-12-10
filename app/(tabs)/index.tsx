import { View, Text, ScrollView } from "react-native";
import React from "react";
import OverviewHeader from "@/components/Overview Components/OverviewHeader";
import TotalMembers from "@/components/Overview Components/TotalMembers";
import UpcomingRenewals from "@/components/Overview Components/UpcomingRenewals";
import NewMembers from "@/components/Overview Components/NewMemebers";
import MemberCheckIn from "@/components/Overview Components/MemberCheckIn";

const OverviewScreen = () => {
  return (
    <ScrollView>
      <OverviewHeader />
      <Text
        style={{
          fontSize: 20,
          paddingHorizontal: 20,
          color: "#686583",
          fontWeight: "bold",
        }}
      >
        Overview
      </Text>
      <UpcomingRenewals />
      <MemberCheckIn />
      <NewMembers />
      <TotalMembers />
    </ScrollView>
  );
};

export default OverviewScreen;
