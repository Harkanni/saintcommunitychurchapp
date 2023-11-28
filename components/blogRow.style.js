import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

const style = StyleSheet.create({
  blogPostWrapper: {
    backgroundColor: COLORS.lightWhite,
    marginHorizontal: SIZES.small,
    borderRadius: SIZES.xSmall - 5,
    padding: SIZES.xSmall - 5,
    flexDirection: 'row',
    maxHeight: 150,
    marginBottom: SIZES.small
  },
  blogImageContainer: {
    width: '40%',
    // height: 100,
    borderRadius: SIZES.xSmall,
    overflow: 'hidden',
    backgroundColor: 'yellow'
  },
  blogImage: {
    // aspectRatio: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  blogContentWrapper: {
    paddingHorizontal: SIZES.xSmall - 3,
    width: '60%'
    // backgroundColor: 'red',
  },
  blogHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  blogHeaderText: {
    fontFamily: 'light',
    fontSize: SIZES.xSmall
  },
  blogTitleText: {
    fontFamily: 'bold'
  },
  blogContentText: {
    fontFamily: 'light',
    fontSize: SIZES.small,
    textAlign: 'justify'
  }
});

export default style;
