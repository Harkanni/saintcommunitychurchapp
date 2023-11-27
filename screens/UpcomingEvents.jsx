import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import style from './upcomingEvent.style';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
import { FlatList } from 'react-native';
import { UpcomingEvents as UpcomingEventsData } from '../constants/EventsData';
import EventRow from '../components/EventRow';

const UpcomingEvents = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../assets/images/bg_dark.jpg')}
        style={style.imageBackground}
        resizeMode='cover'
      >
        <FlatList
         data={UpcomingEventsData}
         keyExtractor={(item, index) => index}
         renderItem={({ item }) => (<EventRow item={item} />)}
        />
      </ImageBackground>
    </View>
  );
};

export default UpcomingEvents;
