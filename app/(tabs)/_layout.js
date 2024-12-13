import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({}) => (
            <FontAwesome name="home" size={24} color="black" />
          ),
        }}
      />
      ,
      <Tabs.Screen
        name="recipes"
        href="/recipes/recipe-list"
        options={{
          tabBarIcon: ({}) => (
            <FontAwesome6 name="burger" size={24} color="black" />
          ),
        }}
      />
      ,
      <Tabs.Screen
        name="add-recipe"
        options={{
          href: null,
          tabBarIcon: ({}) => (
            <FontAwesome6 name="utensils" size={24} color="black" />
          ),
        }}
      />
      ,
      <Tabs.Screen
        name="shoppinglist"
        options={{
          tabBarIcon: ({}) => (
            <FontAwesome6 name="list" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
