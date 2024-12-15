"use client";

import { Button, TextInput, View } from "react-native";
import React, { useState } from "react";
// import CalorieNinja from "./calorie-ninja";

const NewIngredient = ({ onAddItemFunc }) => {
  //create states
  const [quantity, setQuantity] = useState("");
  const [name, setName] = useState("");
  const [nutrition, setNutrition] = useState([]);
  const [id, setId] = useState(Math.random() * 73);
  //create handlers
  const handleNameChange = (event) => setName(event.target.value);
  const handleQuantityChange = (event) => setQuantity(event.target.value);

  const handleAdd = (event) => {
    event.preventDefault();
    // setNutrition(CalorieNinja(name));

    let newIngredient = {
      id: id,
      quantity: quantity,
      name: name,
      nutrition: nutrition,
    };

    onAddItemFunc(newIngredient);

    setQuantity("");
    setName("");
    setNutrition([]);
    setId(Math.random() * 73);
  };
  return (
    <View style={{ flexDirection: "row", marginHorizontal: "auto" }}>
      <TextInput
        type="text"
        onChange={handleQuantityChange}
        value={quantity}
        placeholder="amount"
        required
      ></TextInput>
      <TextInput
        type="text"
        onChange={handleNameChange}
        value={name}
        placeholder="ingredient"
        required
      ></TextInput>
      <Button type="button" color="#ccdc90" onPress={handleAdd} title="add">
        add
      </Button>
    </View>
  );
};

export default NewIngredient;
