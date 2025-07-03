// app/_layout.tsx
import { Slot } from 'expo-router';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { useAuth } from '../hooks/useAuth'; // Adjust the path as necessary
// import LoginScreen from './login';



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee', // Example primary color
    accent: '#03dac4', // Example accent color
    background: '#f6f6f6', // Example background color
    surface: '#ffffff', // Example surface color
    text: '#000000', // Example text color
  },
}


export default function RootLayout() {
  // const { user, intializing } = useAuth();

  // if (initilializing){
  //   return null; // or a loading spinner
  // }

// If user is not authenticated, redirect to login
//   if (!user) {
//   return (
//     <PaperProvider>
//         <SafeAreaProvider>
//           {/* Render nested routes */}
//           <LoginScreen />
//         </SafeAreaProvider>
//     </PaperProvider>
//   );
// }

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        {/* Render nested routes */}
        <Slot />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
