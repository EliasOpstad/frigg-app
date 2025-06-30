import { Stack } from "expo-router";

export default function RootLayout() {
  return(

    // Ulike sider:
    // Login
    // Home
    // Skjema
    // Mine økter
    // Profil
    // NotFound
    

  <Stack>
    <Stack.Screen name="index" options={{ title: "Home" }} />
    <Stack.Screen name="login" options={{ title: "Login" }} />
    <Stack.Screen name="form" options={{ title: "Form" }} />
    <Stack.Screen name="my-sessions" options={{ title: "My Sessions" }} />
    <Stack.Screen name="profile" options={{ title: "Profile" }} />
    <Stack.Screen name="not-found" options={{ title: "Not Found" }} />
  </Stack>
);
}
