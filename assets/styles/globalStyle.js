import {StyleSheet} from 'react-native';
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";


const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  outerContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(12),
  },
});

export default globalStyle;