import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';
import { StatusBar } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    flex: 1
  },
  appBarWrapper: {
    width: SIZES.width,
    paddingHorizontal: SIZES.large,
    marginBottom: SIZES.large
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight + 15 || 0
  },
  menuWrapper: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontFamily: 'semibold',
    fontSize: SIZES.large,
    marginTop: 3
  },
  blogPostWrapper: {
   backgroundColor: COLORS.lightWhite,
   marginHorizontal: SIZES.small,
   borderRadius: SIZES.xSmall - 5,
   padding: SIZES.xSmall -5,
   flexDirection: "row",
   maxHeight: 150
  },
  blogImageContainer: {
   width: '40%',
   // height: 100,
   borderRadius: SIZES.xSmall,
   overflow: 'hidden',
   backgroundColor: 'yellow',
  },
  blogImage: {
   // aspectRatio: 1,
   resizeMode: 'cover',
   width: '100%',
   height: '100%',
  },
  blogContentWrapper: {
   paddingHorizontal: SIZES.xSmall -3,
   width: '60%',
   // backgroundColor: 'red',
  },
  blogHeader: {
   flexDirection: 'row',
   justifyContent: 'space-between'
  },
  blogHeaderText: {
   fontFamily: 'light',
   fontSize: SIZES.xSmall,
  },
  blogTitleText: {
   fontFamily: 'bold',
  },
  blogContentText: {
   fontFamily: 'light',
   fontSize: SIZES.small,
   textAlign: 'justify',
  }
});

export default style;
