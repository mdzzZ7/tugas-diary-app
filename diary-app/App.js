import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DiaryListScreen from './src/screens/DiaryListScreen';
import { 
  useFonts,
  Poppins_400Regular, 
  Poppins_600SemiBold,
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Memuat Font...</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
        <DiaryListScreen />
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}