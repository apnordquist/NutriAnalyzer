import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const RecipeEntry = ({ recipe }) => {
  const navigation = useNavigation();
  const ingredients = recipe.ingredients.map((ingredient) => ingredient.name);
  const quantities = recipe.ingredients.map(
    (ingredient) => ingredient.quantity
  );
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate("view-recipe", {
            id: recipe.id,
            name: recipe.name,
            quantities: quantities,
            ingredients: ingredients,
            directions: recipe.directions,
          })
        }
      >
        <Text>{recipe.name}</Text>
      </Pressable>
    </View>
  );
};

export default RecipeEntry;
