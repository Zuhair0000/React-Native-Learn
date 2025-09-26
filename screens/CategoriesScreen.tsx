import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, ListRenderItemInfo } from "react-native";
import CategoryGridTile from "@/components/CategoryGridTile";

const renderCategoryItem = (
  itemData: ListRenderItemInfo<{ id: string; title: string; color: string }>
) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
