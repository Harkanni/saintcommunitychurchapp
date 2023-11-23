import { View, Text } from 'react-native';
import React from 'react';
import style from './upcomingEventRow.style.js';

const UpcomingEventRow = () => {
  return (
    <View style={style.eventWrapper}>
      <View style={style.eventHeader}>
        <View style={style.eventDate}>
          <FontAwesome5 name='calendar-day' size={20} color='black' />
          <Text>05th May</Text>
        </View>
        <View style={style.eventClock}>
          <FontAwesome5 name='calendar-day' size={20} color='black' />
          <Text>12:30pm</Text>
        </View>
        <View style={style.eventAge}>
          <FontAwesome5 name='calendar-day' size={20} color='black' />
          <Text> All</Text>
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
          Bookstore Spring Open House
        </Text>
        <Text
          style={{
            textAlign: 'justify',
            fontFamily: 'light',
            fontSize: SIZES.small + 0.5,
            letterSpacing: -0.1
          }}
        >
          Join us for the Sportman's Dinner feasr at Carnegie Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Aut commodi voluptatibus
          fugit.olor sit amet consectetur, adipisicing elit. Aut commodi
          voluptatibus fugit.
        </Text>
      </View>
    </View>
  );
};

export default UpcomingEventRow;
