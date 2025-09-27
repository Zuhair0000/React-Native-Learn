import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#ddb52e" },
        headerTintColor: "#4e0329",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Meal Categories",
        }}
      />

      <Stack.Screen
        name="MealsScreen"
        options={{
          title: "Meals Overview",
        }}
      />
    </Stack>
  );
}
