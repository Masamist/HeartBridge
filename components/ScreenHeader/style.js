import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: horizontalScale(16),
    // paddingVertical: verticalScale(12),
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(8),
  },
});
export default style;