"use client";

import { View, Text, TextInput, Button, ScrollView } from "react-native";
import React, { useState } from "react";
import NewIngredient from "../../../componenets/add-ingredient";
import { Link, useNavigation } from "expo-router";
import CalorieNinja from "../../../componenets/calorie-ninja";

const NewRecipe = () => {
  const navigation = useNavigation();
  //form states
  const [id, setId] = useState(Math.random() * 27);
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState("");
  const [nutrition, setNutrition] = useState([]);
  //create entry
  const handleIngredients = (newIngObj) => {
    setIngredients([...ingredients, newIngObj]);
  };

  const handleNameChange = (event) => setName(event.target.value);
  const handleDirectionChange = (event) => setDirections(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();

    setNutrition(CalorieNinja(ingredients));

    let newRecipe = {
      id: id,
      name: name,
      ingredients: ingredients,
      directions: directions,
      nutrition: nutrition,
    };

    console.log(newRecipe);

    navigation.navigate("recipe-list");

    setName("");
    setIngredients([]);
    setDirections("");
    setNutrition([]);
    setId(Math.random() * 27);
  };
  //form  field
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          height: 72,
          backgroundColor: "#dcc690",
          padding: 10,
          marginTop: 40,
          marginBottom: 20,
        }}
      >
        <TextInput
          value={name}
          onChange={handleNameChange}
          placeholder="Recipe Name"
          style={{ fontWeight: "bold", fontSize: 40, textAlign: "center" }}
          required
        ></TextInput>
      </View>
      <ScrollView>
        {ingredients.map((ingredient) => (
          <View
            key={ingredient.id}
            style={{ flexDirection: "row", marginHorizontal: "auto" }}
          >
            <Text style={{ margin: 2 }}>{ingredient.quantity}</Text>
            <Text style={{ margin: 2 }}>{ingredient.name}</Text>
          </View>
        ))}

        <NewIngredient onAddItemFunc={handleIngredients} />
        <TextInput
          value={directions}
          onChange={handleDirectionChange}
          placeholder="directions"
          style={{ fontSize: 20, margin: 10 }}
          multiline
        ></TextInput>
      </ScrollView>

      <Button type="submit" color="#ccdc90" onPress={handleSubmit} title="save">
        Save
      </Button>
    </View>
  );
};

export default NewRecipe;
