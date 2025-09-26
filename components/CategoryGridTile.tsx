import React from "react";
import {
  Platform,
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface props {
  title: string;
  color: string;
}

export default function CategoryGridTile({ title, color }: props) {
  return (
    <View style={style.gridItem}>
      <Pressable
        style={({ pressed }: PressableStateCallbackType) => [
          style.button,
          pressed ? style.buttonPressed : null,
        ]}
      >
        <View style={[style.innerContainer, { backgroundColor: color }]}>
          <Text style={style.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
