import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealItem from "@/components/MealItem";

export default function MealsScreen() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem title={item.title} />}
      />
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
