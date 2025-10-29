import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  label: {
    fontFamily: getFontFamily('Montserrat', '400'),
    fontSIze: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    color: '#4F4F4F',
  },
  input: {
    paddingVertical: verticalScale(12),
    borderColor: 'rgba(167, 167, 167, 0.5)',
    borderWidth: 1,
    borderBottomWidth:1, // to override full borderWidth
    borderRadius: horizontalScale(5),
    fontFamily: getFontFamily('Montserrat', '400'),
  }
});

export default style;
