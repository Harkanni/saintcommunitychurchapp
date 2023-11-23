import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import style from './pastEvent.style';

const PastEvents = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../assets/images/bg_dark.jpg')}
        style={style.imageBackground}
        resizeMode='cover'
      ></ImageBackground>
    </View>
  );
};

export default PastEvents;
