import { StyleSheet } from "react-native";
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/scaling'

const style = StyleSheet.create({
  button: {
    height: verticalScale(40),
    justifyContent:'center',
    borderRadius: horizontalScale(30)
  },
  disabled: {
    opacity:0.5,
  },
  title:{
    fontFamily: getFontFamily('Montserrat', '500'),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(19),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  titleFontWhite: {
    color: '#FFFFFF',
  },
  titleFontGrey: {
    color: '#4F4F4F',
  },
  bgPink: {
    backgroundColor: '#F5979D',
  },
  bgYellow: {
    backgroundColor: '#FDD068',
  },
  bgGrey: {
    backgroundColor: '#E5E5EA',
  },
})

export default style;