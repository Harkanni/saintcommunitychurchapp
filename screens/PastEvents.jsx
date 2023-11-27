import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import style from './pastEvent.style';
import { PastEvents as PastEventsData } from '../constants/EventsData';
import { FlatList } from 'react-native';
import EventRow from '../components/EventRow';

const PastEvents = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../assets/images/bg_dark.jpg')}
        style={style.imageBackground}
        resizeMode='cover'
      >
         <FlatList
         data={PastEventsData}
         keyExtractor={(item, index) => index}
         renderItem={({ item }) => (<EventRow item={item} />)}
        />
      </ImageBackground>
    </View>
  );
};

export default PastEvents;
