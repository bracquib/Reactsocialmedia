import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font'
import { useCallback } from 'react';
import Tabs from './src/components/Tabs';
import * as SplashScreen from 'expo-splash-screen';
import Welcome from './src/screens/Welcome';

const Stack = createNativeStackNavigator()
SplashScreen.preventAutoHideAsync()
const App = () => {
  const [fontsLoaded] = useFonts({
    black: require('./src/assets/fonts/Poppins-Black.ttf'),
    regular: require('./src/assets/fonts/Poppins-Regular.ttf'),
    bold: require('./src/assets/fonts/Poppins-Bold.ttf'),
    medium: require('./src/assets/fonts/Poppins-Medium.ttf'),
    mediumItalic: require('./src/assets/fonts/Poppins-MediumItalic.ttf'),
    semiBold: require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    semiBoldItalic: require('./src/assets/fonts/Poppins-SemiBoldItalic.ttf'),
})
const onLayoutRootView = useCallback(async () => {
  if (fontsLoaded) {
      await SplashScreen.hideAsync()
  }
}, [fontsLoaded])

if (!fontsLoaded) {
  return null
}
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
    <NavigationContainer>
    <Stack.Navigator>
                    <Stack.Screen
                        name="Welcome"
                        component={Welcome}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="BottomTabNavigation"
                        component={Tabs}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App