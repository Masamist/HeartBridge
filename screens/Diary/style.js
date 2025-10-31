import {StyleSheet} from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  containerRelative: {
    flex: 1,
    position: 'relative',
    overflow: 'visible',
  },
  diaryContainer: {
    zIndex: 1,
    elevation: 1,
  },
  tab: {
    marginTop: verticalScale(15),
    marginBottom: verticalScale(10),
  },
  inputContainer: {
    position: 'absolute',
    bottom: verticalScale(5),
    left: horizontalScale(3),
    right: horizontalScale(3),
    zIndex: 10,
    elevation: 10,
  }
})

export default style