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

            <View style={style.outerContainer}>
              <View style={style.listContainer}>
                <View style={style.subtitleContainer}>
                  <Text style={style.subtitle}>Ingredients</Text>
                </View>
                {item.ingredients.map((ingredient: string) => (
                  <View key={ingredient} style={style.listItem}>
                    <Text style={style.itemText}>{ingredient}</Text>
                  </View>
                ))}

                <View style={style.subtitleContainer}>
                  <Text style={style.subtitle}>Steps</Text>
                </View>
                {item.steps.map((step: string, index: string) => (
                  <View key={step} style={style.listItem}>
                    <Text style={style.itemText}>
                      {index + 1} - {step}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 10,
    color: "white",
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
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 2,
    padding: 6,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
  outerContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
