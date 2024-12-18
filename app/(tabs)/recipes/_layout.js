import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="recipe-list" />
      <Stack.Screen name="add-recipe" />
      <Stack.Screen name="view-recipe" />
    </Stack>
  );
};

export default _layout;
