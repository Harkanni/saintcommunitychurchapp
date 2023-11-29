import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import style from './blog.style';
import { ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import DrawerNavigation from '../components/DrawerNavigation';
import BottombarNavigation from '../components/BottombarNavigation';
import { useNavigation } from '@react-navigation/native';
import BlogPosts from '../components/BlogPosts';
import PrayerPosts from '../components/PrayerPosts';


const Prayer = () => {
   const navigation = useNavigation();
  return (
    <SafeAreaView style={style.container}>
      <ImageBackground
        source={require('../assets/images/bg_dark.jpg')}
        style={style.imageBackground}
        resizeMode='cover'
      >
        <View style={style.appBarWrapper}>
          <View style={style.appBar}>
            <View style={style.menuWrapper}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <FontAwesome5 name='bars' size={24} color='white' />
              </TouchableOpacity>
              <Text style={style.title}>Prayers</Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <FontAwesome5 name='search' size={24} color='white' />
            </TouchableOpacity>
          </View>
        </View>

        <PrayerPosts />



      </ImageBackground>
    </SafeAreaView>
  );
};

export default Prayer;
