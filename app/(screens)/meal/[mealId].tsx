import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../../data/dummy-data";

export default function MealDetailScreen() {
  const { mealId } = useLocalSearchParams<{ mealId?: string | string[] }>();
  const navigation = useNavigation<any>();

  const selectedMeal = MEALS.find((meal) => meal.id === (mealId as string));
  useLayoutEffect(() => {
    const mealTitle = selectedMeal?.title ?? "Meal Detail";

    navigation.setOptions({
      title: mealTitle,
    });
  }, [mealId, navigation, selectedMeal]);

  const displayedMeals = selectedMeal ? [selectedMeal] : [];

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <View>
              <Image source={{ uri: item.imageUrl }} style={style.image} />
              <Text style={style.title}>{item.title}</Text>
            </View>
            <View style={style.details}>
              <Text style={style.detailItem}>{item.duration}m</Text>
              <Text style={style.detailItem}>
                {item.complexity.toUpperCase()}
              </Text>
              <Text style={style.detailItem}>
                {item.affordability.toUpperCase()}
              </Text>
            </View>
            <Text>Ingredients</Text>
            {item.ingredients.map((ingredient: string) => (
              <Text key={ingredient}>{ingredient}</Text>
            ))}
            <Text>Steps</Text>
            {item.steps.map((step: string, index: string) => (
              <Text key={step}>
                {index + 1} - {step}
              </Text>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    paddingTop: 10,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
