import { StyleSheet } from 'react-native';
import { SIZES } from '../constants';
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
    alignItems: 'center',
  },
  title: {
   color: 'white',
   fontFamily: 'semibold',
   fontSize: SIZES.large,
   marginTop: 3
  }
});

export default style;
