import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function ScreensLayout() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#ddb52e" },
          headerTintColor: "#3f3f35",
          headerTitleAlign: "center",
          contentStyle: { backgroundColor: "#3f3f35" },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Meal Categories",
          }}
        />

        <Stack.Screen name="MealsScreen" />
      </Stack>
    </>
  );
}
