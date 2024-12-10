import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Trainers from "./trainers";
import Accounting from "./accounting";
import Members from "./members";
import Overview from ".";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          //tabBarActiveTintColor: "#E7E55",
          tabBarActiveTintColor: "#e7ee55",
          tabBarInactiveTintColor: "#B4AFA9",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "transparent",
            paddingVertical: 12,
            paddingHorizontal: 12,
            height: 75,
            elevation: 0,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontWeight: "bold",
            color: "#B4AFA9",
            fontSize: 10,
            marginTop: 5,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="view-grid-plus-outline"
                size={36}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="members"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="account-multiple-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="trainers"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="human-edit"
                size={24}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="accounting"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name="receipt-outline" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
