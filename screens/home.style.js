import { StyleSheet } from 'react-native';
import { SIZES, COLORS } from '../constants';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    opacity: 1.2,
    backgroundColor: '#FFFFFF',
  },
  appBarWrapper: {
    paddingHorizontal: SIZES.large,
    paddingTop: SIZES.xxLarge,
    backgroundColor: 'red',
  },
  appBar: {
   //  position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  logoContainer: {},
  logo: {
    aspectRatio: 1,
    resizeMode: 'contain'
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'regular',
    fontSize: 18,
    letterSpacing: -1
  },
  quoteWrapper: {
    marginTop: SIZES.xxLarge,
    marginHorizontal: SIZES.large
  },
  quoteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  quoteHeaderText: {
    color: '#FFFFFF',
    fontFamily: 'semibold',
    fontSize: 18
    // letterSpacing: -1
  },
  quote: {
    color: COLORS.lightWhite,
    lineHeight: SIZES.large + 5,
    fontFamily: 'medium'
  },
  appNavigationWrapper: {
    marginTop: SIZES.xxLarge + 10,
    marginHorizontal: SIZES.small,
    flexDirection: 'row',
    //  width: SIZES.width -35,
    gap: 10
  },
  navTabContainer: {
    backgroundColor: 'white',
    width: '48%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
  navTab: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'flex-start'
  },
  tabDescription: {
    fontSize: SIZES.xSmall,
    marginTop: -SIZES.xSmall + 3
  }
});

export default style;
