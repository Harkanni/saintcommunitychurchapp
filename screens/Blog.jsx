import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import style from './event.style';
import { ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Blog = () => {
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
                <TouchableOpacity onPress={() => {}}>
                  <FontAwesome5 name='bars' size={24} color='white' />
                </TouchableOpacity>
                <Text style={style.title}>Blogs</Text>
              </View>
              <TouchableOpacity onPress={() => {}}>
                <FontAwesome5 name='search' size={24} color='white' />
              </TouchableOpacity>
            </View>
          </View>


        </ImageBackground>
      </SafeAreaView>
    );
}

export default Blog