"use client";
import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
// import { dbGetItems } from "../_services/recipe-service";

export default function ViewRecipe() {
  const [window, setWindow] = useState(true);
  const route = useLocalSearchParams();
  console.log(route);
  const { id, quantities, ingredients, name, directions } = route;
  console.log(ingredients);

  const handleSwitch = () => {
    window ? setWindow(false) : setWindow(true);
  };
  return (
    <View
      style={{
        display: "flex",
        alignContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Text
        style={{
          height: 72,
          padding: 10,
          fontWeight: "bold",
          fontSize: 40,
          textAlign: "center",
          marginTop: 40,
          marginBottom: 20,
        }}
      >
        {name}
      </Text>
      <View></View>
      {window ? (
        <View>
          <Pressable
            onPress={handleSwitch}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                marginLeft: 12,
                fontSize: 20,
                backgroundColor: "#ccdc90",
                width: "50%",
              }}
            >
              DIRECTIONS
            </Text>

            <Text
              style={{
                fontWeight: "bold",
                color: "#1e1e1e",
                textAlign: "center",
                marginRight: 12,
                fontSize: 20,
                width: "50%",
                backgroundColor: "white",
              }}
            >
              INGREDIENTS
            </Text>
          </Pressable>
          <Text
            style={{
              fontWeight: "bold",
              color: "#1e1e1e",
              textAlign: "center",
              fontSize: 32,
              margin: 24,
            }}
          >
            DIRECTIONS
          </Text>
          <ScrollView>
            <Text style={{ fontSize: 20, margin: 10 }}>{directions}</Text>
          </ScrollView>
        </View>
      ) : (
        <View>
          <Pressable
            onPress={handleSwitch}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#1e1e1e",
                textAlign: "center",
                marginLeft: 12,
                fontSize: 20,
                width: "50%",
                backgroundColor: "white",
              }}
            >
              DIRECTIONS
            </Text>

            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                marginRight: 12,
                fontSize: 20,
                backgroundColor: "#ccdc90",
                width: "50%",
              }}
            >
              INGREDIENTS
            </Text>
          </Pressable>
          <Text
            style={{
              fontWeight: "bold",
              color: "#1e1e1e",
              textAlign: "center",
              fontSize: 32,
              margin: 24,
            }}
          >
            INGREDIENTS
          </Text>
          <ScrollView>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginHorizontal: "auto",
              }}
            >
              <View>
                {quantities.map((quantity) => {
                  return (
                    <Text
                      style={{
                        fontSize: 20,
                        margin: 5,
                        textAlign: "right",
                      }}
                    >
                      {quantity}
                    </Text>
                  );
                })}
              </View>
              <View>
                {ingredients.map((ingredient) => {
                  return (
                    <Text
                      style={{
                        fontSize: 20,
                        margin: 5,
                        textAlign: "left",
                      }}
                    >
                      {ingredient}
                    </Text>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}
