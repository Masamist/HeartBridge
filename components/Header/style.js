import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  title1: {
    fontFamily: getFontFamily('Montserrat', '500'),
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
  },
  title2: {
    fontFamily: getFontFamily('Montserrat', '500'),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
  },
  title3: {
    fontFamily: getFontFamily('Montserrat', '500'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
  title4: {
    fontFamily: getFontFamily('Montserrat', '500'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(20),
  },
  title5: {
    fontFamily: "Scada-Bold",
    fontSize: scaleFontSize(24)
  },
});

export default style;