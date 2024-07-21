// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import HomeScreenStack from './Components/HomeScreen'
import SummaryScreen from './Components/SummaryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {height: 70, borderTopLeftRadius: 5,borderTopRightRadius: 5, backgroundColor: '#3498db'},
          tabBarLabelStyle: {fontSize: 15},
          tabBarActiveTintColor: 'white', 
          tabBarInactiveTintColor: '#051923',
          headerStyle: {
            backgroundColor: '#0582ca',
          },
          headerTintColor: 'white'
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreenStack}
          options={{ headerShown: false,
            tabBarIcon: () => {
              return(
                <View style = {{padding: 6}}>
                <Image
                source={require("./assets/expense.png")}
                style={{height: 30, width:30}}
                 />
                </View>
                );
              }
           }}
        />
        <Tab.Screen name="Summary" component={SummaryScreen} 
          options={{
            tabBarIcon: () => {
              return(
                <Image
                  source={require("./assets/summary.png")}
                  style={{ height: 30, width: 30}}/>
                );
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
