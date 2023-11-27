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
    paddingHorizontal: SIZES.large
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
  appNavigationWrapper: {
    width: SIZES.width,
    paddingHorizontal: SIZES.small,
    marginTop: SIZES.large,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 0.51,
    // paddingVertical: SIZES.xSmall - 5,
    marginBottom: SIZES.xSmall
  },
  appNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navText: {
    color: COLORS.lightWhite,
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    width: 100,
    textAlign: 'center',
    marginBottom: -2
  },
  bgRed: {
    borderBottomColor: COLORS.red,
    borderBottomWidth: 3
  },
  bgNone: {
    borderBottomColor: null,
    borderBottomWidth: 0
  }
});

export default style;
