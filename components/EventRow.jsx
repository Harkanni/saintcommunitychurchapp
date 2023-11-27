import { View, Text, } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
import style from './EventRow.style.js';

const EventRow = ({ item }) => {
  return (
    <View style={style.eventWrapper}>
      <View style={style.eventHeader}>
        <View style={style.eventDate}>
          <FontAwesome5 name='calendar-day' size={16} color='black' />
          <Text>{item.date}</Text>
        </View>
        <View style={style.eventClock}>
          <FontAwesome5 name='clock' size={16} color='black' />
          <Text>{item.time}</Text>
        </View>
        <View style={style.eventAge}>
          <FontAwesome5 name='calendar-day' size={16} color='black' />
          <Text>{item.age}</Text>
        </View>
      </View>

      <View style={style.eventContainer}>
        <Text style={{ fontSize: SIZES.small, color: COLORS.gray }}>
          Event Info
        </Text>
        <Text
          style={{
            fontSize: SIZES.large,
            fontWeight: 'bold',
            paddingVertical: SIZES.xSmall
          }}
        >
          {item.event_title}
        </Text>
        <Text
          style={{
            textAlign: 'justify',
            fontFamily: 'light',
            fontSize: SIZES.small + 0.5,
            letterSpacing: -0.1
          }}
        >
         {item.event_description.trim()}
        </Text>
      </View>
    </View>
  );
};

export default EventRow;
