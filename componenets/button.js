import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Button({ title, destination }) {
  return (
    <Pressable>
      <Link style={styles.button} href={destination}>
        <Text style={styles.text}>{title}</Text>
      </Link>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: "auto",
    marginVertical: 10,
    textAlign: "center",
    alignContent: "center",
    verticalAlign: "middle",
    width: "75%",
    height: 64,
    borderRadius: 10,
    backgroundColor: "#a6dc90",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
});
