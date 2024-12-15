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
        <Text
          style={{
            backgroundColor: "#ccdc90",
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            padding: 6,
          }}
        >
          ADD
        </Text>
      </Pressable>
    </View>
  );
};

export default ToShopping;
