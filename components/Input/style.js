import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  label: {
    fontFamily: getFontFamily('Montserrat', '500'),
    fontSIze: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    paddingBottom: verticalScale(4),
    color: '#4F4F4F',
  },
  input: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    borderColor: 'rgba(167, 167, 167, 0.5)',
    borderWidth: 1,
    borderBottomWidth:1, // to override full borderWidth
    borderRadius: horizontalScale(5),
    fontFamily: getFontFamily('Montserrat', '500'),
  },
});

export default style;
