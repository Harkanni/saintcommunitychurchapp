import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import style from './navTab.style';
import { FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import { SIZES } from '../constants';
import { FlatList } from 'react-native';
import { Navigation } from '../constants/navigation';
import { useNavigation } from '@react-navigation/native';

const NavTab = () => {
   const navigation = useNavigation()
  return (
    <View>
      <View style={[style.appNavigationWrapper, {}]}>
        {/* EVENTS */}
        <TouchableOpacity style={style.navTabContainer} onPress={() => navigation.navigate('Event')}>
            <View style={style.navTab}>
              <FontAwesome5 name='calendar-day' size={20} color='black' />
              <View style={{ marginTop: -3 }}>
                <Text style={{ fontFamily: 'bold', fontSize: SIZES.small +5 }}>
                  Events
                </Text>
                <Text style={style.tabDescription}>List of events</Text>
              </View>
            </View>
        </TouchableOpacity>
        {/* END OF EVENTS */}

        {/* BLOGS */}
        <TouchableOpacity style={style.navTabContainer}>
          <View style={style.navTab}>
            <MaterialIcons name='my-library-books' size={24} color='black' />
            <View style={{ marginTop: -3 }}>
              <Text style={{ fontFamily: 'bold', fontSize: SIZES.small +5 }}>
                Blogs
              </Text>
              <Text style={style.tabDescription}>Church content</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* END OF BLOGS */}

        {/* Prayers */}
        <TouchableOpacity style={style.navTabContainer}>
          <View style={style.navTab}>
            <FontAwesome5 name='book-reader' size={24} color='black' />
            <View style={{ marginTop: -3 }}>
              <Text style={{ fontFamily: 'bold', fontSize: SIZES.small +5 }}>
                Prayers
              </Text>
              <Text style={style.tabDescription}>Read prayers</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* END OF Prayers */}

        {/* Books */}
        <TouchableOpacity style={style.navTabContainer}>
          <View style={style.navTab}>
            <Feather name='server' size={24} color='black' />
            <View style={{ marginTop: -3 }}>
              <Text style={{ fontFamily: 'bold', fontSize: SIZES.small +5 }}>
                Books
              </Text>
              <Text style={style.tabDescription}>List of Church Books</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* END OF Books */}

        {/* Gallery */}
        <TouchableOpacity style={style.navTabContainer}>
          <View style={style.navTab}>
            <FontAwesome5 name='image' size={24} color='black' />
            <View style={{ marginTop: -3 }}>
              <Text style={{ fontFamily: 'bold', fontSize: SIZES.small +5 }}>
                Gallery
              </Text>
              <Text style={style.tabDescription}>Videos and Gallery</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* END OF Gallery */}

        {/* Find Church */}
        <TouchableOpacity style={style.navTabContainer}>
          <View style={style.navTab}>
            <FontAwesome5 name='search' size={24} color='black' />
            <View style={{ marginTop: -3 }}>
              <Text style={{ fontFamily: 'bold', fontSize: SIZES.small +4 }}>
                Find Church
              </Text>
              <Text style={style.tabDescription}>Find nearby Churches</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* END OF Find Church */}

        {/* About */}
        <TouchableOpacity style={style.navTabContainer}>
          <View style={style.navTab}>
            <FontAwesome5 name='church' size={24} color='black' />
            <View style={{ marginTop: -3 }}>
              <Text style={{ fontFamily: 'bold', fontSize: SIZES.small +5 }}>
                About
              </Text>
              <Text style={style.tabDescription}>Read About The Church</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* END OF About */}

        {/* Contact */}
        <TouchableOpacity style={style.navTabContainer}>
          <View style={style.navTab}>
            <MaterialIcons name='message' size={24} color='black' />
            <View style={{ marginTop: -3 }}>
              <Text
                style={{ fontFamily: 'bold', fontSize: SIZES.small +5 }}
              >
                Contact
              </Text>
              <Text style={style.tabDescription}>Message to church</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* END OF Contact */}
      </View>
    </View>
  );
};

export default NavTab;
