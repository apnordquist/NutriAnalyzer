import { View, Text, ScrollView } from "react-native";
import React from "react";

const ShoppingList = () => {
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
        Shopping List
      </Text>
      <ScrollView>

      </ScrollView>
    </View>
  );
};

export default ShoppingList;
