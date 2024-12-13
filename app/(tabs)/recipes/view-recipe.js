import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import Nutrition from "../../../componenets/nutritionfacts";

const ViewRecipe = ({ recipe }) => {
  const option = true;
  const [id, name, items, directions] = recipe;
  const handleSelect = () => {
    option ? (option = true) : (option = false);
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
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Pressable
          onPress={handleSelect}
          style={{ backgroundColor: "#ccdc90", width: "50%" }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              margin: 12,
              fontSize: 20,
            }}
          >
            DIRECTIONS
          </Text>
        </Pressable>
        <Pressable onPress={handleSelect}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#1e1e1e",
              textAlign: "center",
              margin: 12,
              fontSize: 20,
            }}
          >
            INGREDIENTS
          </Text>
        </Pressable>
      </View>
      {option ? (
        <View>
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
            <Text>{items}</Text>
          </ScrollView>
        </View>
      )}

      <Nutrition recipe="{recipe}" />
    </View>
  );
};

export default ViewRecipe;

const styles = StyleSheet.create({
  Title:{},
  Options:{}
})