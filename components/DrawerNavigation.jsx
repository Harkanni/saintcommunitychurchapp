import 'react-native-gesture-handler';

import React from 'react';
import { View, Text } from 'react-native';
import { SimpleLineIcons, FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
// import style from './drawerNavigation'
import { Home } from '../screens';
import {
  DrawerItemList,
  createDrawerNavigator
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Blog from '../screens/Blog';
import Events from '../screens/Events';
import HomeStackNavigator from './StackNavigator';
import { SafeAreaView } from 'react-native';
import { Image } from 'react-native';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomWidth: 1,
                backgroundColor: 'red'
              }}
            >
               <Image
                  source={require('../assets/images/bg_dark.jpg')}
                  style={{height: '100%', width: '100%' }}
                  resizeMode='cover'
               />
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 280
        },
        headerStyle: {
          backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        drawerActiveTintColor: 'blue',
        drawerLabelStyle: {
          color: '#111'
        },
        headerShown: false
      }}
    >
      <Drawer.Screen
        name='Home'
        options={{
          drawerLabel: 'Bact to Home',
          title: 'Home',
          drawerIcon: () => (
            <FontAwesome5 name='home' size={20} color='black' />
          )
        }}
        component={HomeStackNavigator}
      />

      {/* EVENTS SCREEN */}
      <Drawer.Screen
        name='Events'
        options={{
          drawerLabel: 'Events',
          title: 'Events',
          drawerIcon: () => (
            <FontAwesome5 name='calendar-day' size={20} color='black' />
          )
        }}
        component={Events}
      />
      {/* END OF EVENTS SCREEN */}

      {/* Blogs SCREEN */}
      <Drawer.Screen
        name='Blogs'
        options={{
          drawerLabel: 'Blogs',
          title: 'Blogs',
          drawerIcon: () => (
            <MaterialIcons name='my-library-books' size={24} color='black' />
          )
        }}
        component={Blog}
      />
      {/* END OF Blogs SCREEN */}

      {/* Prayers SCREEN */}
      <Drawer.Screen
        name='Prayers'
        options={{
          drawerLabel: 'Prayers',
          title: 'Prayers',
          drawerIcon: () => (
            <FontAwesome5 name='book-reader' size={24} color='black' />
          )
        }}
        component={Blog}
      />
      {/* END OF Prayers SCREEN */}

      {/* Books SCREEN */}
      <Drawer.Screen
        name='Books'
        options={{
          drawerLabel: 'Books',
          title: 'Books',
          drawerIcon: () => (
            <Feather name='server' size={24} color='black' />
          )
        }}
        component={Blog}
      />
      {/* END OF Books SCREEN */}

      {/* Gallery SCREEN */}
      <Drawer.Screen
        name='Gallery'
        options={{
          drawerLabel: 'Gallery',
          title: 'Gallery',
          drawerIcon: () => (
            <FontAwesome5 name='image' size={24} color='black' />
          )
        }}
        component={Blog}
      />
      {/* END OF Gallery SCREEN */}

      {/* Find Church SCREEN */}
      <Drawer.Screen
        name='Find Church'
        options={{
          drawerLabel: 'Find Church',
          title: 'Blogs',
          drawerIcon: () => (
            <FontAwesome5 name='search' size={24} color='black' />
          )
        }}
        component={Blog}
      />
      {/* END OF Find Church SCREEN */}

      {/* About SCREEN */}
      <Drawer.Screen
        name='About'
        options={{
          drawerLabel: 'About',
          title: 'About',
          drawerIcon: () => (
            <FontAwesome5 name='church' size={24} color='black' />
          )
        }}
        component={Blog}
      />
      {/* END OF About SCREEN */}

      {/* Contact SCREEN */}
      <Drawer.Screen
        name='Contact'
        options={{
          drawerLabel: 'Contact',
          title: 'Contact',
          drawerIcon: () => (
            <MaterialIcons name='message' size={24} color='black' />
          )
        }}
        component={Blog}
      />
      {/* END OF Prayers SCREEN */}

    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
