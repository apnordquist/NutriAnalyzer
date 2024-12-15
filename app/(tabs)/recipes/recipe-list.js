"use client";

import { View, Pressable, Text, ScrollView, Button } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, useNavigation } from "expo-router";
import RecipeEntry from "../../../componenets/recipe-entry";
import ToShopping from "../../../componenets/add-shopping";

// import { useUserAuth } from "../../_utils/auth-context";

export default function Recipes() {
  // const { user } = useUserAuth();
  const recipeData = require("./recipes.json");
  const navigation = useNavigation();
  const [shoppingList, setShoppingList] = useState([]);

  const updateList = (newList) => {
    newList.map((ingredient) => {
      setShoppingList([...shoppingList, ingredient]);
    });
    console.log(shoppingList);
  };

  // useEffect(() => {
  //   if (user) {
  //     dbGetItems(user.uid, setRecipeList);
  //   }
  // }, [user]);
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
      {/* <Text
        style={{
          textAlign: "right",
          padding: 5,
        }}
      >
        add to shopping list
      </Text> */}
      <ScrollView>
        {recipeData.map((recipe) => (
          <View>
            <RecipeEntry key={recipe.id} recipe={recipe} />
            <ToShopping ingredients={recipe.ingredients} getList={updateList} />
          </View>
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
      <Text>shopping list</Text>
      {shoppingList.map((item) => (
        <Text>{item}</Text>
      ))}
    </View>
  );
}
