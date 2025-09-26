import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Target-App",
          headerStyle: { backgroundColor: "#ddb52e" },
          headerTintColor: "#4e0329",
        }}
      />
    </Stack>
  );
}
