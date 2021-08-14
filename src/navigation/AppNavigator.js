import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import CoinsList from "../screens/CoinsList";
import WatchList from "../screens/WatchList";

//Styles
import { COLORS, FONTS, icons } from "../constants"
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'CoinsList') {
                iconName = 'bitcoin';
              } else if (route.name === 'WatchList') {
                iconName = 'eye';
              }
  
              // You can return any component that you like here!
              return <FontAwesome name={iconName} size={size} color={color} />
            },
            tabBarLabel: ({ focused, color }) => {
                let text;
    
                if (route.name === 'CoinsList') {
                  text = 'Coins';
                } else if (route.name === 'WatchList') {
                  text = 'Watch List';
                }
    
                // You can return any component that you like here!
                return (
                  <Text style={styles.tabText, {color: focused ? COLORS.primary : COLORS.black}}>{text}</Text>
                )},
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.black,
            tabBarShowLabel: true
          })}
        >
            <Tab.Screen
                name="CoinsList"
                component={CoinsList}
                options={{
                    headerTintColor: COLORS.white2,   
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                      },
                    headerTitleAlign: 'center',
                    title: "Coins",
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="WatchList"
                component={WatchList}
                title="Watch List"
            />
        </Tab.Navigator>
    )
}

const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Home'}
            >
          <Stack.Screen
            name="Home"
            component={Tabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    },
    tabText: {
        fontFamily: "Roboto-Regular", 
        fontSize: 12, 
        lineHeight: 22,
        
    }
})

export default AppNavigator;