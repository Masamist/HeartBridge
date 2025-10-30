import {StyleSheet} from "react-native";
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/scaling'

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#F5979D',
    height: verticalScale(18),
    justifyContent:'center',
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9'
  },
  title:{
    fontFamily: getFontFamily('Inter_24pt', '500'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  inactiveTitle:{
    color: '#79869F'
  },
})

export default style;