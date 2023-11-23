import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import style from './upcomingEvent.style';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
import { FlatList } from 'react-native';

const UpcomingEvents = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../assets/images/bg_dark.jpg')}
        style={style.imageBackground}
        resizeMode='cover'
      >
        {/* <FlatList /> */}
      </ImageBackground>
    </View>
  );
};

export default UpcomingEvents;
