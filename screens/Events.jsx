import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import style from './event.style';
import { ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
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
              <Text style={style.title}>Events</Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <FontAwesome5 name='search' size={24} color='white' />
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.appNavigationWrapper}>
          <View style={style.appNavigation}>
            <TouchableOpacity
              onPress={() => {
                setActiveTab('upcoming');
              }}
            >
              <Text
                style={[
                  style.navText,
                  activeTab == 'upcoming' ? style.bgRed : style.bgNone
                ]}
              >
                Upcoming
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setActiveTab('past')}>
              <Text
                style={[
                  style.navText,
                  activeTab == 'past' ? style.bgRed : style.bgNone
                ]}
              >
                Past
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {activeTab == 'upcoming' ? <UpcomingEvents /> : <PastEvents />}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Events;
