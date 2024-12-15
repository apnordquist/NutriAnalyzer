"use client";

import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

const ToShopping = ({ ingredients, getList }) => {
  const [isDisabled, setDisabled] = useState(false);
  const ingredientList = ingredients.map((ingredient) => ingredient.name);

  const addToShopping = () => {
    setDisabled(true);
    getList(ingredientList);
  };
  return (
    <View>
      <Pressable onPress={addToShopping} disabled={isDisabled}>
        <Text>add</Text>
      </Pressable>
    </View>
  );
};

export default ToShopping;
