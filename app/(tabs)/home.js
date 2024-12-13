import { View, Text } from "react-native";
import React from "react";
import Button from "../../componenets/button";

const Home = () => {
  return (
    <View style={{ height: "100%" }}>
      <Text style={styles.Welcome}>Welcome, User!</Text>
      <View style={styles.Menu}>
        <Button title="View Recipes" destination="/recipes/recipe-list" />
        <Button title="Add Recipes" destination="/recipes/add-recipe" />
        <Button title="Shopping List" destination="/shoppinglist" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Welcome: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  Menu: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: "auto",
    gap: 12,
  },
});
