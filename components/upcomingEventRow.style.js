import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const style = StyleSheet.create({
   eventWrapper: {
      backgroundColor: COLORS.lightWhite,
      marginTop: SIZES.large-5,
      marginHorizontal: SIZES.small,
      borderRadius: SIZES.small,
      overflow: 'hidden',
      // padding: SIZES.large,
   },
   eventHeader :{
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: COLORS.gray2,
      paddingVertical: SIZES.small,
      paddingHorizontal: SIZES.large,
   },
   eventDate: {
      flexDirection: 'row',
      gap: 10
   },
   eventClock: {
      flexDirection: 'row',
      gap: 10,
   },
   eventAge: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: 10,
   },
   eventContainer: {
      padding: SIZES.large,
   }
})

export default style