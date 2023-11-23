import { StyleSheet } from 'react-native';
import { SIZES } from '../constants';

const style = StyleSheet.create({
  appNavigationWrapper: {
    marginTop: SIZES.xxLarge + 10,
    marginHorizontal: SIZES.small,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 60,
    //  width: SIZES.width -35,
    gap: 10
  },
  navTabContainer: {
    backgroundColor: 'white',
    width: '48%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10
  },
  navTab: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start'
  },
  tabDescription: {
    fontSize: SIZES.xSmall,
    marginTop: -SIZES.xSmall + 3
  }
});

export default style;
