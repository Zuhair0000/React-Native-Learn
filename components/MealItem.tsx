import React from "react";
import { Text, View } from "react-native";

interface props {
  title: string;
}

export default function MealItem({ title }: props) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
