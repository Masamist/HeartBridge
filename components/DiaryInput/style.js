import { StyleSheet } from "react-native";
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/scaling'

const style = StyleSheet.create({
  input: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(18),
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(167, 167, 167, 1)',
    borderWidth: 1,
    borderBottomWidth:1, // to override full borderWidth
    borderRadius: horizontalScale(50),
    fontFamily: getFontFamily('Montserrat', '500'),
  },
})

export default style;