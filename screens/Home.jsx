import { View, Text, SafeAreaView, FlatList, Image } from 'react-native';
import React from 'react';
import style from './home.style';
import { ImageBackground } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import NavTab from '../components/NavTab';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
   const navigation = useNavigation()
  return (
    <SafeAreaView style={style.container}>
      <ImageBackground
        source={require('../assets/images/bg_dark.jpg')}
        style={style.imageBackground}
        resizeMode='cover'
      >
        <View style={style.appBarWrapper}>
          <View style={style.appBar}>
            <View style={style.logoContainer}>
              <Image
                source={require('../assets/images/LOGO.png')}
                style={style.logo}
              />
            </View>
            <Text style={style.title}>Saints Community Church</Text>
            {/* <FontAwesome5 name='user-alt' size={16} color='white' /> */}
          </View>
        </View>
        <ScrollView>
          <View style={style.quoteWrapper}>
            <View style={style.quoteHeader}>
              <Text style={style.quoteHeaderText}>Thought of the Day</Text>
              <FontAwesome5 name='share-alt' size={24} color='white' />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={style.quote}>
                At the end of the day, before you close your eyes, be content
                with what you've done and be content with what you've done and
                be proud of who you are.
              </Text>
            </View>
          </View>

          <NavTab />
        </ScrollView>

        <View style={style.bottomNavigationWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
               <View style={style.bottomNavIconContainer}>
                  <FontAwesome5 name='home' size={20} color='white' />
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Event')}>
               <View style={style.bottomNavIconContainer}>
                  <FontAwesome5 name='calendar-day' size={20} color='white' />
               </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Blog')}>
               <View style={style.bottomNavIconContainer}>
                  <MaterialIcons name='message' size={24} color='white' />
               </View>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
