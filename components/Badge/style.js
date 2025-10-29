import { StyleSheet } from "react-native";
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/scaling'

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#FDD068',
    height: verticalScale(22),
    justifyContent:'center',
    borderRadius: horizontalScale(50)
  },
  title:{
    fontFamily: getFontFamily('Montserrat', '600'),
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(12),
    color: '#4F4F4F',
    textAlign: 'center',
  },
})

export default style;