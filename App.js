import React from 'react'
import { View, StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";


const App = () => {


  let [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
});

export default App
