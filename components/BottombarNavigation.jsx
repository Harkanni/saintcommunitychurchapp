import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import UpcomingEvents from '../screens/UpcomingEvents';
import PastEvents from '../screens/PastEvents';

const Tab = createBottomTabNavigator();
const screenOptions = {
//   tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    //   position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
    backGroundColor: 'red'
  }
};
const BottombarNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        ...screenOptions,
        tabBarBadge: 6,
        tabBarActiveBackgroundColor: 'red',
        tabBarStyle: {
          ...screenOptions.tabBarStyle,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          overflow: 'hidden',
          borderWidth: 1,
        },
        tabBarLabelStyle: {
         fontSize: 20,
         fontFamily: 'semibold',
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
      })}
    >
      <Tab.Screen
        name='Upcoming'
        component={UpcomingEvents}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? COLORS.lightWhite : COLORS.gray2}
              />
            );
          }
        }}
      ></Tab.Screen>

      <Tab.Screen
        name='Past'
        component={PastEvents}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? COLORS.lightWhite : COLORS.gray2}
              />
            );
          }
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottombarNavigation;
