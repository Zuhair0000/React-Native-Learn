import React from "react";
import {
  Image,
  Platform,
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface props {
  title: string;
  image: string;
  durability: string;
  complexity: string;
  affordability: string;
}

export default function MealItem({
  title,
  image,
  durability,
  complexity,
  affordability,
}: props) {
  return (
    <View style={style.maelItem}>
      <Pressable
        style={({ pressed }: PressableStateCallbackType) =>
          pressed ? style.buttonPressed : null
        }
      >
        <View style={style.innerContainer}>
          <View>
            <Image source={{ uri: image }} style={style.image} />
            <Text style={style.title}>{title}</Text>
          </View>
          <View style={style.details}>
            <Text style={style.detailItem}>{durability}m</Text>
            <Text style={style.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={style.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  maelItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
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
