import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{ height: "100%" }}>
      <Text style={styles.Welcome}>Welcome, User!</Text>
      <View style={styles.Menu}>
        <Button
          title="View Recipes"
          onPress={() => navigation.navigate("recipes")}
        />
        <Button
          title="Add Recipes"
          onPress={() => navigation.navigate("add-recipe")}
        />
        <Button
          title="Shopping List"
          onPress={() => navigation.navigate("shoppinglist")}
        />
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
