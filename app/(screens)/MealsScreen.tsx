import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../../data/dummy-data";
import MealItem from "@/components/MealItem";

export default function MealsScreen() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
  const navigation = useNavigation<any>();

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle =
      CATEGORIES.find((cat) => cat.id === categoryId)?.title ?? "Meals";

    navigation.setOptions({
      title: categoryTitle,
      headerStyle: { backgroundColor: "#ddb52e" },
      headerTintColor: "#4e0329",
    });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            mealId={item.id}
            title={item.title}
            image={item.imageUrl}
            durability={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
