import { Text, View } from "react-native";
import React, { Component } from "react";

const Nutrition = ({ recipe }) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: "0%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 4,
        backgroundColor: "#ccdc90",
        gap: 2.5,
      }}
    >
      <hr style={{ width: "100%" }} />
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "1e1e1e" }}>
        {recipe}
      </Text>

      <hr style={{ width: "100%" }} />

      <Text style={{ color: "#1e1e1e" }}>per serving (# g)</Text>

      <Text style={{ fontSize: 20, fontWeight: "bold", color: "1e1e1e" }}>
        Calories: #
      </Text>

      <hr style={{ width: "100%" }} />

      <Text style={{ color: "#1e1e1e" }}>Fat ## g</Text>

      <hr style={{ width: "100%" }} />

      <Text style={{ color: "#1e1e1e" }}>Carbohydrates ## g</Text>

      <hr style={{ width: "100%" }} />

      <Text style={{ color: "#1e1e1e" }}>Proteins ##g</Text>

      <hr style={{ width: "100%" }} />

      <Text style={{ color: "#1e1e1e" }}>Cholesterol ## mg</Text>

      <hr style={{ width: "100%" }} />

      <Text style={{ color: "#1e1e1e" }}>Sodium ## g</Text>

      <hr style={{ width: "100%" }} />
    </View>
  );
};

export default Nutrition;
