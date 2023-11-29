import { View, Text, Image } from 'react-native';
import React from 'react';
import style from './blogRow.style';

const PrayerPostRow = () => {
  return (
    <View style={style.blogPostWrapper}>
      <View style={style.blogImageContainer}>
        <Image
          source={require('../assets/images/bg_dark.jpg')}
          style={style.blogImage}
        />
      </View>
      <View style={style.blogContentWrapper}>
        <View style={style.blogHeader}>
          <Text style={style.blogHeaderText}>Christian Life</Text>
          <Text style={style.blogHeaderText}>April 16, 2018</Text>
        </View>

        <View style={style.blogTitle}>
          <Text style={style.blogTitleText}>
            Drawing Near To God Through Sanctification
          </Text>
        </View>

        <View style={style.blogContent}>
          <Text numberOfLines={4} style={style.blogContentText}>
            It is a long established fact that a reader will be distracted by
            the readable content of. Read More
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PrayerPostRow;
