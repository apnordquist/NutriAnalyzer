import { View, Button } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const Index = () => {
  const navigator = useNavigation();
  return (
    <View
      style={styles.main}
    >

      <Button
        title="Login"
        onPress={() => navigator.navigate("(tabs)")}
      ></Button>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  
    main: {
    width:"75%",
    justifyContent: "center",
    alignContent: "center",
    margin: "auto"
    },
});
