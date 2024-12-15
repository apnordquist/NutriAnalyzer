"use client";

import { View, Button, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const Index = () => {
  const navigator = useNavigation();

  async function HandleSignIn() {
    try {
      navigator.navigate("(tabs)");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.main}>
      <Button
        title="Login"
        onPress={HandleSignIn}
        color= "#ccdc90"
        style={{ backgroundColor: "#ccdc90" }}
      ></Button>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  main: {
    width: "60%",
    justifyContent: "center",
    alignContent: "center",
    margin: "auto",
  },
});
