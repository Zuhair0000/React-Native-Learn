import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MealsScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

export const options = {
  title: "Meal-Screen",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
