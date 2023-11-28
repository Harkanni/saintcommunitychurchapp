import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import style from './blog.style';
import { ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import DrawerNavigation from '../components/DrawerNavigation';
import BottombarNavigation from '../components/BottombarNavigation';
import { useNavigation } from '@react-navigation/native';
import BlogPosts from '../components/BlogPosts';


const Blog = () => {
   const navigation = useNavigation();
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
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <FontAwesome5 name='bars' size={24} color='white' />
              </TouchableOpacity>
              <Text style={style.title}>Blogs</Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <FontAwesome5 name='search' size={24} color='white' />
            </TouchableOpacity>
          </View>
        </View>

        <BlogPosts />

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
               <Text style={style.blogTitleText}>Drawing Near To God Through Sanctification</Text>
            </View>

            <View style={style.blogContent}>
               <Text numberOfLines={4} style={style.blogContentText}>It is a long established fact that a reader will be distracted by the readable content of. Read More</Text>
            </View>
         </View>

        </View>

      </ImageBackground>
    </SafeAreaView>
  );
};

export default Blog;
