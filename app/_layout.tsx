// app/_layout.tsx
import { Slot } from 'expo-router';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from '../store/'; // om du bruker Redux, eller en Context/Zustand-wrapper

export default function RootLayout() {
  return (
    <PaperProvider>
      <StoreProvider>
        <SafeAreaProvider>
          <Slot />   {/* rendrer ethvert app/index.tsx, app/profile.tsx, osv */}
        </SafeAreaProvider>
      </StoreProvider>
    </PaperProvider>
  )
}
