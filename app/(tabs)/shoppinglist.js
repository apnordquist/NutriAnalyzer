import { View, Text, ScrollView, Button } from "react-native";
import React, { useState } from "react";

const ShoppingList = () => {
  const [ShoppingList, setShoppingList] = useState([]);
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
        {ShoppingList.map((item) => {
          <View>
            <Text>{item}</Text>
            <Button></Button>
          </View>;
        })}
      </ScrollView>
    </View>
  );
};

export default ShoppingList;
