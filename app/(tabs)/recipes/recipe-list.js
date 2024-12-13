import { View, Pressable, Text, ScrollView } from "react-native";
import React from "react";
import Recipe from "../../../componenets/recipe-entry";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import RecipeData from "../app/recipes.json";

export default function Recipes() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 40,
          textAlign: "center",
          marginTop: 40,
          marginBottom: 20,
        }}
      >
        RECIPE LIST
      </Text>
      <Text
        style={{
          textAlign: "right",
          padding: 5,
        }}
      >
        add to shopping list
      </Text>
      <ScrollView>
        {RecipeData.map((recipe) => (
          <Recipe name={recipe.name} key={recipe.id} />
        ))}
      </ScrollView>

      <Pressable
        style={{
          position: "absolute",
          bottom: "3%",
          right: "3%",
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: 50,
          borderRadius: 50,
          backgroundColor: "#a6dc90",
        }}
      >
        <Link href="/recipes/add-recipe">
          <AntDesign name="addfile" size={30} color="white" />
        </Link>
      </Pressable>
    </View>
  );
}
