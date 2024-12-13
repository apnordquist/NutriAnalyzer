"use client";

import { View } from "react-native";
import React, { useState } from "react";
import Button from "./button";
import CalorieNinja from "./calorie-ninja";

const NewRecipe = () => {
  //form states
  const [id, setId] = useState(Math.random() * 27);
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  //create entry
  const handleNameChange = (event) => setName(event.target.value);
  const handleIngredientChange = (event) => setIngredients(event.target.value);
  const handleDirectionChange = (event) => setDirections(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault;

    let newRecipe = {
      id: id,
      name: name,
      ingredients: CalorieNinja(ingredients),
      directions: directions,
    };

    setName("");
    setIngredients("");
    setDirections("");
    setId(Math.random() * 27);
  };
  //form  field
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          height: 72,
          alignItems: "center",
          backgroundColor: "#dcc690",
          padding: 10,
          marginTop: 40,
          marginBottom: 20,
        }}
      >
        <form>
          <input
            value={name}
            onChange={handleNameChange}
            placeholder="Recipe Name"
            style={{ fontWeight: "bold", fontSize: 40, textAlign: "center" }}
          ></input>
          <textarea
            value={ingredients}
            onChange={handleIngredientChange}
            placeholder="ingredients"
            style={{ fontSize: 20 }}
          ></textarea>
          <textarea
            value={directions}
            onChange={handleDirectionChange}
            placeholder="directions"
            style={{ fontSize: 20 }}
          ></textarea>
        </form>
      </View>

      <Button
        type="submit"
        onClick={handleSubmit}
        title="save"
        destination="/recipes/recipe-list"
      ></Button>
    </View>
  );
};

export default NewRecipe;
